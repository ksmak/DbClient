import MaterialTailwind from "@material-tailwind/react"
import { InputField, Prisma, SearchField } from "@prisma/client"
const { Spinner, Alert, Dialog, Card, CardBody, CardFooter } = MaterialTailwind
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node"
import { useActionData, useLoaderData, useOutletContext, useSubmit } from "@remix-run/react"
import { useEffect, useState } from "react"
import api from "~/api"
import CustomButton from "~/ui/elements/custom_button"
import Panel from "~/ui/elements/panel"
import { ContexType } from "./dashboard"
import ConditionDialog from "~/ui/dialogs/condition_dialog"
import { ICondition } from "~/types/types"

export async function loader({
    request,
    params,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    let searchForm: any | undefined
    searchForm = await api.db.getSearchForm(Number(params.formId))
    return json({ searchForm, state })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let ok: boolean = false
    let errors: string = ''
    let docs: { formId?: number, ids?: number[] } | null = null
    const formData = await request.formData()
    const {
        _action,
        _user,
        _inputFormId,
        ...values
    } = Object.fromEntries(formData)
    try {
        let jsonData = JSON.parse(String(values.json))
        const results: { id: number }[] | [] = await api.doc.searchDoc(jsonData)
        docs = {
            formId: Number(_inputFormId),
            ids: results.map((item: any) => item.id)
        }
        ok = true
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            errors = e.message
        } else {
            throw e
        }
    }
    return json({ errors })
}

export default function SearchData() {
    const { conditions, setConditions } = useOutletContext<ContexType>()
    const { searchForm, state } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()
    const submit = useSubmit()
    const [showError, setShowError] = useState(false)
    const [showCondition, setShowCondition] = useState(false)
    const [cond, setCond] = useState<ICondition>({})
    const [condIndex, setCondIndex] = useState<number | null>(null)
    const [fld, setFld] = useState<SearchField & { field: InputField } | null>(null)
    const userId = 19;

    const handleOpenCondition = async (cond: ICondition, condIndex: number | null = null) => {
        setCondIndex(condIndex)
        setCond(cond)
        setShowCondition(true)
    }

    const handleAddCondition = () => {
        if (fld) {
            handleOpenCondition({
                oper: ['TEXT', 'CYRILLIC', 'DICT'].includes(fld.field.fieldType) ? '=' : 'between',
                field: fld
            })
        }
    }

    const handleDeleteCondition = () => {
        if (condIndex !== null) {
            let conds = [...conditions]
            if (conds[condIndex].log) {
                conds.splice(condIndex, 1)
            } else {
                conds.splice(condIndex - 1, 2)
            }
            setConditions(conds)
        }
    }

    const handleBktBoth = () => {
        if (conditions.length > 0) {
            setConditions([
                { log: '(' }, ...conditions, { log: ')' }])
        }
    }

    const handleBktLeft = () => {
        if (condIndex !== null && !conditions[condIndex].log) {
            let conds = [...conditions]
            conds.splice(condIndex, 0, { log: '(' })
            setConditions(conds)
        }
    }

    const handleBktRight = () => {
        if (condIndex !== null && !conditions[condIndex].log) {
            let conds = [...conditions]
            conds.splice(condIndex + 1, 0, { log: ')' })
            setConditions(conds)
        }
    }

    const handleReplaceOrAnd = (log: string) => {
        if (condIndex !== null && ['OR', 'AND'].includes(String(conditions[condIndex].log))) {
            let conds = [...conditions]
            conds.splice(condIndex, 1, { log: log })
            setConditions(conds)
        }
    }

    const handleSearch = () => {
        submit({
            _action: "searchDocument",
            _user: userId ? userId : '',
            _inputFormId: searchForm.inputFormId,
            json: JSON.stringify(conditions)
        }, {
            method: "post",
        })
    }

    useEffect(() => {
        if (data?.errors) {
            setShowError(true)
        }
    }, [data])

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">{searchForm?.title}</h1>
            <Alert className="text-white bg-red-500" open={showError} onClose={() => setShowError(false)}>
                {data?.errors ? data.errors : ""}
            </Alert>
            <ConditionDialog
                condIndex={condIndex}
                cond={cond}
                setCond={setCond}
                show={showCondition}
                setShow={setShowCondition}
                conditions={conditions}
                setConditions={setConditions}
            />
            <div
                className="flex items-center gap-3"
            >
                <CustomButton
                    className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                    onClick={() => handleSearch()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Search
                </CustomButton>
            </div>
            <div className="flex gap-3 w-full h-full">
                <Panel className="w-1/3">
                    {searchForm && searchForm.fields.map((field: SearchField & { field: InputField }) => (
                        <div
                            key={field.id}
                            className={`${fld?.id === field.id ? 'bg-blue-gray-100' : ''} hover:cursor-pointer hover:bg-blue-gray-100 select-none`}
                            onClick={() => setFld(field)}
                            onDoubleClick={() => handleOpenCondition({
                                oper: ['TEXT', 'CYRILLIC', 'DICT'].includes(field.field.fieldType) ? '=' : 'between',
                                field: field
                            })}
                        >
                            {field.title}
                        </div>
                    ))}
                </Panel>
                <div className="self-center flex flex-col justify-center gap-1">
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => handleAddCondition()}
                    >
                        Add
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => handleDeleteCondition()}
                    >
                        Delete
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => setConditions([])}
                    >
                        Erase
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => handleBktBoth()}
                    >
                        ()
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => handleBktLeft()}
                    >
                        (
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => handleBktRight()}
                    >
                        )
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => handleReplaceOrAnd('OR')}
                    >
                        OR
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center"
                        onClick={() => handleReplaceOrAnd('AND')}
                    >
                        AND
                    </CustomButton>
                </div>
                <Panel className="w-2/3">
                    {conditions.map((c: ICondition, index: number) => (
                        <div
                            key={index}
                            className={`${condIndex === index ? 'bg-blue-gray-100' : ''} hover:cursor-pointer`}
                            onClick={() => setCondIndex(index)}
                        >
                            {c.log
                                ? <div

                                >---- {c.log} ----</div>
                                : <div
                                    onDoubleClick={() => handleOpenCondition(c, index)}
                                >
                                    {c.field?.title} {c.oper} {c.val1} {c.val2}
                                </div>}
                        </div>
                    ))}
                </Panel>
            </div>
        </div>
    )
}
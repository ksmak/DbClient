import MaterialTailwind from "@material-tailwind/react"
const { Spinner, Alert, Dialog, Card, CardBody, CardFooter } = MaterialTailwind
import { InputField, Prisma } from "@prisma/client"
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useOutletContext } from "@remix-run/react"
import { useEffect, useRef, useState } from "react"
import api from '~/api'
import CustomButton from "~/ui/elements/custom_button"
import { IDict, IDocument, IField, ITable } from "~/types/types"
import CustomInput from "~/ui/elements/custom_input"
import CustomSelect from "~/ui/elements/custom_select"
import { ContexType } from "./dashboard"

export async function loader({
    request,
    params,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const docId = url.searchParams.get("docId")
    const state = url.searchParams.get("state")
    let inputForm: any | undefined
    let doc: IDocument
    inputForm = await api.db.getInputForm(Number(params.formId))
    doc = await api.doc.getDoc(docId ? Number(docId) : null, inputForm)
    return json({ inputForm, doc, state })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let ok: boolean = false
    let errors: string = ''
    let docs: { formId?: number, ids?: number[] } = {}
    const formData = await request.formData()
    const {
        _action,
        _user,
        _inputFormId,
        _id,
        ...values
    } = Object.fromEntries(formData)
    try {
        const inputForm = await api.db.getInputForm(Number(_inputFormId))

        if (_action === 'openForCreate') {
            return redirect(`/dashboard/enter_data/${_inputFormId}?state=edit`)
        }
        else if (_action === 'openForEdit') {
            return redirect(`/dashboard/enter_data/${_inputFormId}?state=edit&docId=${_id}`)
        }
        else if (_action === 'openForSearch') {
            return redirect(`/dashboard/enter_data/${_inputFormId}?state=search`)
        }
        else if (_action === 'saveDocument') {
            if (_id) {
                await api.doc.updateDoc(Number(_id), Number(_user), inputForm, values)
                return redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`)
            } else {
                await api.doc.createDoc(Number(_user), inputForm, values)
                return redirect(`/dashboard/enter_data/${_inputFormId}?`)
            }
        }
        else if (_action === 'findDocument') {
            const results: { id: number }[] | [] = await api.doc.findDoc(inputForm, values)
            if (results.length > 100) {
                errors = "Find records more 100"
            } else {
                docs = {
                    formId: inputForm.id,
                    ids: results.map((item: any) => item.id)
                }
                ok = true
            }
        }
        else if (_action === 'cancelUpdate') {
            if (_id) {
                return redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`)
            } else {
                return redirect(`/dashboard/enter_data/${_inputFormId}?`)
            }
        }
        else if (_action === 'deleteDocument') {
            if (_id) {
                await api.doc.deleteDoc(Number(_id))
                return redirect(`/dashboard/enter_data/${_inputFormId}`)
            }
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            errors = e.message
        } else {
            throw e
        }
    }

    return json({ errors, docs, ok })
}

export default function InputForms() {
    const location = useLocation()
    const navigation = useNavigation()
    const navigate = useNavigate()
    const formRef = useRef<HTMLFormElement>(null)
    const { dictionaries, docs, setDocs } = useOutletContext<ContexType>()
    const userId = 19;
    const [open, setOpen] = useState(false)
    const { inputForm, doc, state } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()
    const [showFind, setShowFind] = useState(false)
    const fetcher = useFetcher()
    const isDeleting = fetcher.state !== "idle"

    const handleOpenInputForm = () => {
        setShowFind(false)
        if (docs && docs.ids?.length) {
            navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`)
        } else {
            navigate(`/dashboard/enter_data/${docs.formId}?state=search`)
        }
    }

    const handleDelete = async (event: any) => {
        const response = confirm(
            "Please confirm you want to delete this record."
        )
        if (!response) {
            event.preventDefault()
        }
    }

    useEffect(() => {
        if (data?.errors) {
            setOpen(true)
        }
        if (data?.docs && data?.ok) {
            setDocs(data.docs)
            setShowFind(true)
        }
        if (navigation.state === "idle" && data?.ok) {
            formRef.current?.reset()
        }
    }, [data])

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            {state} {data?.ok}
            <Dialog
                placeholder=""
                size="sm"
                open={showFind}
                handler={() => handleOpenInputForm()}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full" placeholder="">
                    <CardBody className="flex flex-col gap-4 overflow-auto" placeholder="">
                        <div className="text-bold p-1">Find: {docs.ids?.length}</div>
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-row gap-3" placeholder="">
                        <CustomButton
                            className="bg-green-500 hover:shadow-green-100"
                            onClick={() => handleOpenInputForm()}
                        >
                            OK
                        </CustomButton>
                    </CardFooter>
                </Card>
            </Dialog>
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">{inputForm?.title}</h1>
            <Alert className="text-white bg-red-500" open={open} onClose={() => setOpen(false)}>
                {data?.errors ? data.errors : ""}
            </Alert>
            <div
                className="flex items-center gap-3"
            >
                {!['edit', 'search'].includes(String(state))
                    ? <Form method="post">
                        <input type="hidden" name="_user" value={userId} />
                        <input type="hidden" name="_inputFormId" value={inputForm.id} />
                        <CustomButton
                            className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                            type="submit"
                            name="_action"
                            value="openForCreate"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Create
                        </CustomButton>
                    </Form>
                    : null}
                {!['edit', 'search'].includes(String(state))
                    ? <Form method="post">
                        <input type="hidden" name="_user" value={userId} />
                        <input type="hidden" name="_inputFormId" value={inputForm.id} />
                        <CustomButton
                            className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                            type="submit"
                            name="_action"
                            value="openForSearch"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            Search
                        </CustomButton>
                    </Form>
                    : null}
                {state === "search"
                    ? <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                        form="documentForm"
                        type="submit"
                        name="_action"
                        value="findDocument"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        Find
                    </CustomButton>
                    : null}
                {doc.id && state !== 'edit'
                    ? <Form method="post">
                        <input type="hidden" name="_user" value={userId} />
                        <input type="hidden" name="_inputFormId" value={inputForm.id} />
                        <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
                        <CustomButton
                            className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                            type="submit"
                            name="_action"
                            value="openForEdit"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                            Edit
                        </CustomButton>
                    </Form>
                    : null}
                {state === 'edit'
                    ? <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                        form="documentForm"
                        type="submit"
                        name="_action"
                        value="saveDocument"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                        Save
                    </CustomButton>
                    : null}
                {state === 'edit'
                    ? <Form method="post">
                        <input type="hidden" name="_user" value={userId} />
                        <input type="hidden" name="_inputFormId" value={inputForm.id} />
                        <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
                        <CustomButton
                            className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                            type="submit"
                            name="_action"
                            value="cancelUpdate"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                            Cancel
                        </CustomButton>
                    </Form>
                    : null}
                {doc.id && state !== 'edit'
                    ? <Form method="post">
                        <input type="hidden" name="_user" value={userId} />
                        <input type="hidden" name="_inputFormId" value={inputForm.id} />
                        <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
                        <CustomButton
                            className="bg-red-500 hover:shadow-red-100"
                            disabled={isDeleting}
                            onClick={handleDelete}
                            type="submit"
                            name="_action"
                            value="deleteDocument"
                        >
                            {isDeleting
                                ? <>
                                    <Spinner className="w-4 h-4" />
                                    Deleting...
                                </>
                                : <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    Delete
                                </>}
                        </CustomButton>
                    </Form>
                    : null}
            </div>
            <div className="bg-white border p-1 shadow-blue-gray-700 shadow-md overflow-auto">
                <Form
                    key={location.key}
                    id="documentForm"
                    method="post"
                    ref={formRef}
                >
                    <input type="hidden" name="_user" value={userId} />
                    <input type="hidden" name="_inputFormId" value={inputForm.id} />
                    <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
                    {inputForm?.groups && inputForm.groups.map((group: any) => (
                        <div key={group.id} className="mb-2">
                            <h2 className="col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4">{group.title}</h2>
                            <div className="border p-1 grid grid-cols-3 gap-1">
                                {group?.fields && group.fields.map((fld: InputField) => {
                                    const tableName = `tbl_${fld.groupId}`
                                    const fieldName = `f${fld.id}`
                                    let defVal = doc.tables.find(tbl => tbl.name === tableName)?.fields.find(fld => fld.name === fieldName)?.value
                                    defVal = defVal ? defVal : ''
                                    const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`
                                    switch (fld.fieldType) {
                                        case "TEXT":
                                            return (
                                                <CustomInput
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    type="text"
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "CYRILLIC":
                                            return (
                                                <CustomInput
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    type="text"
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "INTEGER":
                                            return (
                                                <CustomInput
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    type="number"
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "NUMERIC":
                                            return (
                                                <CustomInput
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    type="number"
                                                    step="0.01"
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "DICT":
                                            const dic = dictionaries.find((item: IDict) => item.id === fld.dicId)
                                            return (
                                                <CustomSelect
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                                >
                                                    <option>-</option>
                                                    {['create', 'edit', 'search', 'find'].includes(String(state))
                                                        ? dic?.data_edit.map((item: any) => (
                                                            <option key={item.id} value={item.id}>{item.title}</option>
                                                        ))
                                                        : dic?.data_browse.map((item: any) => (
                                                            <option key={item.id} value={item.id}>{item.title}</option>
                                                        ))}
                                                </CustomSelect>
                                            )
                                        case "DATE":
                                            return (
                                                <CustomInput
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    type="date"
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "TIME":
                                            return (
                                                <CustomInput
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    type="time"
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        // case "FILE":
                                        //     return (
                                        //         <CustomInput
                                        //             key={fld.id}
                                        //             className={cls}
                                        //             id={fieldName}
                                        //             title={fld.title}
                                        //             type="file"
                                        //             name={fieldName}
                                        //             defaultValue={defVal}
                                        //             required={fld.isRequire && state === 'edit'}
                                        //             disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                                        //             size={fld.len ? fld.len : 30}
                                        //             maxLength={fld.len ? fld.len : 30}
                                        //         />
                                        //     )
                                    }
                                })}
                            </div>
                        </div>
                    ))}
                </Form>
            </div>
        </div>
    )
}
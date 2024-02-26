import MaterialTailwind from "@material-tailwind/react"
const { Spinner, Alert, Dialog, Card, CardBody, CardFooter } = MaterialTailwind
import { InputField, Prisma } from "@prisma/client"
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useOutletContext, useSubmit } from "@remix-run/react"
import { useEffect, useRef, useState } from "react"
import api from '~/api'
import CustomButton from "~/ui/elements/custom_button"
import { ContexType } from "./dashboard"
import SingleGroup from "~/widgets/single_group"
import MultyGroup from "~/widgets/multy_group"
import RecNavigator from "~/widgets/rec_navigator"

export async function loader({
    request,
    params,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const docId = url.searchParams.get("docId")
    const state = url.searchParams.get("state")
    let inputForm: any | undefined
    let doc: any
    inputForm = await api.db.getInputForm(Number(params.formId))
    doc = await api.doc.getDoc(docId ? Number(docId) : null, inputForm)
    return json({ inputForm, doc, state })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let ok: boolean = false
    let errors: string = ''
    let docs: { formId?: number, ids?: number[] } | null = null
    let deletedDocId: number | null = null
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
            let jsonData = JSON.parse(String(values.json))
            if (_id) {
                await api.doc.updateDoc(Number(_user), inputForm, jsonData)
                return redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`)
            } else {
                await api.doc.createDoc(Number(_user), inputForm, jsonData)
                return redirect(`/dashboard/enter_data/${_inputFormId}?`)
            }
        }
        else if (_action === 'findDocument') {
            let jsonData = JSON.parse(String(values.json))
            const results: { id: number }[] | [] = await api.doc.findDoc(inputForm, jsonData)
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
                deletedDocId = (Number(_id))
                ok = true
            }
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            errors = e.message
        } else {
            throw e
        }
    }

    return json({ errors, docs, deletedDocId, ok })
}

export default function InputForms() {
    const { dictionaries, docs, setDocs, current, setCurrent } = useOutletContext<ContexType>()
    const { inputForm, doc, state } = useLoaderData<typeof loader>()
    const [document, setDocument] = useState<typeof doc>(doc)
    const location = useLocation()
    const navigation = useNavigation()
    const navigate = useNavigate()
    const formRef = useRef<HTMLFormElement>(null)
    const userId = 19;
    const [open, setOpen] = useState(false)
    const data = useActionData<typeof action>()
    const [showFind, setShowFind] = useState(false)
    const fetcher = useFetcher()
    const isDeleting = fetcher.state !== "idle"
    const submit = useSubmit()

    useEffect(() => {
        setDocument(doc)
        console.log("useEffect")
    }, [doc])

    const handleSave = () => {
        submit({
            _action: "saveDocument",
            _user: userId ? userId : '',
            _inputFormId: inputForm.id ? inputForm.id : '',
            _id: document.id ? document.id : '',
            json: JSON.stringify(document)
        }, {
            method: "post",
        })
    }

    const handleFind = () => {
        submit({
            _action: "findDocument",
            _user: userId ? userId : '',
            _inputFormId: inputForm.id ? inputForm.id : '',
            _id: document.id ? document.id : '',
            json: JSON.stringify(document)
        }, {
            method: "post",
        })
    }

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
        if (data?.deletedDocId && data?.ok) {
            setDocs(prev => ({ formId: prev.formId, ids: prev.ids?.filter(item => item !== data.deletedDocId) }))
        }
    }, [data])

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
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
            <RecNavigator docs={docs} current={current} setCurrent={setCurrent} />
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
                        // form="documentForm"
                        // type="submit"
                        // name="_action"
                        // value="findDocument"
                        onClick={() => handleFind()}
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
                        // form="documentForm"
                        // type="submit"
                        // name="_action"
                        // value="saveDocument"
                        onClick={() => handleSave()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                        Save
                    </CustomButton>
                    : null}
                {state === 'edit' || state === 'search'
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
                            {!group.isMulty
                                ? <SingleGroup
                                    state={state}
                                    dictionaries={dictionaries}
                                    group={group}
                                    doc={document}
                                    setDoc={setDocument}
                                />
                                : <MultyGroup
                                    state={state}
                                    dictionaries={dictionaries}
                                    group={group}
                                    doc={document}
                                    setDoc={setDocument}
                                />}
                        </div>
                    ))}
                </Form>
            </div>
        </div>
    )
}
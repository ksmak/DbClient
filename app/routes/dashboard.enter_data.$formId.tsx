import { Prisma } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigation, useOutletContext } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import api from '~/components/api';
import EnterDataView from "~/components/UI/widgets/enter_data/view";
import { ContexType } from "~/types/types";

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

export default function EnterData() {
    const { dictionaries, docs, setDocs, current, setCurrent } = useOutletContext<ContexType>()
    const { inputForm, doc, state } = useLoaderData<typeof loader>()
    const [document, setDocument] = useState<typeof doc>(doc)
    const navigation = useNavigation()
    const formRef = useRef<HTMLFormElement>(null)
    const userId = 19;
    const data = useActionData<typeof action>()
    const [showFind, setShowFind] = useState(false)

    useEffect(() => {
        setDocument(doc)
    }, [doc])


    useEffect(() => {
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
        <EnterDataView
            errors={data?.errors}
            open={showFind}
            setOpen={setShowFind}
            docs={docs}
            userId={userId}
            current={current}
            setCurrent={setCurrent}
            formRef={formRef}
            inputForm={inputForm}
            state={state}
            dictionaries={dictionaries}
            doc={document}
            setDoc={setDocument}
        />
    )
}
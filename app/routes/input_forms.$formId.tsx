import MaterialTailwind from "@material-tailwind/react"
const { Alert } = MaterialTailwind
import { InputField, Prisma } from "@prisma/client"
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useActionData, useLoaderData, useParams } from "@remix-run/react"
import { useEffect, useState } from "react"
import api from '~/api'
import CustomButton from "~/ui/elements/custom_button"
import { IDocument, IField, ITable } from "~/types/types"
import CustomInput from "~/ui/elements/custom_input"
import CustomSelect from "~/ui/elements/custom_select"

export type Dict = {
    dictId: number,
    data: {
        id: number,
        title: string,
        is_enabled: boolean
    }[]
}

export async function loader({
    request,
    params,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    const isNew = url.searchParams.get("isNew")
    const docId = url.searchParams.get("docId")
    let doc: IDocument = { tables: [] }
    let dicts: Dict[] = []
    let inputForm: any | undefined
    const dictionaries = await api.db.getDictionaries()
    for (const dict of dictionaries) {
        const data = await api.forms.getDic(dict.id, Boolean(state === 'edit'))
        dicts.push({
            dictId: dict.id,
            data: data
        })
    }
    inputForm = await api.db.getInputForm(Number(params.formId))
    for (const group of inputForm.groups) {
        let tbl: ITable = {
            name: `tbl_${group.id}`,
            fields: []
        }
        for (const field of group.fields) {
            let fld: IField = {
                name: `f${field.id}`,
                _type: field.fieldType,
                value: ''
            }
            tbl.fields.push(fld)
        }
        doc.tables.push(tbl)
    }
    if (docId) {
        doc = await api.doc.getDoc(Number(docId), inputForm)
    }
    return json({ state, inputForm, dicts, doc })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let errors: string | null = null
    let docs: any = []
    let docId: number | null = null
    const formData = await request.formData()
    const { _action, _user, ...values } = Object.fromEntries(formData)
    if (_action === 'openForCreate') {
        return redirect(`/input_forms/${values.formId}?state=edit&isNew=true`)
    }
    if (_action === 'openForSearch') {
        return redirect(`/input_forms/${values.formId}?state=search&isNew=false`)
    }
    if (_action === 'saveDocument') {
        try {
            const inputForm = await api.db.getInputForm(Number(values.inputFormId))
            if (String(values.id) !== '') {
                await api.doc.updateDoc(Number(_user), inputForm, values)
                return redirect(`/input_forms/${values.inputFormId}?docId=${docId}`)
            } else {
                await api.doc.createDoc(Number(_user), inputForm, values)
                return redirect(`/input_forms/${values.inputFormId}`)
            }
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            } else {
                throw e
            }
        }
    }
    if (_action === 'findDocument') {
        try {
            const inputForm = await api.db.getInputForm(Number(values.inputFormId))
            docs = await api.doc.findDoc(inputForm, values)
            if (docs && docs.length > 0) {
                docId = docs[0].id
            }
            return redirect(`/input_forms/${values.inputFormId}?docId=${docId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            } else {
                throw e
            }
        }
    }
    if (_action === 'openForEdit') {
        return redirect(`/input_forms/${values.formId}?state=edit&isNew=false&docId=${values.id}`)
    }
    return json({ errors, docs, docId })
}

export default function InputForms() {
    const userId = 19;
    const [open, setOpen] = useState(false)
    const { state, inputForm, dicts, doc } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()

    useEffect(() => {
        if (data?.errors) {
            setOpen(true)
        }
    }, [data])

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">{inputForm?.title}</h1>
            <Alert className="text-white bg-red-500" open={open} onClose={() => setOpen(false)}>
                {data?.errors ? data.errors : ""}
            </Alert>
            <div
                className="flex items-center gap-3"
            >
                <Form method="post">
                    <input type="hidden" name="_user" value={userId} />
                    <input type="hidden" name="formId" value={inputForm.id} />
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
                <Form method="post">
                    <input type="hidden" name="_user" value={userId} />
                    <input type="hidden" name="formId" value={inputForm.id} />
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
                <CustomButton
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
                <Form method="post">
                    <input type="hidden" name="_user" value={userId} />
                    <input type="hidden" name="formId" value={inputForm.id} />
                    <input type="hidden" name="id" value={doc.id} />
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
                <CustomButton
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
            </div>
            <div className="bg-white border p-1 shadow-blue-gray-700 shadow-md overflow-auto">
                <Form
                    id="documentForm"
                    method="post"
                >
                    <input type="hidden" name="_user" value={userId} />
                    <input type="hidden" name="inputFormId" value={inputForm.id} />
                    <input type="hidden" name="id" value={doc.id} />
                    {inputForm?.groups && inputForm.groups.map((group: any) => (
                        <div key={group.id} className="mb-2">
                            <h2 className="col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4">{group.title}</h2>
                            <div className="border p-1 grid grid-cols-3 gap-1">
                                {group?.fields && group.fields.map((fld: InputField) => {
                                    const tableName = `tbl_${fld.groupId}`
                                    const fieldName = `f${fld.id}`
                                    const defVal = String(doc.tables.find(tbl => tbl.name === tableName)?.fields.find(fld => fld.name === fieldName)?.value)
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
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
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
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
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
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
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
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "DICT":
                                            const dic = dicts.find((item) => item.dictId === fld.dicId)
                                            return (
                                                <CustomSelect
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
                                                >
                                                    <option>-</option>
                                                    {dic?.data.map((item: any) => (
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
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
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
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "FILE":
                                            return (
                                                <CustomInput
                                                    key={fld.id}
                                                    className={cls}
                                                    id={fieldName}
                                                    title={fld.title}
                                                    type="file"
                                                    name={fieldName}
                                                    defaultValue={defVal}
                                                    required={fld.isRequire && state === 'edit'}
                                                    disabled={!fld.isEnable || !(['edit', 'search'].includes(String(state)))}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
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
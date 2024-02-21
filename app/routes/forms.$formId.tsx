import MaterialTailwind from "@material-tailwind/react"
const { Alert, Button } = MaterialTailwind
import { Dictionary, FieldType, InputField, InputForm, Prisma } from "@prisma/client"
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useLoaderData, useParams } from "@remix-run/react"
import { useEffect, useState } from "react"
import api from '~/api'
import FormInput from "~/ui/elements/form_input"
import Input from "~/ui/elements/input_field"
import SelectField from "~/ui/elements/select_field"

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
    let dicts: Dict[] = []
    let inputForm: any | undefined
    let errors: string | null = null
    let doc: any
    const dictionaries = await api.db.getDictionaries()
    for (const dict of dictionaries) {
        const data = await api.forms.getDic(dict.id, Boolean(state === 'edit'))
        dicts.push({
            dictId: dict.id,
            data: data
        })
    }
    try {
        inputForm = await api.db.getInputForm(Number(params.formId))
        for (const field of inputForm.fields) {
            doc[`f${field.id}`] = null
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            errors = e.message
        }
    }
    // if (isNew === 'true') {
    //     doc = {}
    // }
    return json({ state, inputForm, errors, dicts, doc })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let errors: string | null = null
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    if (_action === 'createDoc') {
        return redirect(`/forms/${values.formId}?state=edit&isNew=true`)
    }
}

export default function Forms() {
    const [open, setOpen] = useState(false)
    const { state, inputForm, errors, dicts, doc } = useLoaderData<typeof loader>()

    useEffect(() => {
        if (errors) {
            setOpen(true)
        }
    }, [errors])

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">{inputForm?.title}</h1>
            <Alert className="text-white bg-red-500" open={open} onClose={() => setOpen(false)}>
                {errors ? errors : ""}
            </Alert>
            <div
                className="flex items-center gap-3"
            >
                <Form method="post">
                    <input type="hidden" name="formId" value={inputForm.id} />
                    <Button
                        className="flex items-center gap-3"
                        color="blue-gray"
                        placeholder=''
                        size="sm"
                        type="submit"
                        name="_action"
                        value="createDoc"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Create
                    </Button>
                </Form>
            </div>
            <div className="bg-white w-full border p-1 shadow-blue-gray-700 shadow-md overflow-auto">
                <Form
                    id="editDocument"
                >
                    {inputForm?.groups && inputForm.groups.map((group: any) => (
                        <div key={group.id}>
                            <h2 className="bg-orange-700 text-white font-bold text-sm p-1 pl-4">{group.title}</h2>
                            <div
                                className="border border-blue-gray p-2 mb-2 grid grid-cols-3"
                            >
                                {group?.fields && group.fields.map((fld: InputField) => {
                                    const fieldName = `f${fld.id}`
                                    const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`
                                    switch (fld.fieldType) {
                                        case "TEXT":
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="text"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "CYRILLIC":
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="text"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "INTEGER":
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="number"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "NUMERIC":
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="number"
                                                    step="0.01"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "DICT":
                                            const dic = dicts.find((item) => item.dictId === fld.dicId)
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="number"
                                                    step="0.01"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                    isSelect={true}
                                                    options={dic}
                                                />

                                            )
                                        case "DATE":
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="date"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "TIME":
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="time"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
                                                    size={fld.len ? fld.len : 30}
                                                    maxLength={fld.len ? fld.len : 30}
                                                />
                                            )
                                        case "FILE":
                                            return (
                                                <FormInput
                                                    key={fld.id}
                                                    cls={cls}
                                                    fieldName={fieldName}
                                                    fieldType="file"
                                                    title={fld.title}
                                                    value={doc[fieldName]}
                                                    required={fld.isRequire}
                                                    disabled={!fld.isEnable || state !== 'edit'}
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
import MaterialTailwind from "@material-tailwind/react"
const { Spinner, Alert } = MaterialTailwind
import { InputForm, SearchForm, InputField, FieldType, Prisma } from "@prisma/client"
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useActionData, useFetcher, useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant"
import DictionaryForm from "~/ui/forms/dict_form"
import GroupForm from "~/ui/forms/group_form"
import InputFormForm from "~/ui/forms/input_form"
import SearchFormForm from "~/ui/forms/search_form"
import DbStrucPanel from "~/ui/panels/db_struct"
import api from "~/api"
import { useEffect, useState } from "react"
import CustomButton from "~/ui/elements/custom_button"

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    const inputFormId = url.searchParams.get("inputFormId")
    const searchFormId = url.searchParams.get("searchFormId")
    const dictionaryId = url.searchParams.get("dictionaryId")
    const groupId = url.searchParams.get("groupId")
    const inputFieldId = url.searchParams.get("inputFieldId")
    const inputForms = await api.db.getInputForms()
    const searchForms = await api.db.getSearchForms()
    const dictionaries = await api.db.getDictionaries()
    const groups = await api.db.getGroups(Number(inputFormId))
    const inputFields = await api.db.getInputFields()
    let inputForm, searchForm, dictionary, group, inputField
    switch (state) {
        case 'dictionary': {
            invariant(dictionaryId, "Missing dictionaryId param")
            dictionary = await api.db.getDictionary(Number(dictionaryId))
            break
        }
        case 'inputForm': {
            invariant(inputFormId, "Missing inputFormId param")
            inputForm = await api.db.getInputForm(Number(inputFormId))
            break
        }
        case 'searchForm': {
            invariant(searchFormId, "Missing searchFormId param")
            searchForm = await api.db.getSearchForm(Number(searchFormId))
            break
        }
        case 'group': {
            invariant(groupId, "Missing groupId param")
            group = await api.db.getGroup(Number(groupId))
            inputField = group?.fields.find((item: InputField) => { item.id === Number(inputFieldId) })
            break
        }
    }
    return json({
        state,
        dictionary,
        inputForm,
        searchForm,
        group,
        inputField,
        dictionaries,
        inputForms,
        searchForms,
        groups,
        inputFields,
    })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let errors: string | null = null
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    if (_action === 'updateInputForm') {
        try {
            await api.db.updateInputForm(Number(values.id), {
                id: Number(values.id),
                pos: Number(values.pos),
                title: String(values.title),
            } as InputForm)
            return redirect(`/db_struct?state=inputForm&inputFormId=${values.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyInputForm') {
        try {
            const form = await api.db.createEmptyInputForm(Number(values.cnt))
            return redirect(`/db_struct?state=inputForm&inputFormId=${form.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteInputForm') {
        try {
            await api.db.deleteInputForm(Number(values.id))
            return redirect(`/db_struct`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateSearchForm') {
        try {
            await api.db.updateSearchForm(Number(values.id), {
                id: Number(values.id),
                pos: Number(values.pos),
                title: String(values.title),
            } as SearchForm)
            return redirect(`/db_struct?state=searchForm&searchFormId=${values.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptySearchForm') {
        try {
            const form = await api.db.createEmptySearchForm(Number(values.cnt))
            return redirect(`/db_struct?state=searchForm&searchFormId=${form.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteSearchForm') {
        try {
            await api.db.deleteSearchForm(Number(values.id))
            return redirect(`/db_struct`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateDictionary') {
        try {
            await api.db.updateDictionary(Number(values.id), {
                id: Number(values.id),
                title: String(values.title),
            })
            return redirect(`/db_struct?state=dictionary&dictionaryId=${values.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyDictionary') {
        try {
            const dict = await api.db.createEmptyDictionary(Number(values.cnt))
            return redirect(`/db_struct?state=dictionary&dictionaryId=${dict.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteDictionary') {
        try {
            await api.db.deleteDictionary(Number(values.id))
            return redirect(`/db_struct`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyGroup') {
        try {
            const group = await api.db.createEmptyGroup(Number(values.inputFormId), Number(values.cnt))
            return redirect(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateGroup') {
        try {
            const group = await api.db.updateGroup(Number(values.id),
                {
                    id: Number(values.id),
                    inputFormId: Number(values.inputFormId),
                    pos: Number(values.pos),
                    title: String(values.title),
                    isMulty: Boolean(values.isMulty),
                },
            )
            return redirect(`/db_struct?state=group&inputFormId=${group.inputFormId}&groupId=${group.id}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteGroup') {
        try {
            await api.db.deleteGroup(Number(values.id))
            return redirect('/db_struct')
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateInputField') {
        try {
            await api.db.updateInputField(Number(values.id), {
                id: Number(values.id),
                groupId: Number(values.groupId),
                colSpan: Number(values.colSpan),
                colStart: Number(values.colStart),
                pos: Number(values.pos),
                title: String(values.title),
                len: Number(values.len),
                fieldType: String(values.fieldType) as FieldType,
                dicId: Number(values.dicId),
                isKey: Boolean(values.isKey),
                isVisible: Boolean(values.isVisible),
                isEnable: Boolean(values.isEnable),
                isRequire: Boolean(values.isRequire),
                precision: Number(values.precision),
                isDuplicate: Boolean(values.isDuplicate),
            })
            return redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.groupId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptyInputField') {
        try {
            await api.db.createEmptyInputField(Number(values.groupId), Number(values.cnt))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteInputField') {
        try {
            await api.db.deleteInputField(Number(values.id))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'createEmptySearchField') {
        try {
            await api.db.createEmptySearchField(Number(values.searchFormId), Number(values.cnt))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateSearchField') {
        try {
            await api.db.updateSearchField(Number(values.id), {
                id: Number(values.id),
                pos: Number(values.pos),
                searchFormId: Number(values.searchFormId),
                title: String(values.title),
                fieldId: Number(values.fieldId),
            })
            return redirect(`/db_struct?state=searchForm&searchFormId=${values.searchFormId}`)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteSearchField') {
        try {
            await api.db.deleteSearchField(Number(values.id))
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'generateStructDb') {
        try {
            await api.db.generateStructDb()
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    return json({ errors })
}

export default function DbStruct() {
    const [open, setOpen] = useState(false)
    const {
        state,
        dictionary,
        inputForm,
        searchForm,
        group,
        dictionaries,
        inputForms,
        searchForms,
        groups,
        inputFields
    } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()
    const fetcher = useFetcher()
    const isRestruct = fetcher.state !== "idle"
    const handleRestruct = async (event: any) => {
        const response = confirm(
            "Please confirm you want to restructure database."
        )
        if (!response) {
            event.preventDefault()
        }
    }

    useEffect(() => {
        if (data?.errors) {
            setOpen(true)
        }
    }, [data])

    return (
        <div className="mx-4 flex flex-col gap-3 h-screen pb-5">
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">Db Struct</h1>
            <Alert className="text-white bg-red-500" open={open} onClose={() => setOpen(false)}>
                {data?.errors ? data.errors : ""}
            </Alert>
            <div
                className="flex justify-end items-center gap-3 h-14"
            >
                {state === 'dictionary'
                    ? <Form method="post">
                        <input type="hidden" name="cnt" defaultValue={dictionaries.length + 1} />
                        <CustomButton
                            className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                            type="submit"
                            name="_action"
                            value="createEmptyDictionary"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Dictionary
                        </CustomButton>
                    </Form>
                    : state === 'inputForm'
                        ? <Form method="post">
                            <input type="hidden" name="cnt" defaultValue={inputForms.length + 1} />
                            <CustomButton
                                className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                                type="submit"
                                name="_action"
                                value="createEmptyInputForm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Add InputForm
                            </CustomButton>
                        </Form>
                        : state === 'searchForm'
                            ? <Form method="post">
                                <input type="hidden" name="cnt" defaultValue={searchForms.length + 1} />
                                <CustomButton
                                    className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                                    type="submit"
                                    name="_action"
                                    value="createEmptySearchForm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    Add SearchForm
                                </CustomButton>
                            </Form>
                            : null}
                <Form method="post">
                    <CustomButton
                        className="bg-blue-500 hover:shadow-blue-100"
                        type="submit"
                        name="_action"
                        value="generateStructDb"
                        disabled={isRestruct}
                        onClick={handleRestruct}
                    >
                        {isRestruct
                            ? <>
                                <Spinner className="w-4 h-4" />
                                Restructuring...
                            </>
                            : <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                                Restruct Database
                            </>}
                    </CustomButton>
                </Form>
            </div>
            <div className="flex flex-row h-full w-full">
                <div className="bg-white p-4 mr-5 w-1/3 border shadow-blue-gray-700 shadow-md overflow-auto">
                    <DbStrucPanel
                        state={state}
                        inputForms={inputForms}
                        searchForms={searchForms}
                        dictionaries={dictionaries}
                        groups={groups}
                        inputFormId={inputForm?.id}
                        searchFormId={searchForm?.id}
                        dictionaryId={dictionary?.id}
                        groupId={group?.id}
                    />
                </div>
                <div className="bg-white w-full border p-4 shadow-blue-gray-700 shadow-md overflow-auto">
                    {state === 'inputForm' && inputForm
                        ? <InputFormForm inputForm={inputForm} groups={groups} />
                        : state === 'searchForm' && searchForm
                            ? <SearchFormForm searchForm={searchForm} inputFields={inputFields} />
                            : state === 'dictionary' && dictionary
                                ? <DictionaryForm dictionary={dictionary} />
                                : state === 'group' && group
                                    ? <GroupForm group={group} dicts={dictionaries} />
                                    : null}
                </div>
            </div>
        </div>
    )
}
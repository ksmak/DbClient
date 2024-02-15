import MaterialTailwind from "@material-tailwind/react"
import { Dictionary, Group, InputForm, SearchForm, InputField } from "@prisma/client"
const { Button } = MaterialTailwind
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant"
import {
    createEmptyDictionary,
    createEmptyGroup,
    createEmptyInputField,
    createEmptyInputForm,
    createEmptySeacrhForm,
    deleteDictionary,
    deleteGroup,
    deleteInputField,
    deleteInputForm,
    deleteSeacrhForm,
    getDictionaries,
    getDictionary,
    getGroup,
    getGroups,
    getInputForm,
    getInputForms,
    getSeacrhForm,
    getSearchForms,
    updateDictionary,
    updateGroup,
    updateInputField,
    updateInputForm,
    updateSeacrhForm
} from "~/api/api"
import Input from "~/ui/elements/input_field"
import DictionaryForm from "~/ui/forms/dictionary"
import GroupForm from "~/ui/forms/group_form"
import InputFormForm from "~/ui/forms/input_form"
import SearchFormForm from "~/ui/forms/search_form"
import DbStrucPanel from "~/ui/panels/db_struct"

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const url = new URL(request.url)
    const state = url.searchParams.get("state")
    const inputFormId = url.searchParams.get("inputFormId")
    const searchFormId = url.searchParams.get("searchFormId")
    const dictionaryId = url.searchParams.get("dictionaryId")
    const groupId = url.searchParams.get("groupId")
    const q = url.searchParams.get("q")
    const inputForms = await getInputForms(q)
    const searchForms = await getSearchForms(q)
    const dictionaries = await getDictionaries(q)
    const groups = await getGroups(Number(inputFormId), q)
    let inputForm, searchForm, dictionary, group
    switch (state) {
        case 'inputForm': {
            invariant(inputFormId, "Missing inputFormId param")
            inputForm = await getInputForm(Number(inputFormId))
            break
        }
        case 'searchForm': {
            invariant(searchFormId, "Missing searchFormId param")
            searchForm = await getSeacrhForm(Number(searchFormId))
            break
        }
        case 'dictionary': {
            invariant(dictionaryId, "Missing dictionaryId param")
            dictionary = await getDictionary(Number(dictionaryId))
            break
        }
        case 'group': {
            invariant(groupId, "Missing groupId param")
            group = await getGroup(Number(groupId))
            break
        }
    }
    return json({
        state,
        dictionary,
        inputForm,
        searchForm,
        group,
        dictionaries,
        inputForms,
        searchForms,
        groups
    })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    if (_action === 'updateInputForm') {
        await updateInputForm(Number(values.id), {
            id: Number(values.id),
            pos: Number(values.pos),
            title: String(values.title),
        } as InputForm)
        return redirect(`/db_struct?state=inputForm&inputFormId=${values.id}`)
    }
    if (_action === 'createEmptyInputForm') {
        const form = await createEmptyInputForm(Number(values.cnt))
        return redirect(`/db_struct?state=inputForm&inputFormId=${form.id}`)
    }
    if (_action === 'deleteInputForm') {
        await deleteInputForm(Number(values.id))
        return redirect(`/db_struct`)
    }
    if (_action === 'updateSearchForm') {
        await updateSeacrhForm(Number(values.id), {
            id: Number(values.id),
            pos: Number(values.pos),
            title: String(values.title),
        } as SearchForm)
        return redirect(`/db_struct?state=searchForm&searchFormId=${values.id}`)
    }
    if (_action === 'createEmptySearchForm') {
        const form = await createEmptySeacrhForm(Number(values.cnt))
        return redirect(`/db_struct?state=searchForm&searchFormId=${form.id}`)
    }
    if (_action === 'deleteSearchForm') {
        await deleteSeacrhForm(Number(values.id))
        return redirect(`/db_struct`)
    }
    if (_action === 'updateDictionary') {
        await updateDictionary(Number(values.id), {
            id: Number(values.id),
            title: String(values.title),
            tableName: String(values.tableName),
        } as Dictionary)
        return redirect(`/db_struct?state=dictionary&dictionaryId=${values.id}`)
    }
    if (_action === 'createEmptyDictionary') {
        const dict = await createEmptyDictionary(Number(values.cnt))
        return redirect(`/db_struct?state=dictionary&dictionaryId=${dict.id}`)
    }
    if (_action === 'deleteDictionary') {
        await deleteDictionary(Number(values.id))
        return redirect(`/db_struct`)
    }
    if (_action === 'createEmptyGroup') {
        const group = await createEmptyGroup(Number(values.inputFormId), Number(values.cnt))
        return redirect(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`)
    }
    if (_action === 'updateGroup') {
        const group = await updateGroup(Number(values.inputFormId), Number(values.id), {
            id: Number(values.id),
            pos: Number(values.pos),
            title: String(values.title),
            tableName: String(values.tableName),
            isMulty: Boolean(values.isMulty),
        } as Group)
        return redirect(`/db_struct?state=group&inputFormId=${group.inputFormId}&groupId=${group.id}`)
    }
    if (_action === 'deleteGroup') {
        await deleteGroup(Number(values.id))
        return redirect('/db_struct')
    }

    if (_action === 'updateInputField') {
        await updateInputField(Number(values.id), {
            id: Number(values.id),
            groupId: Number(values.groupId),
            pos: Number(values.pos),
            title: String(values.title),
            fieldName: String(values.fieldName),
            fieldType: String(values.fieldType)
        } as InputField)
        return redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.id}`)
    }
    if (_action === 'createEmptyInputField') {
        const field = await createEmptyInputField(Number(values.groupId), Number(values.cnt))
        return redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${field.id}`)
    }
    if (_action === 'deleteInputField') {
        await deleteInputField(Number(values.id))
        return redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.id}`)
    }

    return null
}

export default function DbStruct() {
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
    } = useLoaderData<typeof loader>()

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">Db Struct</h1>
            <div
                className="flex items-center gap-3"
            >
                <Form method="post">
                    <input type="hidden" name="cnt" defaultValue={inputForms.length + 1} />
                    <Button
                        className="flex items-center gap-3"
                        color="blue-gray"
                        placeholder=''
                        size="sm"
                        type="submit"
                        name="_action"
                        value="createEmptyInputForm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add InputForm
                    </Button>
                </Form>
                <Form method="post">
                    <input type="hidden" name="cnt" defaultValue={searchForms.length + 1} />
                    <Button
                        className="flex items-center gap-3"
                        color="blue-gray"
                        placeholder=''
                        size="sm"
                        type="submit"
                        name="_action"
                        value="createEmptySearchForm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add SearchForm
                    </Button>
                </Form>
                <Form method="post">
                    <input type="hidden" name="cnt" defaultValue={dictionaries.length + 1} />
                    <Button
                        className="flex items-center gap-3"
                        color="blue-gray"
                        placeholder=''
                        size="sm"
                        type="submit"
                        name="_action"
                        value="createEmptyDictionary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add Dictionary
                    </Button>
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
                            ? <SearchFormForm searchForm={searchForm} />
                            : state === 'dictionary' && dictionary
                                ? <DictionaryForm dictionary={dictionary} />
                                : state === 'group' && group
                                    ? <GroupForm group={group} />
                                    : null}
                </div>
            </div>
        </div>
    )
}
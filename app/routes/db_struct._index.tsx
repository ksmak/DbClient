import MaterialTailwind from "@material-tailwind/react"
import { Dictionary, Group, InputForm, SearchForm, InputField } from "@prisma/client"
const { Button } = MaterialTailwind
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant"
import DictionaryForm from "~/ui/forms/dictionary"
import GroupForm from "~/ui/forms/group_form"
import InputFormForm from "~/ui/forms/input_form"
import SearchFormForm from "~/ui/forms/search_form"
import DbStrucPanel from "~/ui/panels/db_struct"
import api from "~/api"

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
    const q = url.searchParams.get("q")
    const inputForms = await api.db.getInputForms(q)
    const searchForms = await api.db.getSearchForms(q)
    const dictionaries = await api.db.getDictionaries(q)
    const groups = await api.db.getGroups(Number(inputFormId), q)
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
        groups
    })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    if (_action === 'updateInputForm') {
        await api.db.updateInputForm(Number(values.id), {
            id: Number(values.id),
            pos: Number(values.pos),
            title: String(values.title),
        } as InputForm)
        return redirect(`/db_struct?state=inputForm&inputFormId=${values.id}`)
    }
    if (_action === 'createEmptyInputForm') {
        const form = await api.db.createEmptyInputForm(Number(values.cnt))
        return redirect(`/db_struct?state=inputForm&inputFormId=${form.id}`)
    }
    if (_action === 'deleteInputForm') {
        await api.db.deleteInputForm(Number(values.id))
        return redirect(`/db_struct`)
    }
    if (_action === 'updateSearchForm') {
        await api.db.updateSearchForm(Number(values.id), {
            id: Number(values.id),
            pos: Number(values.pos),
            title: String(values.title),
        } as SearchForm)
        return redirect(`/db_struct?state=searchForm&searchFormId=${values.id}`)
    }
    if (_action === 'createEmptySearchForm') {
        const form = await api.db.createEmptySearchForm(Number(values.cnt))
        return redirect(`/db_struct?state=searchForm&searchFormId=${form.id}`)
    }
    if (_action === 'deleteSearchForm') {
        await api.db.deleteSearchForm(Number(values.id))
        return redirect(`/db_struct`)
    }
    if (_action === 'updateDictionary') {
        await api.db.updateDictionary(Number(values.id), {
            id: Number(values.id),
            title: String(values.title),
        })
        return redirect(`/db_struct?state=dictionary&dictionaryId=${values.id}`)
    }
    if (_action === 'createEmptyDictionary') {
        const dict = await api.db.createEmptyDictionary(Number(values.cnt))
        return redirect(`/db_struct?state=dictionary&dictionaryId=${dict.id}`)
    }
    if (_action === 'deleteDictionary') {
        await api.db.deleteDictionary(Number(values.id))
        return redirect(`/db_struct`)
    }
    if (_action === 'createEmptyGroup') {
        const group = await api.db.createEmptyGroup(Number(values.inputFormId), Number(values.cnt))
        return redirect(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`)
    }
    if (_action === 'updateGroup') {
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
    }
    if (_action === 'deleteGroup') {
        await api.db.deleteGroup(Number(values.id))
        return redirect('/db_struct')
    }
    if (_action === 'updateInputField') {
        await api.db.updateInputField(Number(values.id), {
            id: Number(values.id),
            groupId: Number(values.groupId),
            pos: Number(values.pos),
            title: String(values.title),
            len: Number(values.len),
            filedType: 'TEXT',
            isKey: Boolean(values.isKey),
            isVisible: Boolean(values.isVisible),
            isEnable: Boolean(values.isEnable),
            isRequire: Boolean(values.isRequire),
            precision: Number(values.precision),
            isDuplicate: Boolean(values.isDuplicate),
        })
        return redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.groupId}`)
    }
    if (_action === 'createEmptyInputField') {
        await api.db.createEmptyInputField(Number(values.groupId), Number(values.cnt))
        // return redirect(`/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${field.id}`)
    }
    if (_action === 'deleteInputField') {
        await api.db.deleteInputField(Number(values.id))
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
        inputField,
        dictionaries,
        inputForms,
        searchForms,
        groups,
    } = useLoaderData<typeof loader>()

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">Db Struct</h1>
            <div
                className="flex items-center gap-3 h-16"
            >
                {state === 'dictionary'
                    ? <Form method="post">
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
                    : state === 'inputForm'
                        ? <Form method="post">
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
                        : state === 'searchForm'
                            ? <Form method="post">
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
                            : null}
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
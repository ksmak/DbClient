import { Condition, InputForm, SearchForm } from "@prisma/client";
import { Link, Outlet, json, useLoaderData } from "@remix-run/react";
import { Dispatch, SetStateAction, useState } from "react";
import api from "~/api";
import { ICondition } from "~/types/types";

export type ContexType = {
    dictionaries?: any,
    inputForms?: any,
    searchForms?: any,
    docs: { formId?: number, ids?: number[] },
    setDocs: Dispatch<SetStateAction<{ formId?: number, ids?: number[] }>>,
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>,
    conditions: ICondition[],
    setConditions: Dispatch<SetStateAction<ICondition[]>>
}

export async function loader() {
    const dictionaries = await api.db.getDictionaries()
    const inputForms = await api.db.getInputForms()
    const searchForms = await api.db.getSearchForms()
    return json({
        dictionaries,
        inputForms,
        searchForms
    })
}

export default function dashboard() {
    const data = useLoaderData<typeof loader>()
    const [docs, setDocs] = useState<{ formId?: number, ids?: number[] }>({})
    const [current, setCurrent] = useState(0)
    const [conditions, setConditions] = useState<ICondition[]>([])
    const context: ContexType = {
        ...data,
        docs,
        setDocs,
        current,
        setCurrent,
        conditions,
        setConditions
    }

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <h1 className="text-3xl text-amber-700 font-bold">DbClient</h1>
            <ul className="text-blue-500 text-bold">
                <li>
                    Enter Data
                    <ul className="ml-4">
                        {data.inputForms.map((item: InputForm) =>
                            <li key={item.id}><Link to={`/dashboard/enter_data/${item.id}`}>
                                Form: {item.title}
                            </Link></li>)}
                    </ul>
                </li>
                <li>
                    Search Data
                    <ul className="ml-4">
                        {data.searchForms.map((item: SearchForm) =>
                            <li key={item.id}><Link to={`/dashboard/search_data/${item.id}`}>
                                Form: {item.title}
                            </Link></li>)}
                    </ul>
                </li>
                <li>
                    Service
                    <ul className="ml-4">
                        <li><Link to="db_struct">Db Structure</Link></li>
                        <li><Link to="users">Users</Link></li>
                    </ul>
                </li>
                <li>Help</li>
            </ul>
            <Outlet context={context} />
        </div>
    )
}
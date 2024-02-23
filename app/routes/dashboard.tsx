import { InputForm, SearchForm } from "@prisma/client";
import { Link, Outlet, json, useLoaderData, useNavigate } from "@remix-run/react";
import { Dispatch, SetStateAction, useState } from "react";
import api from "~/api";

export type ContexType = {
    dictionaries?: any,
    inputForms?: any,
    searchForms?: any,
    docs: { formId?: number, ids?: number[] },
    setDocs: Dispatch<SetStateAction<{ formId?: number, ids?: number[] }>>,
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
    const [docs, setDocs] = useState<{ formId?: number, ids?: number[] }>({})
    const data = useLoaderData<typeof loader>()
    const context: ContexType = {
        ...data,
        docs,
        setDocs,
    }


    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">

            <h1 className="text-3xl text-amber-700 font-bold">DbClient</h1>
            <p>{docs.ids?.map((id) => (<Link className="text-blue-500 underline hover:cursor-pointer p-1" key={id} to={`/dashboard/enter_data/${docs.formId}?docId=${id}`}>{id}</Link>))}</p>
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
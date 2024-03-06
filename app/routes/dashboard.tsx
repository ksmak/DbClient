import { InputForm, SearchForm } from "@prisma/client";
import { json, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import api from "~/components/api";
import { ContexType, ICondition } from "~/types/types";
import {
    NewspaperIcon,
    UsersIcon,
    CircleStackIcon
} from "@heroicons/react/24/solid";

import { useTranslation } from "react-i18next";
import DashboardView from "~/components/UI/widgets/dashboard/view";

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
    const { t } = useTranslation()
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
    const [openNav, setOpenNav] = useState(false);

    const editDataMenuItems =
        data.inputForms.map((item: InputForm) => {
            return {
                title: item.title,
                link: `/dashboard/enter_data/${item.id}`,
                icon: NewspaperIcon,
            }
        })

    const searchDataMenuItems =
        data.searchForms.map((item: SearchForm) => {
            return {
                title: item.title,
                link: `/dashboard/search_data/${item.id}`,
                icon: NewspaperIcon,
            }
        })

    const serviceMenuItems = [
        {
            title: t('db_structure'),
            link: "db_struct",
            icon: CircleStackIcon
        },
        {
            title: t('users'),
            link: "users",
            icon: UsersIcon
        },
    ]

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <DashboardView
            openNav={openNav}
            setOpenNav={setOpenNav}
            editDataMenuItems={editDataMenuItems}
            searchDataMenuItems={searchDataMenuItems}
            serviceMenuItems={serviceMenuItems}
            context={context}
        />
    )
}
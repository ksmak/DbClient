import { InputField, SearchField } from "@prisma/client"

export interface IDict {
    id: number,
    title: string,
    data_browse: {
        id: number,
        title: string,
    }[],
    data_edit: {
        id: number,
        title: string,
    }[],
}

export interface IField {
    name: string,
    _type: string,
    value: string
}

export interface ITable {
    name: string,
    fields: IField[]
}

export interface IDocument {
    id: number | null,
    tables: ITable[]
}

export interface ICondition {
    log?: string,
    field?: SearchField & { field: InputField },
    oper?: string,
    val1?: string,
    val2?: string,
}
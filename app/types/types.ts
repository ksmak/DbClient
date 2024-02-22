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
    id?: number,
    tables: ITable[]
}
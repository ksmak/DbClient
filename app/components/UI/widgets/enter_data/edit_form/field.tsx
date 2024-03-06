import { InputField } from "@prisma/client"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { IDict } from "~/types/types"
import CustomInput from "~/components/UI/elements/custom_input"
import CustomSelect from "~/components/UI/elements/custom_select"

type FieldProps = {
    state: string | null,
    dictionaries: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
    recordIndex: number,
    fld: InputField
}

export default function Field({ state, dictionaries, doc, setDoc, recordIndex, fld }: FieldProps) {
    const tableName = `tbl_${fld.groupId}`
    const fieldName = `f${fld.id}`
    let val = doc[tableName][recordIndex][fieldName] ? doc[tableName][recordIndex][fieldName] : ''
    const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let d = { ...doc }
        d[tableName][recordIndex][fieldName] = e.target.value
        setDoc(d)
    }
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
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
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
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
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
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
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
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                    size={fld.len ? fld.len : 30}
                    maxLength={fld.len ? fld.len : 30}
                />
            )
        case "DICT":
            const dic = dictionaries.find((item: IDict) => item.id === fld.dicId)
            return (
                <CustomSelect
                    key={fld.id}
                    className={cls}
                    id={fieldName}
                    title={fld.title}
                    name={fieldName}
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                >
                    <option>-</option>
                    {['create', 'edit', 'search', 'find'].includes(String(state))
                        ? dic?.data_edit.map((item: any) => (
                            <option key={item.id} value={item.id}>{item.title}</option>
                        ))
                        : dic?.data_browse.map((item: any) => (
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
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
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
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                    size={fld.len ? fld.len : 30}
                    maxLength={fld.len ? fld.len : 30}
                />
            )
        // case "FILE":
        //     return (
        //         <CustomInput
        //             key={fld.id}
        //             className={cls}
        //             id={fieldName}
        //             title={fld.title}
        //             type="file"
        //             name={fieldName}
        //             defaultValue={defVal}
        //             required={fld.isRequire && state === 'edit'}
        //             disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
        //             size={fld.len ? fld.len : 30}
        //             maxLength={fld.len ? fld.len : 30}
        //         />
        //     )
    }
}
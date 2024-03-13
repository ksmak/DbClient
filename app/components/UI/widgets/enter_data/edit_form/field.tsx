import { InputField } from "@prisma/client"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { IDict } from "~/types/types"
import CustomInput from "~/components/UI/elements/custom_input"
import CustomSelect from "~/components/UI/elements/custom_select"
import { useTranslation } from "react-i18next"

type FieldProps = {
    state: string | null,
    dictionaries: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
    recordIndex: number,
    fld: InputField
}

export default function Field({ state, dictionaries, doc, setDoc, recordIndex, fld }: FieldProps) {
    const { i18n } = useTranslation()
    const tableName = `tbl_${fld.groupId}`
    const fieldName = `f${fld.id}`
    let val = doc[tableName][recordIndex][fieldName] ? doc[tableName][recordIndex][fieldName] : ''
    const cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let d = { ...doc }
        d[tableName][recordIndex][fieldName] = e.target.value
        setDoc(d)
    }
    let fieldTitle: string = fld[`title_${i18n.language}` as keyof typeof fld] as string
    switch (fld.fieldType) {
        case "TEXT":
            return (
                <CustomInput
                    key={fld.id}
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
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
                    title={fieldTitle}
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
                    title={fieldTitle}
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
                    title={fieldTitle}
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
                    title={fieldTitle}
                    name={fieldName}
                    value={val}
                    onChange={handleChange}
                    required={fld.isRequire && state === 'edit'}
                    disabled={!fld.isEnable || !(['create', 'edit', 'search', 'find'].includes(String(state)))}
                >
                    <option>-</option>
                    {['create', 'edit', 'search', 'find'].includes(String(state))
                        ? dic?.data_edit.map((item: any) => (
                            <option key={item.id} value={item.id}>{item[`title_${i18n.language}` as keyof typeof item]}</option>
                        ))
                        : dic?.data_browse.map((item: any) => (
                            <option key={item.id} value={item.id}>{item[`title_${i18n.language}` as keyof typeof item]}</option>
                        ))}
                </CustomSelect>
            )
        case "DATE":
            return (
                <CustomInput
                    key={fld.id}
                    className={cls}
                    id={fieldName}
                    title={fieldTitle}
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
                    title={fieldTitle}
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
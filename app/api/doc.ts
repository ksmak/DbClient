import { PrismaClient } from "@prisma/client/extension"
import { InputField } from "@prisma/client"
import { IDocument, IField, ITable } from "~/types/types"

export default function DocModule(prisma: PrismaClient) {
    return {
        getDic(dicId: number, isEdit: boolean) {
            if (isEdit) {
                return prisma.$queryRawUnsafe(`SELECT * FROM dic_${dicId} WHERE is_enabled = true`)
            }
            return prisma.$queryRawUnsafe(`SELECT * FROM dic_${dicId}`)
        },
        async getDoc(sid: number, inputForm: any) {
            let tables: ITable[] = []
            for (const group of inputForm.groups) {
                let sql = 'SELECT id'
                group.fields.forEach((fld: InputField) => {
                    switch (fld.fieldType) {
                        case "DATE":
                            sql = sql + `, to_char(f${fld.id}, 'DD.MM.YYYY') f${fld.id}`
                            break
                        case "TIME":
                            sql = sql + `, to_char(f${fld.id}, 'HH:MI') f${fld.id}`
                            break
                        default:
                            sql = sql + `, f${fld.id}`
                    }
                })
                sql = sql + ` FROM tbl_${group.id} WHERE sid = ${sid}`
                const data = await prisma.$queryRawUnsafe(`${sql}`)
                let fields: IField[] = []
                group.fields.forEach((fld: InputField) => {
                    fields.push({
                        name: `f${fld.id}`,
                        _type: fld.fieldType,
                        value: data[0][`f${fld.id}`],
                    })
                })
                tables.push({
                    name: `tbl_${group.id}`,
                    fields: fields
                })
            }
            return {
                id: sid,
                tables: tables
            } as IDocument
        },
        async createDoc(userId: number, inputForm: any, values: { [k: string]: FormDataEntryValue }) {
            const seq = await prisma.$queryRaw`SELECT nextval('doc_id_seq')`
            const sid = Number(seq[0].nextval)
            let tr = []
            tr.push(
                prisma.doc.create({
                    data: {
                        id: sid,
                        isActive: true,
                        dateStart: null,
                        dateEnd: null,
                        createdAt: null,
                        updatedAt: null,
                        createdUserId: userId,
                        updatedUserId: null,
                    }
                })
            )
            for (const group of inputForm.groups) {
                const tbl = `tbl_${group.id}`
                let flds = "sid"
                let vals = `${sid}`
                group.fields.forEach((fld: InputField) => {
                    flds = flds + `, f${fld.id}`
                    const fieldVal: string = String(values[`f${fld.id}`])
                    switch (fld.fieldType) {
                        case "TEXT":
                        case "CYRILLIC":
                        case "DATE":
                        case "TIME":
                        case "FILE":
                            vals = vals + `, ${['', '-'].includes(fieldVal) ? 'null' : `'${fieldVal}'`}`
                            break
                        default:
                            vals = vals + `, ${['', '-'].includes(fieldVal) ? 'null' : fieldVal}`
                            break
                    }
                })
                tr.push(prisma.$executeRawUnsafe(`INSERT INTO ${tbl}(${flds}) VALUES(${vals})`))
            }
            return prisma.$transaction(tr)
        },
        updateDoc(userId: number, inputForm: any, values: { [k: string]: FormDataEntryValue }) {
            const sid = Number(values.id)
            let tr = []
            tr.push(
                prisma.doc.update({
                    where: {
                        id: sid
                    },
                    data: {
                        isActive: Boolean(values.isActive),
                        dateStart: undefined,
                        dateEnd: undefined,
                        createdAt: undefined,
                        updatedAt: undefined,
                        createdUserId: undefined,
                        updatedUserId: userId,
                    }
                })
            )
            for (const group of inputForm.groups) {
                const tbl = `tbl_${group.id}`
                let flds = `sid='${sid}'`
                group.fields.forEach((fld: InputField) => {
                    const fieldName = `f${fld.id}`
                    const fieldVal: string = String(values[`f${fld.id}`])
                    switch (fld.fieldType) {
                        case "TEXT":
                        case "CYRILLIC":
                        case "DATE":
                        case "TIME":
                        case "FILE":
                            flds = flds + `, ${['', '-'].includes(fieldVal) ? `${fieldName} = null` : `${fieldName} = '${fieldVal}'`}`
                            break
                        default:
                            flds = flds + `, ${['', '-'].includes(fieldVal) ? `${fieldName} = null` : `${fieldName} = ${fieldVal}`}`
                    }
                })
                tr.push(prisma.$executeRawUnsafe(`UPDATE ${tbl} SET ${flds} WHERE sid = ${sid}`))
            }
            return prisma.$transaction(tr)
        },
        findDoc(inputForm: any, values: { [k: string]: FormDataEntryValue }) {
            let sf = ''
            let select = 'SELECT distinct doc.id'
            let from = ' FROM "Doc" doc'
            let where = ' WHERE doc."isActive" is true'
            let tbls: string[] = []
            for (const group of inputForm.groups) {
                const tbl = `tbl_${group.id}`
                group.fields.forEach((fld: InputField) => {
                    const fieldName = `f${fld.id}`
                    const fieldVal = String(values[fieldName])
                    if (!['', '-'].includes(fieldVal)) {
                        if (!tbls.includes(tbl)) {
                            tbls.push(tbl)
                            where = where + ` AND doc.id = ${tbl}.sid`
                            from = from + `, ${tbl}`
                        }
                        switch (fld.fieldType) {
                            case "TEXT":
                            case "CYRILLIC":
                            case "DATE":
                            case "TIME":
                            case "FILE":
                                where = where + ` AND ${fieldName} = '${fieldVal}'`
                                break
                            default:
                                where = where + ` AND ${fieldName} = ${fieldVal}`
                                break
                        }
                    }
                })
            }
            sf = select + from + where
            return prisma.$queryRawUnsafe(`${sf}`)
        },
    }
}
import { PrismaClient } from "@prisma/client/extension";
import { Doc } from "@prisma/client"
import { IField } from "~/types/types";

export default function FormsModule(prisma: PrismaClient) {
    return {
        getDic(dicId: number, isEdit: boolean) {
            if (isEdit) {
                return prisma.$queryRawUnsafe(`SELECT * FROM dic_${dicId} WHERE is_enabled = true`)
            }
            return prisma.$queryRawUnsafe(`SELECT * FROM dic_${dicId}`)
        },
        createDoc(doc: Doc) {
            return prisma.doc.create({
                data: {
                    ...doc,
                    id: undefined
                }
            })
        },
        insertTable(sid: number, table: string, fields: IField[]) {
            let flds = "sid"
            fields.map(fld => flds = flds + `, ${fld.name}`)
            let vals = `${sid}`
            fields.map(fld => {
                switch (fld._type) {
                    case "TEXT":
                    case "CYRILLIC":
                    case "DATE":
                    case "TIME":
                    case "FILE":
                        vals = vals + `, ${fld.value === '' ? 'null' : `'${fld.value}'`}`
                        break
                    default:
                        vals = vals + `, ${['', '-'].includes(fld.value) ? 'null' : fld.value}`
                        break
                }
            })
            return prisma.$executeRawUnsafe(`INSERT INTO ${table}(${flds}) VALUES(${vals})`)
        },
        updateTable(id: string, table: string, fields: IField[]) {
            let flds = `sid='${id}'`
            fields.map(fld => flds = flds + `, ${fld.name}='${fld.value}'`)
            return prisma.$executeRawUnsafe(`UPDATE ${table} SET ${flds} WHERE id=${id}`)
        }
    }
}
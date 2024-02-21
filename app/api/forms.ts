import { PrismaClient } from "@prisma/client/extension";

export default function FormsModule(prisma: PrismaClient) {
    return {
        getDic(dicId: number, isEdit: boolean) {
            if (isEdit) {
                return prisma.$queryRawUnsafe(`SELECT * FROM dic_${dicId} WHERE is_enabled = true`)
            }
            return prisma.$queryRawUnsafe(`SELECT * FROM dic_${dicId}`)
        }
    }
}
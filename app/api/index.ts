import prisma from "./instance"
import UsersModule from "./users"
import DbModule from "./db"
import FormsModule from "./forms"
import DocModule from "./doc"

export default {
    users: UsersModule(prisma),
    db: DbModule(prisma),
    forms: FormsModule(prisma),
    doc: DocModule(prisma),
}
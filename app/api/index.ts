import prisma from "./instance"
import UsersModule from "./users"
import DbModule from "./db"

export default {
    users: UsersModule(prisma),
    db: DbModule(prisma),
}
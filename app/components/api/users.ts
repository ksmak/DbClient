import { User } from "@prisma/client"
import { PrismaClient } from "@prisma/client/extension"
import bcrypt from 'bcryptjs'

export default function UsersModule(prisma: PrismaClient) {
    return {
        getDepartments() {
            return prisma.department.findMany()
        },
        getRoles() {
            return prisma.role.findMany()
        },
        getUsers(q: string | null = null) {
            if (!q) {
                return prisma.user.findMany({
                    include: {
                        roles: true
                    },
                    orderBy: {
                        login: 'asc',
                    }
                })
            } else {
                return prisma.user.findMany({
                    include: {
                        roles: true
                    },
                    where: {
                        login: {
                            startsWith: q
                        }
                    },
                    orderBy: {
                        login: 'asc',
                    }
                })
            }
        },
        createUser(user: User) {
            return prisma.user.create({
                data: {
                    ...user,
                    id: undefined,
                    password: bcrypt.hashSync(user.password),
                    createdAt: undefined,
                    updatedAt: undefined
                }
            })
        },
        updateUser(userId: number, user: User) {
            if (!user.password) {
                return prisma.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        ...user,
                        id: undefined,
                        password: bcrypt.hashSync(user.password),
                        createdAt: undefined,
                        updatedAt: undefined
                    }
                })
            } else {
                return prisma.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        ...user,
                        id: undefined,
                        password: undefined,
                        createdAt: undefined,
                        updatedAt: undefined
                    }
                })
            }
        },
        getUser(userId: number) {
            return prisma.user.findFirst({
                where: {
                    id: userId
                }
            })
        },
        deleteUser(userId: number) {
            return prisma.user.delete({
                where: {
                    id: userId
                }
            })
        }
    }
}
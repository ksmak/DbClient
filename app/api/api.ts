import bcrypt from 'bcryptjs'
import { Department, Dictionary, Group, InputForm, PrismaClient, SearchForm, User } from '@prisma/client'

const prisma = new PrismaClient()

export async function getDepartments(): Promise<Department[]> {
    return prisma.department.findMany()
}

export async function getUsers(q: string | null = null): Promise<User[]> {
    if (!q) {
        return prisma.user.findMany({
            orderBy: {
                login: 'asc',
            }
        })
    } else {
        return prisma.user.findMany({
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
}

export async function createEmptyUser(cnt: number): Promise<User> {
    const now = new Date();
    const expiredDate = new Date(now.setDate(now.getDate() + 30))
    const hash = await bcrypt.hash('12345', 10)

    let count = cnt
    let obj, unique_name
    do {
        unique_name = `User ${count}`
        obj = await prisma.user.findFirst({
            where: {
                login: unique_name
            }
        })
        count++
    } while (obj)

    return prisma.user.create({
        data: {
            login: unique_name,
            password: hash,
            role: 'READER',
            expiredPwd: expiredDate
        }
    })
}

export async function updateUser(user: User): Promise<User> {
    if (!user.password) {
        return prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                login: user.login,
                firstName: user.firstName,
                lastName: user.lastName,
                middleName: user.middleName,
                role: user.role,
                departmentId: user.departmentId,
                expiredPwd: user.expiredPwd,
            }
        })
    } else {
        const hash = await bcrypt.hash(user.password, 10)
        return prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                login: user.login,
                password: hash,
                firstName: user.firstName,
                lastName: user.lastName,
                middleName: user.middleName,
                role: user.role,
                departmentId: user.departmentId,
                expiredPwd: user.expiredPwd,
            }
        })
    }
}

export async function getUser(userId: number): Promise<User | null> {
    return prisma.user.findFirst({
        where: {
            id: userId
        }
    })
}

export async function deleteUser(userId: number): Promise<User> {
    return prisma.user.delete({
        where: {
            id: userId
        }
    })
}

export async function getInputForms(q: string | null = null): Promise<InputForm[]> {
    if (!q) {
        return prisma.inputForm.findMany({
            include: {
                groups: {
                    select: {
                        id: true,
                        pos: true,
                        title: true,
                        tableName: true,
                        isMulty: true
                    }
                }
            },
            orderBy: {
                pos: 'asc'
            }
        })
    } else {
        return prisma.inputForm.findMany({
            where: {
                title: {
                    startsWith: q
                }
            },
            include: {
                groups: {
                    select: {
                        id: true,
                        pos: true,
                        title: true,
                        tableName: true,
                        isMulty: true
                    }
                }
            },
            orderBy: {
                pos: 'asc'
            }
        })
    }
}

export async function createEmptyInputForm(cnt: number): Promise<InputForm> {
    return prisma.inputForm.create({
        data: {
            pos: cnt,
            title: `Input Form ${cnt}`,
        }
    })
}

export async function updateInputForm(form: InputForm): Promise<InputForm> {
    return prisma.inputForm.update({
        where: {
            id: form.id
        },
        data: {
            ...form
        }
    })
}

export async function getInputForm(formId: number): Promise<InputForm | null> {
    return prisma.inputForm.findFirst({
        where: {
            id: formId
        }
    })
}

export async function deleteInputForm(formId: number): Promise<InputForm> {
    return prisma.inputForm.delete({
        where: {
            id: formId
        }
    })
}

export async function getGroups(formId: number, q: string | null = null): Promise<Group[]> {
    if (!q) {
        return prisma.group.findMany({
            where: {
                inputFormId: formId
            },
            include: {
                fields: true
            },
            orderBy: {
                pos: 'asc'
            }
        })
    } else {
        return prisma.group.findMany({
            where: {
                inputFormId: formId,
                title: {
                    startsWith: q
                },
            },
            include: {
                fields: true
            },
            orderBy: {
                pos: 'asc'
            }
        })
    }
}

export async function createEmptyGroup(formId: number, cnt: number): Promise<Group> {
    return prisma.group.create({
        data: {
            pos: cnt,
            inputFormId: formId,
            title: `Group ${cnt}`,
            tableName: `GROUP_${cnt}`
        }
    })
}

export async function getGroup(groupId: number): Promise<Group | null> {
    return prisma.group.findFirst({
        where: {
            id: groupId
        }
    })
}

export async function updateGroup(group: Group): Promise<Group> {
    return prisma.group.update({
        where: {
            id: group.id
        },
        data: {
            inputFormId: group.inputFormId,
            pos: group.pos,
            title: group.title,
            tableName: group.tableName,
            isMulty: group.isMulty
        }
    })
}

export async function deleteGroup(groupId: number): Promise<Group> {
    return prisma.group.delete({
        where: {
            id: groupId
        }
    })
}

export async function getSearchForms(q: string | null = null): Promise<SearchForm[]> {
    if (!q) {
        return prisma.searchForm.findMany({
            orderBy: {
                pos: 'asc'
            }
        })
    } else {
        return prisma.searchForm.findMany({
            where: {
                title: {
                    startsWith: q
                }
            },
            orderBy: {
                pos: 'asc'
            }
        })
    }
}

export async function createEmptySeacrhForm(cnt: number): Promise<SearchForm> {
    return prisma.searchForm.create({
        data: {
            pos: cnt,
            title: `Search form ${cnt}`,
        }
    })
}

export async function updateSeacrhForm(form: SearchForm): Promise<SearchForm> {
    return prisma.searchForm.update({
        where: {
            id: form.id
        },
        data: {
            ...form
        }
    })
}

export async function getSeacrhForm(formId: number): Promise<SearchForm | null> {
    return prisma.searchForm.findFirst({
        where: {
            id: formId
        }
    })
}

export async function deleteSeacrhForm(formId: number): Promise<SearchForm> {
    return prisma.searchForm.delete({
        where: {
            id: formId
        }
    })
}

export async function getDictionaries(q: string | null = null): Promise<Dictionary[]> {
    if (!q) {
        return prisma.dictionary.findMany()
    } else {
        return prisma.dictionary.findMany({
            where: {
                title: {
                    startsWith: q
                }
            }
        })
    }
}

export async function createEmptyDictionary(cnt: number): Promise<Dictionary> {
    let count = cnt
    let obj, unique_name
    do {
        unique_name = `D_DICT_${count}`
        obj = await prisma.dictionary.findFirst({
            where: {
                tableName: unique_name
            }
        })
        count++
    } while (obj)

    return prisma.dictionary.create({
        data: {
            title: `Dictionary ${count - 1}`,
            tableName: unique_name
        }
    })
}

export async function updateDictionary(dict: Dictionary): Promise<Dictionary> {
    return prisma.dictionary.update({
        where: {
            id: dict.id
        },
        data: {
            ...dict
        }
    })
}

export async function getDictionary(dictId: number): Promise<Dictionary | null> {
    return prisma.dictionary.findFirst({
        where: {
            id: dictId
        }
    })
}

export async function deleteDictionary(dictId: number): Promise<Dictionary> {
    return prisma.dictionary.delete({
        where: {
            id: dictId
        }
    })
}
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import { IDictionary, IGroup, IInputField, IInputForm, ISearchField, ISearchForm, IUser } from '~/types/types'

const prisma = new PrismaClient()

export async function getDepartments() {
    return await prisma.department.findMany()
}

export async function getUsers(q: string | null = null) {
    if (!q) {
        return await prisma.user.findMany({
            orderBy: {
                login: 'asc',
            }
        })
    } else {
        return await prisma.user.findMany({
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

export async function createEmptyUser(cnt: number) {
    const now = new Date()
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

    return await prisma.user.create({
        data: {
            login: unique_name,
            password: hash,
            expiredPwd: expiredDate
        }
    })
}

export async function updateUser(userId: number, user: IUser) {
    if (!user.password) {
        return await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                login: user.login,
                firstName: user.firstName,
                lastName: user.lastName,
                middleName: user.middleName,
                departmentId: user.department.id,
                expiredPwd: user.expiredPwd,
            }
        })
    } else {
        const hash = await bcrypt.hash(user.password, 10)
        return await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                login: user.login,
                password: hash,
                firstName: user.firstName,
                lastName: user.lastName,
                middleName: user.middleName,
                departmentId: user.department.id,
                expiredPwd: user.expiredPwd,
            }
        })
    }
}

export async function getUser(userId: number) {
    return await prisma.user.findFirst({
        where: {
            id: userId
        }
    })
}

export async function deleteUser(userId: number) {
    return await prisma.user.delete({
        where: {
            id: userId
        }
    })
}

export async function getInputForms(q: string | null = null) {
    if (!q) {
        return await prisma.inputForm.findMany({
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
        return await prisma.inputForm.findMany({
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

export async function createEmptyInputForm(cnt: number) {
    return await prisma.inputForm.create({
        data: {
            pos: cnt,
            title: `Input Form ${cnt}`,
        }
    })
}

export async function updateInputForm(formId: number, form: IInputForm) {
    return await prisma.inputForm.update({
        where: {
            id: formId
        },
        data: {
            pos: form.pos,
            title: form.title,
        }
    })
}

export async function getInputForm(formId: number) {
    return await prisma.inputForm.findFirst({
        where: {
            id: formId
        }
    })
}

export async function deleteInputForm(formId: number) {
    return await prisma.inputForm.delete({
        where: {
            id: formId
        }
    })
}

export async function getGroups(formId: number, q: string | null = null) {
    if (!q) {
        return await prisma.group.findMany({
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
        return await prisma.group.findMany({
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

export async function createEmptyGroup(formId: number, cnt: number) {
    return await prisma.group.create({
        data: {
            pos: cnt,
            inputFormId: formId,
            title: `Group ${cnt}`,
            tableName: `GROUP_${cnt}`
        }
    })
}

export async function getGroup(groupId: number) {
    return await prisma.group.findFirst({
        where: {
            id: groupId
        }
    })
}

export async function updateGroup(inputFormId: number, groupId: number, group: IGroup) {
    return await prisma.group.update({
        where: {
            id: groupId
        },
        data: {
            inputFormId: inputFormId,
            pos: group.pos,
            title: group.title,
            tableName: group.tableName,
            isMulty: group.isMulty
        }
    })
}

export async function deleteGroup(groupId: number) {
    return await prisma.group.delete({
        where: {
            id: groupId
        }
    })
}

export async function getSearchFields(searchFormId: number, q: string | null = null) {
    if (!q) {
        return await prisma.searchField.findMany({
            where: {
                searchFormId: searchFormId,
            },
            orderBy: {
                pos: 'asc'
            }
        })
    } else {
        return await prisma.searchField.findMany({
            where: {
                searchFormId: searchFormId,
                title: {
                    startsWith: q
                },
            },
            orderBy: {
                pos: 'asc'
            }
        })
    }
}

export async function createEmptySearchField(searchFormId: number, fieldId: number, cnt: number) {
    return await prisma.searchField.create({
        data: {
            pos: cnt,
            searchFormId: searchFormId,
            title: `Search Field ${cnt}`,
            fieldId: fieldId,
        }
    })
}

export async function getSearchField(searchFieldId: number) {
    return await prisma.searchField.findFirst({
        where: {
            id: searchFieldId
        }
    })
}

export async function updateSearchField(searchFieldId: number, searchField: ISearchField) {
    return await prisma.searchField.update({
        where: {
            id: searchFieldId
        },
        data: {
            pos: searchField.pos,
            title: searchField.title,
        }
    })
}

export async function deleteSearchField(searchFieldId: number) {
    return await prisma.searchField.delete({
        where: {
            id: searchFieldId
        }
    })
}

export async function getInputFields(groupId: number, q: string | null = null) {
    if (!q) {
        return await prisma.inputField.findMany({
            where: {
                groupId: groupId,
            },
            orderBy: {
                pos: 'asc'
            }
        })
    } else {
        return await prisma.inputField.findMany({
            where: {
                groupId: groupId,
                title: {
                    startsWith: q
                },
            },
            orderBy: {
                pos: 'asc'
            }
        })
    }
}

export async function createEmptyInputField(groupId: number, cnt: number) {
    return await prisma.inputField.create({
        data: {
            pos: cnt,
            groupId: groupId,
            title: `Input Field ${cnt}`,
            fieldName: `FIELD_${cnt}`,
            fieldType: 'text'
        }
    })
}

export async function getInputField(inputFieldId: number) {
    return await prisma.inputField.findFirst({
        where: {
            id: inputFieldId
        }
    })
}

export async function updateInputField(inputFieldId: number, inputField: IInputField) {
    return await prisma.inputField.update({
        where: {
            id: inputFieldId
        },
        data: {
            pos: inputField.pos,
            title: inputField.title,
            fieldName: inputField.fieldName,
            fieldType: inputField.fieldType,
            len: inputField.len,
            isKey: inputField.isKey,
            isVisible: inputField.isVisible,
            isEnable: inputField.isEnable,
            isRequire: inputField.isRequire,
            precision: inputField.precision,
            isDuplicate: inputField.isDuplicate,
        }
    })
}

export async function deleteInputField(inputFieldId: number) {
    return await prisma.inputField.delete({
        where: {
            id: inputFieldId
        }
    })
}

export async function getSearchForms(q: string | null = null) {
    if (!q) {
        return await prisma.searchForm.findMany({
            orderBy: {
                pos: 'asc'
            }
        })
    } else {
        return await prisma.searchForm.findMany({
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

export async function createEmptySeacrhForm(cnt: number) {
    return await prisma.searchForm.create({
        data: {
            pos: cnt,
            title: `Search form ${cnt}`,
        }
    })
}

export async function updateSeacrhForm(formId: number, form: ISearchForm) {
    return await prisma.searchForm.update({
        where: {
            id: formId
        },
        data: {
            pos: form.pos,
            title: form.title,
        }
    })
}

export async function getSeacrhForm(formId: number) {
    return prisma.searchForm.findFirst({
        where: {
            id: formId
        }
    })
}

export async function deleteSeacrhForm(formId: number) {
    return prisma.searchForm.delete({
        where: {
            id: formId
        }
    })
}

export async function getDictionaries(q: string | null = null) {
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

export async function createEmptyDictionary(cnt: number) {
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

    return await prisma.dictionary.create({
        data: {
            title: `Dictionary ${count - 1}`,
            tableName: unique_name
        }
    })
}

export async function updateDictionary(dictId: number, dict: IDictionary) {
    return prisma.dictionary.update({
        where: {
            id: dictId
        },
        data: {
            title: dict.title,
            tableName: dict.tableName,
        }
    })
}

export async function getDictionary(dictId: number) {
    return await prisma.dictionary.findFirst({
        where: {
            id: dictId
        }
    })
}

export async function deleteDictionary(dictId: number) {
    return await prisma.dictionary.delete({
        where: {
            id: dictId
        }
    })
}
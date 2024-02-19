import { Dictionary, InputForm, SearchForm, Group, InputField, SearchField } from "@prisma/client"
import { PrismaClient } from "@prisma/client/extension";

export default function DbModule(prisma: PrismaClient) {
    return {
        getDictionaries(q: string | null = null) {
            if (!q) {
                return prisma.dictionary.findMany()
            } else {
                return prisma.dictionary.findMany({
                    where: {
                        title: {
                            startsWith: q
                        }
                    },
                })
            }
        },
        createEmptyDictionary(cnt: number) {
            return prisma.dictionary.create({
                data: {
                    title: `Dictionary ${cnt}`,
                }
            })
        },
        updateDictionary(formId: number, form: Dictionary) {
            return prisma.dictionary.update({
                where: {
                    id: formId
                },
                data: {
                    ...form,
                    id: undefined
                }
            })
        },
        getDictionary(formId: number) {
            return prisma.dictionary.findFirst({
                where: {
                    id: formId
                }
            })
        },
        deleteDictionary(formId: number) {
            return prisma.dictionary.delete({
                where: {
                    id: formId
                }
            })
        },
        getInputForms(q: string | null = null) {
            if (!q) {
                return prisma.inputForm.findMany({
                    include: {
                        groups: true,
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
                        groups: true
                    },
                    orderBy: {
                        pos: 'asc'
                    }
                })
            }
        },
        createEmptyInputForm(cnt: number) {
            return prisma.inputForm.create({
                data: {
                    pos: cnt,
                    title: `Input Form ${cnt}`,
                }
            })
        },
        updateInputForm(formId: number, form: InputForm) {
            return prisma.inputForm.update({
                where: {
                    id: formId
                },
                data: {
                    ...form,
                    id: undefined
                }
            })
        },
        getInputForm(formId: number) {
            return prisma.inputForm.findFirst({
                where: {
                    id: formId
                }
            })
        },
        deleteInputForm(formId: number) {
            return prisma.inputForm.delete({
                where: {
                    id: formId
                }
            })
        },
        getSearchForms(q: string | null = null) {
            if (!q) {
                return prisma.searchForm.findMany({
                    include: {
                        fields: true,
                    },
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
                    include: {
                        fields: true
                    },
                    orderBy: {
                        pos: 'asc'
                    }
                })
            }
        },
        createEmptySearchForm(cnt: number) {
            return prisma.searchForm.create({
                data: {
                    pos: cnt,
                    title: `Search Form ${cnt}`,
                }
            })
        },
        updateSearchForm(formId: number, form: SearchForm) {
            return prisma.searchForm.update({
                where: {
                    id: formId
                },
                data: {
                    ...form,
                    id: undefined
                }
            })
        },
        getSearchForm(formId: number) {
            return prisma.searchForm.findFirst({
                where: {
                    id: formId
                }
            })
        },
        deleteSearchForm(formId: number) {
            return prisma.searchForm.delete({
                where: {
                    id: formId
                }
            })
        },
        getGroups(formId: number | null, q: string | null = null) {
            if (!formId) return []
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
        },
        createEmptyGroup(formId: number, cnt: number) {
            return prisma.group.create({
                data: {
                    pos: cnt,
                    inputFormId: formId,
                    title: `Group ${cnt}`,
                }
            })
        },
        getGroup(groupId: number) {
            return prisma.group.findFirst({
                include: {
                    fields: {
                        orderBy: {
                            pos: 'asc'
                        }
                    }
                },
                where: {
                    id: groupId
                },
                orderBy: {
                    pos: 'asc',
                }
            })
        },
        updateGroup(groupId: number, group: Group) {
            return prisma.group.update({
                where: {
                    id: groupId
                },
                data: {
                    ...group,
                    id: undefined,
                    // fields: {
                    //     deleteMany: { id: { in: fields.map(({ id }) => id) } },
                    //     createMany: { data: fields },
                    // }
                }
            })
        },
        deleteGroup(groupId: number) {
            return prisma.group.delete({
                where: {
                    id: groupId
                }
            })
        },
        getSearchFields(formId: number, q: string | null = null) {
            if (!formId) return []
            if (!q) {
                return prisma.searchField.findMany({
                    where: {
                        searchFormId: formId,
                    },
                    orderBy: {
                        pos: 'asc'
                    }
                })
            } else {
                return prisma.searchField.findMany({
                    where: {
                        searchFormId: formId,
                        title: {
                            startsWith: q
                        },
                    },
                    orderBy: {
                        pos: 'asc'
                    }
                })
            }
        },
        createEmptySearchField(formId: number, fieldId: number, cnt: number) {
            return prisma.searchField.create({
                data: {
                    pos: cnt,
                    searchFormId: formId,
                    title: `Search Field ${cnt}`,
                    fieldId: fieldId,
                }
            })
        },
        getSearchField(fieldId: number) {
            return prisma.searchField.findFirst({
                where: {
                    id: fieldId
                }
            })
        },
        updateSearchField(fieldId: number, searchField: SearchField) {
            return prisma.searchField.update({
                where: {
                    id: fieldId
                },
                data: {
                    ...searchField,
                    id: undefined
                }
            })
        },
        deleteSearchField(fieldId: number) {
            return prisma.searchField.delete({
                where: {
                    id: fieldId
                }
            })
        },
        getInputFields(groupId: number, q: string | null = null) {
            if (!groupId) return []
            if (!q) {
                return prisma.inputField.findMany({
                    where: {
                        groupId: groupId,
                    },
                    orderBy: {
                        pos: 'asc'
                    }
                })
            } else {
                return prisma.inputField.findMany({
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
        },
        createEmptyInputField(groupId: number, cnt: number) {
            return prisma.inputField.create({
                data: {
                    pos: cnt,
                    groupId: groupId,
                    title: `Input Field ${cnt}`,
                }
            })
        },
        getInputField(fieldId: number) {
            return prisma.inputField.findFirst({
                where: {
                    id: fieldId
                }
            })
        },
        updateInputField(fieldId: number, field: InputField) {
            return prisma.inputField.update({
                where: {
                    id: fieldId
                },
                data: {
                    ...field,
                    id: undefined
                }
            })
        },
        deleteInputField(fieldId: number) {
            return prisma.inputField.delete({
                where: {
                    id: fieldId
                }
            })
        },
    }
}
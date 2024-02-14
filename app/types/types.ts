export interface IDepartment {
    id: number | null,
    title: string,
}

export interface IRole {
    id: number | null,
    title: string,
}

enum AccessType {
    READ = 'read',
    WRITE = 'write',
    DELETE = 'delete'
}

export interface IAccess {
    id: number | null,
    role: IRole,
    obj: IInputForm | ISearchForm
    accessType: AccessType,
}

export interface IUserRole {
    id: number | null,
    user: IUser,
    role: IRole,
}

export interface IUser {
    id: number | null,
    login: string,
    password: string,
    firstName: string | null,
    lastName: string | null,
    middleName: string | null,
    department: IDepartment,
    expiredPwd: Date | null,
    createAt: Date | null,
    updateAt: Date | null,
}

export interface IBase {
    id: number | null,
    pos: number,
    title: string,
    createAt: Date | null,
    updateAt: Date | null,
}

export interface IDictionary extends IBase {
    tableName: string
}

export interface IInputForm extends IBase { }

export interface ISearchForm extends IBase { }

export interface IGroup extends IBase {
    inputForm: IInputForm,
    tableName: string,
    isMulty: boolean,
}

enum FieldType {
    TEXT = 'text',
    CYRILLIC = 'cyrillic',
    INT = 'int',
    FLOAT = 'float',
    DICT = 'dict',
    IMAGE = 'image',
    VIDEO = 'video'
}

export interface IInputField extends IBase {
    inputForm: IInputForm,
    group: IGroup,
    fieldName: string,
    fieldType: FieldType,
    len: number,
    isKey: boolean,
    isVisible: boolean,
    isEnable: boolean,
    isRequire: boolean,
    precision: number,
    isDuplicate: boolean,
}

export interface ISearchField extends IBase {
    searchForm: ISearchForm,
    field: IInputField,
}
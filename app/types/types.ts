export enum FormType {
    EditForm = 'edit_form',
    SearchForm = 'search_form'
}

export interface IForm {
    id: number | null,
    title: string,
    form_type: FormType
}
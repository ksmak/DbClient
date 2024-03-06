import { Form } from "@remix-run/react";
import { Group, InputField, SearchField } from "@prisma/client";
import CustomButton from "~/components/UI/elements/custom_button";
import CustomInput from "~/components/UI/elements/custom_input";
import { useTranslation } from "react-i18next";

type SearchFormProps = {
    searchForm: any,
    inputFields: any,
}
export default function SearchFormForm({ searchForm, inputFields }: SearchFormProps) {
    const { t } = useTranslation()

    const handleDelete = async (event: any) => {
        const response = confirm(
            t('confirm_delete')
        )
        if (!response) {
            event.preventDefault()
        }
    }

    return (
        <>
            <div className="flex flex-row gap-3 justify-end">
                <CustomButton
                    className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                    form="addSearchFieldForm"
                    type="submit"
                    name="_action"
                    value="createEmptySearchField"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {t('add_field')}
                </CustomButton>
                <CustomButton
                    className="hidden"
                    id="updateSearchFormButton"
                    form="updateSearchForm"
                    type="submit"
                    name="_action"
                    value="updateSearchForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t('save')}
                </CustomButton>
                <CustomButton
                    className="bg-red-500 hover:shadow-red-100"
                    form="deleteSearchForm"
                    type="submit"
                    name="_action"
                    value="deleteSearchForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {t('delete')}
                </CustomButton>
            </div>
            <Form
                id="addSearchFieldForm"
                method="post"
            >
                <input type="hidden" name="searchFormId" defaultValue={searchForm.id} />
                <input type="hidden" name="cnt" defaultValue={searchForm.fields?.length + 1} />
            </Form>
            <Form
                id="updateSearchForm"
                key={searchForm?.id}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={searchForm.id} />
                <CustomInput
                    id="searchForm_pos"
                    title={t('pos')}
                    type="number"
                    value={searchForm?.pos}
                    name="pos"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateSearchFormButton") as HTMLButtonElement
                        button.click()
                    }}
                    subClass="w-16"
                />
                <CustomInput
                    id="searchForm_title"
                    title={t('title')}
                    type="text"
                    value={searchForm?.title}
                    name="title"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateSearchFormButton") as HTMLButtonElement
                        button.click()
                    }}
                    size={100}
                />
            </Form>
            <Form
                id="deleteSearchForm"
                method="post"
                onSubmit={(event) => {
                    const response = confirm(
                        t('confirm_delete')
                    );
                    if (!response) {
                        event.preventDefault();
                    }
                }}
            >
                <input type="hidden" name="id" defaultValue={searchForm.id ? searchForm.id : ''} />
            </Form>
            {searchForm?.fields && searchForm.fields.map((field: SearchField) => (
                <Form
                    className="hidden"
                    id={`updateSearchFieldForm_${field.id}`}
                    key={`updateSearchFieldForm_${field.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={field.id} />
                    <input type="hidden" name="searchFormId" defaultValue={field.searchFormId} />
                    <CustomButton
                        className="bg-green-500 hover:shadow-green-100"
                        id={`updateSearchFieldButton_${field.id}`}
                        form={`updateSearchFieldForm_${field.id}`}
                        type="submit"
                        name="_action"
                        value="updateSearchField"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {t('save')}
                    </CustomButton>
                </Form>
            ))}
            <div className="overflow-x-auto mt-4">
                <table className="w-full">
                    <thead
                        className="bg-blue-gray-400 text-white text-center"
                    >
                        <tr>
                            <th className="p-1 text-sm border border-blue-gray-700">#</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('pos')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('title')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('field')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchForm?.fields && searchForm.fields.map((field: SearchField, index: number) => (
                            <tr key={field.id} >
                                <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        type="number"
                                        name="pos"
                                        defaultValue={field.pos}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td
                                    className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40"
                                >
                                    <input
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        type="text"
                                        name="title"
                                        defaultValue={field.title}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <select
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        name="fieldId"
                                        defaultValue={String(field.fieldId)}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    >
                                        <option value="">-</option>
                                        {inputFields && inputFields.map(
                                            (fld: InputField & { group: Group }) =>
                                                <option key={fld.id} value={fld.id}>
                                                    {`${fld.group.pos}. ${fld.group.title} -> ${fld.title}`}
                                                </option>)}
                                    </select>
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer">
                                    <Form method="post">
                                        <input type="hidden" name="id" defaultValue={field.id} />
                                        <CustomButton
                                            className="bg-red-500 hover:shadow-red-100"
                                            onClick={handleDelete}
                                            type="submit"
                                            name="_action"
                                            value="deleteSearchField"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            {t('delete')}
                                        </CustomButton>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
import { Form, useNavigate } from "@remix-run/react";
import { InputField, FieldType, Dictionary } from "@prisma/client";
import CustomButton from "~/components/UI/elements/custom_button";
import CustomInput from "~/components/UI/elements/custom_input";
import { useTranslation } from "react-i18next";

type GroupFormProps = {
    group: any,
    dicts: any,
}

export default function GroupForm({ group, dicts }: GroupFormProps) {
    const { t } = useTranslation()
    const navigate = useNavigate()

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
                    form="addInputFieldForm"
                    type="submit"
                    name="_action"
                    value="createEmptyInputField"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {t('add_field')}
                </CustomButton>
                <CustomButton
                    className="hidden"
                    id="updateGroupButton"
                    color="green"
                    form="updateGroupForm"
                    type="submit"
                    name="_action"
                    value="updateGroup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t('save')}
                </CustomButton>
                <CustomButton
                    className="bg-red-500 hover:shadow-red-100"
                    form="deleteGroupForm"
                    type="submit"
                    name="_action"
                    value="deleteGroup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {t('delete')}
                </CustomButton>
            </div>
            <Form
                id="addInputFieldForm"
                method="post"
            >
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />
                <input type="hidden" name="groupId" defaultValue={group.id} />
                <input type="hidden" name="cnt" defaultValue={group.fields.length + 1} />
            </Form>
            <Form
                id="updateGroupForm"
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={group.id} />
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />

                <CustomInput
                    id="group_pos"
                    type="number"
                    name="pos"
                    title={t('pos')}
                    defaultValue={group?.pos}
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateGroupButton") as HTMLButtonElement
                        button.click()
                    }}
                    subClass="w-16"
                />
                <CustomInput
                    id="group_title"
                    type="text"
                    name="title"
                    title={t('title')}
                    defaultValue={group?.title}
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateGroupButton") as HTMLButtonElement
                        button.click()
                    }}
                    size={100}
                />
                <CustomInput
                    id="group_ismulty"
                    type="checkbox"
                    name="isMulty"
                    title={t('is_multy')}
                    checked={group?.isMulty ? true : false}
                    required={false}
                    onChange={() => {
                        const button = document.getElementById("updateGroupButton") as HTMLButtonElement
                        button.click()
                    }}
                />
            </Form>
            {group?.fields && group.fields.map((field: InputField) => (
                <Form
                    className="hidden"
                    id={`updateInputFieldForm_${field.id}`}
                    key={`updateInputFieldForm_${field.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={field.id} />
                    <input type="hidden" name="groupId" defaultValue={field.groupId} />
                    <CustomButton
                        className="bg-green-500 hover:shadow-green-100"
                        id={`updateInputFieldButton_${field.id}`}
                        form={`updateInputFieldForm_${field.id}`}
                        type="submit"
                        name="_action"
                        value="updateInputField"
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
                            <th className="p-1 text-sm border border-blue-gray-700">{t('span')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('start')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('title')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('type_data')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('dictionary')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('len')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('precision')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('is_key')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('is_visible')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('is_enable')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('is_require')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700">{t('duplicate')}</th>
                            <th className="p-1 text-sm border border-blue-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {group?.fields && group.fields.map((field: InputField, index: number) => (
                            <tr key={field.id} >
                                <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="pos"
                                        defaultValue={field.pos}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="colSpan"
                                        min={1}
                                        max={3}
                                        defaultValue={field.colSpan}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="colStart"
                                        min={1}
                                        max={3}
                                        defaultValue={field.colStart}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td
                                    className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40"
                                    onClick={() => navigate(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}&inputFieldId=${field.id}`)}
                                >
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="text"
                                        name="title"
                                        defaultValue={field.title}
                                        maxLength={23}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <select
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        name="fieldType"
                                        defaultValue={field.fieldType}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    >
                                        {Object.keys(FieldType).map((key) => <option key={key} value={key}>{key}</option>)}
                                    </select>
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    {field.fieldType === 'DICT'
                                        ? <select
                                            className="text-sm w-full"
                                            form={`updateInputFieldForm_${field.id}`}
                                            name="dicId"
                                            defaultValue={String(field.dicId)}
                                            onChange={() => {
                                                const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                                button.click()
                                            }}
                                        >
                                            <option value="">-</option>
                                            {dicts.map((dic: Dictionary) => <option key={dic.id} value={dic.id}>{dic.title}</option>)}
                                        </select>
                                        : null}
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="len"
                                        defaultValue={field.len}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="precision"
                                        defaultValue={field.precision}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isKey"
                                        defaultChecked={field.isKey}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isVisible"
                                        defaultChecked={field.isVisible}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isEnable"
                                        defaultChecked={field.isEnable}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isRequire"
                                        defaultChecked={field.isRequire}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isDuplicate"
                                        defaultChecked={field.isDuplicate}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer">
                                    <Form method="post">
                                        <input type="hidden" name="id" defaultValue={field?.id ? field.id : ''} />
                                        <CustomButton
                                            className="bg-red-500 hover:shadow-red-100"
                                            onClick={handleDelete}
                                            type="submit"
                                            name="_action"
                                            value="deleteInputField"
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
            <Form
                id="deleteGroupForm"
                method="post"
                onSubmit={(event) => {
                    const response = confirm(
                        "Please confirm you want to delete this record."
                    );
                    if (!response) {
                        event.preventDefault();
                    }
                }}
            >
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />
                <input type="hidden" name="id" defaultValue={group.id} />
            </Form>
        </>
    )
}
import { Form } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import CustomInput from "~/components/UI/elements/custom_input";
import { useTranslation } from "react-i18next";

type InputFormProps = {
    inputForm: any,
    groups: any,
}

export default function InputFormForm({ inputForm, groups }: InputFormProps) {
    const { t } = useTranslation()

    return (
        <>
            <div className="flex flex-row gap-3 justify-end">
                <CustomButton
                    className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                    form="addGroupForm"
                    type="submit"
                    name="_action"
                    value="createEmptyGroup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {t('add_group')}
                </CustomButton>
                <CustomButton
                    className="hidden"
                    id="updateInputFormButton"
                    form="updateInputForm"
                    type="submit"
                    name="_action"
                    value="updateInputForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t('save')}
                </CustomButton>
                <CustomButton
                    className="bg-red-500 hover:shadow-red-100"
                    form="deleteInputForm"
                    type="submit"
                    name="_action"
                    value="deleteInputForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {t('delete')}
                </CustomButton>
            </div>
            <Form
                id="addGroupForm"
                key={1}
                method="post"
            >
                <input type="hidden" name="inputFormId" defaultValue={inputForm.id ? inputForm.id : ''} />
                <input type="hidden" name="cnt" defaultValue={groups.length + 1} />
            </Form>
            <Form
                id="updateInputForm"
                key={2}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={inputForm.id ? inputForm.id : ''} />
                <CustomInput
                    id="inputForm_pos"
                    title={t('pos')}
                    type="number"
                    defaultValue={inputForm?.pos}
                    name="pos"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateInputFormButton") as HTMLButtonElement
                        button.click()
                    }}
                    subClass="w-16"
                />
                <CustomInput
                    id="inputForm_title"
                    title={t('title')}
                    type="text"
                    defaultValue={inputForm?.title}
                    name="title"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateInputFormButton") as HTMLButtonElement
                        button.click()
                    }}
                    size={100}
                />
            </Form>
            <Form
                id="deleteInputForm"
                key={3}
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
                <input type="hidden" name="id" defaultValue={inputForm.id ? inputForm.id : ''} />
            </Form>
        </>
    )
}
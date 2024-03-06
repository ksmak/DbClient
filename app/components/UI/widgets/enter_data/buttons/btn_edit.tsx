import { Form } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonEditProps = {
    userId: number,
    inputFormId: number,
    doc: any
}

export default function ButtonEdit({ userId, inputFormId, doc }: ButtonEditProps) {
    const { t } = useTranslation()

    return (
        <Form method="post">
            <input type="hidden" name="_user" value={userId} />
            <input type="hidden" name="_inputFormId" value={inputFormId} />
            <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                type="submit"
                name="_action"
                value="openForEdit"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
                {t('edit')}
            </CustomButton>
        </Form>
    )
}
import { Form } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonCancelProps = {
    userId: number,
    inputFormId: number,
    doc: any
}

export default function ButtonCancel({ userId, inputFormId, doc }: ButtonCancelProps) {
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
                value="cancelUpdate"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                {t('cancel')}
            </CustomButton>
        </Form>
    )
}
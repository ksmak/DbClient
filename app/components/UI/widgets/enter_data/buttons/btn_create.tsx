import { Form } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";
import { useTranslation } from "react-i18next";

type ButtonCreateProps = {
    userId: number,
    inputFormId: number
}

export default function ButtonCreate({ userId, inputFormId }: ButtonCreateProps) {
    const { t } = useTranslation()

    return (
        <Form method="post">
            <input type="hidden" name="_user" value={userId} />
            <input type="hidden" name="_inputFormId" value={inputFormId} />
            <CustomButton
                className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                type="submit"
                name="_action"
                value="openForCreate"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {t('create')}
            </CustomButton>
        </Form>
    )
}
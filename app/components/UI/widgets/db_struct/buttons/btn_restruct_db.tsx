import MaterialTailwind from "@material-tailwind/react";
const { Spinner } = MaterialTailwind;
import { Form, useFetcher } from "@remix-run/react";
import CustomButton from "~/components/UI/elements/custom_button";

export default function ButtonRestructDb() {
    const fetcher = useFetcher()
    const isRestruct = fetcher.state !== "idle"
    const handleRestruct = async (event: any) => {
        const response = confirm(
            "Please confirm you want to restructure database."
        )
        if (!response) {
            event.preventDefault()
        }
    }

    return (
        <Form method="post">
            <CustomButton
                className="bg-blue-500 hover:shadow-blue-100"
                type="submit"
                name="_action"
                value="generateStructDb"
                disabled={isRestruct}
                onClick={handleRestruct}
            >
                {isRestruct
                    ? <>
                        <Spinner className="w-4 h-4" />
                        Restructuring...
                    </>
                    : <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                        Restruct Database
                    </>}
            </CustomButton>
        </Form>
    )
}
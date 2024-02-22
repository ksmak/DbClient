import MaterialTailwind from "@material-tailwind/react"
const { Spinner } = MaterialTailwind;
import { Form, useFetcher } from "@remix-run/react"
import CustomButton from "../elements/custom_button";
import CustomInput from "../elements/custom_input";

type DictionaryFormProps = {
    dictionary: any
}

export default function DictionaryForm({ dictionary }: DictionaryFormProps) {
    const fetcher = useFetcher()
    const isDeleting = fetcher.state !== "idle"
    const handleDelete = async (event: any) => {
        const response = confirm(
            "Please confirm you want to delete this record."
        )
        if (!response) {
            event.preventDefault()
        }
    }

    return (
        <>
            <div className="flex flex-row gap-3 justify-end">
                <CustomButton
                    className="hidden"
                    id="updateDictionaryButton"
                    form="updateDictionary"
                    type="submit"
                    name="_action"
                    value="updateDictionary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Save
                </CustomButton>
                <fetcher.Form method="post">
                    <input type="hidden" name="id" defaultValue={dictionary.id ? dictionary.id : ''} />
                    <CustomButton
                        className="bg-red-500 hover:shadow-red-100"
                        disabled={isDeleting}
                        onClick={handleDelete}
                        type="submit"
                        name="_action"
                        value="deleteDictionary"
                    >
                        {isDeleting
                            ? <>
                                <Spinner className="w-4 h-4" />
                                Deleting...
                            </>
                            : <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                Delete
                            </>}
                    </CustomButton>
                </fetcher.Form>
            </div>
            <Form
                id="updateDictionary"
                key={dictionary?.id}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={dictionary.id ? dictionary.id : ''} />
                <CustomInput
                    id={dictionary.id}
                    title="Title"
                    type="text"
                    defaultValue={dictionary?.title}
                    name="title"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateDictionaryButton") as HTMLButtonElement
                        button.click()
                    }}
                />
            </Form >
            <Form
                id="deleteDictionary"
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
                <input type="hidden" name="id" defaultValue={dictionary.id ? dictionary.id : ''} />
            </Form>
        </>
    )
}
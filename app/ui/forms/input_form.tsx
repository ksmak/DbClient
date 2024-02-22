import MaterialTailwind from "@material-tailwind/react"
const { Spinner } = MaterialTailwind
import { Form } from "@remix-run/react"
import CustomButton from "../elements/custom_button";
import CustomInput from "../elements/custom_input";

type InputFormProps = {
    inputForm: any,
    groups: any,
}

export default function InputFormForm({ inputForm, groups }: InputFormProps) {
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
                    Add Group
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
                    Save
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
                    Delete
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
                    title="Pos: "
                    type="number"
                    defaultValue={inputForm?.pos}
                    name="pos"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateInputFormButton") as HTMLButtonElement
                        button.click()
                    }}
                />
                <CustomInput
                    id="inputForm_title"
                    title="Title: "
                    type="text"
                    defaultValue={inputForm?.title}
                    name="title"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateInputFormButton") as HTMLButtonElement
                        button.click()
                    }}
                />
            </Form>
            <Form
                id="deleteInputForm"
                key={3}
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
                <input type="hidden" name="id" defaultValue={inputForm.id ? inputForm.id : ''} />
            </Form>
        </>
    )
}
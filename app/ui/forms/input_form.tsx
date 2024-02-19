import MaterialTailwind from "@material-tailwind/react"
const { Button } = MaterialTailwind
import { Form } from "@remix-run/react"
import Input from "../elements/input_field";

type InputFormProps = {
    inputForm: any,
    groups: any,
}

export default function InputFormForm({ inputForm, groups }: InputFormProps) {
    return (
        <>
            <div className="flex flex-row gap-3 justify-end">
                <Button
                    className="flex items-center gap-1"
                    color="blue-gray"
                    form="addGroupForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="createEmptyGroup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Group
                </Button>
                <Button
                    id="updateInputFormButton"
                    className="hidden"
                    color="green"
                    form="updateInputForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="updateInputForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Save
                </Button>
                <Button
                    className="flex items-center gap-1"
                    color="red"
                    form="deleteInputForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="deleteInputForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    Delete
                </Button>
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
                <Input
                    title="Pos: "
                    type="number"
                    value={inputForm?.pos}
                    name="pos"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateInputFormButton") as HTMLButtonElement
                        button.click()
                    }}
                />
                <Input
                    title="Title: "
                    type="text"
                    value={inputForm?.title}
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
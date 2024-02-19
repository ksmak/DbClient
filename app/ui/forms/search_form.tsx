import MaterialTailwind from "@material-tailwind/react"
const { Button } = MaterialTailwind;
import { Form } from "@remix-run/react"
import Input from "../elements/input_field";

type SearchFormProps = {
    searchForm: any
}
export default function SearchFormForm({ searchForm }: SearchFormProps) {
    return (
        <>
            <div className="flex flex-row gap-3 justify-end">
                <Button
                    className="flex items-center gap-1"
                    color="green"
                    form="updateSearchForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="updateSearchForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Save
                </Button>
                <Button
                    className="flex items-center gap-1"
                    color="red"
                    form="deleteSearchForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="deleteSearchForm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    Delete
                </Button>
            </div>
            <Form
                id="updateSearchForm"
                key={searchForm?.id}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={searchForm.id ? searchForm.id : ''} />
                <Input
                    title="Pos: "
                    type="number"
                    value={searchForm?.pos}
                    name="pos"
                    required={true}
                />
                <Input
                    title="Title: "
                    type="text"
                    value={searchForm?.title}
                    name="title"
                    required={true}
                />
            </Form>
            <Form
                id="deleteSearchForm"
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
                <input type="hidden" name="id" defaultValue={searchForm.id ? searchForm.id : ''} />
            </Form>
        </>
    )
}
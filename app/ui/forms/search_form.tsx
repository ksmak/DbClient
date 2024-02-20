import MaterialTailwind from "@material-tailwind/react"
const { Button } = MaterialTailwind;
import { Form, useFetcher } from "@remix-run/react"
import Input from "../elements/input_field";
import { InputField, SearchField } from "@prisma/client";

type SearchFormProps = {
    searchForm: any,
    inputFields: any,
}
export default function SearchFormForm({ searchForm, inputFields }: SearchFormProps) {
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
                <Button
                    className="flex items-center gap-1"
                    color="blue-gray"
                    form="addSearchFieldForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="createEmptySearchField"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Field
                </Button>
                <Button
                    id="updateSearchFormButton"
                    className="hidden"
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
            <fetcher.Form
                id="addSearchFieldForm"
                method="post"
            >
                <input type="hidden" name="searchFormId" defaultValue={searchForm.id} />
                <input type="hidden" name="cnt" defaultValue={searchForm.fields?.length + 1} />
            </fetcher.Form>
            <Form
                id="updateSearchForm"
                key={searchForm?.id}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={searchForm.id} />
                <Input
                    title="Pos: "
                    type="number"
                    value={searchForm?.pos}
                    name="pos"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateSearchFormButton") as HTMLButtonElement
                        button.click()
                    }}
                />
                <Input
                    title="Title: "
                    type="text"
                    value={searchForm?.title}
                    name="title"
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateSearchFormButton") as HTMLButtonElement
                        button.click()
                    }}
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
            {searchForm?.fields && searchForm.fields.map((field: SearchField) => (
                <Form
                    className="hidden"
                    id={`updateSearchFieldForm_${field.id}`}
                    key={`updateSearchFieldForm_${field.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={field.id} />
                    <input type="hidden" name="searchFormId" defaultValue={field.searchFormId} />
                    <Button
                        id={`updateSearchFieldButton_${field.id}`}
                        className="flex items-center gap-1"
                        color="green"
                        form={`updateSearchFieldForm_${field.id}`}
                        placeholder=""
                        size="sm"
                        type="submit"
                        name="_action"
                        value="updateSearchField"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Save
                    </Button>
                </Form>
            ))}
            <div className="overflow-x-auto mt-4">
                <table className="w-full">
                    <thead
                        className="bg-blue-gray-400 text-white text-center"
                    >
                        <tr>
                            <th className="p-1 text-sm border border-blue-gray-700">#</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Pos</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Title</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Field</th>
                            <th className="p-1 text-sm border border-blue-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchForm?.fields && searchForm.fields.map((field: SearchField, index: number) => (
                            <tr key={field.id} >
                                <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        type="number"
                                        name="pos"
                                        defaultValue={field.pos}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td
                                    className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40"
                                >
                                    <input
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        type="text"
                                        name="title"
                                        defaultValue={field.title}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <select
                                        className="text-sm w-full"
                                        form={`updateSearchFieldForm_${field.id}`}
                                        name="fieldId"
                                        defaultValue={String(field.fieldId)}
                                        onChange={() => {
                                            const button = document.getElementById(`updateSearchFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    >
                                        <option value="">-</option>
                                        {inputFields && inputFields.map(
                                            (fld: InputField) =>
                                                <option key={fld.id} value={fld.id}>
                                                    {`${fld.group.pos}. ${fld.group.title} -> ${fld.title}`}
                                                </option>)}
                                    </select>
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer">
                                    <fetcher.Form method="post">
                                        <input type="hidden" name="id" defaultValue={field.id} />
                                        <Button
                                            className="hover:underline"
                                            color="red"
                                            placeholder=""
                                            size="sm"
                                            disabled={isDeleting}
                                            onClick={handleDelete}
                                            type="submit"
                                            name="_action"
                                            value="deleteSearchField"
                                        >
                                            {isDeleting ? "Deleting..." : "Delete"}
                                        </Button>
                                    </fetcher.Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
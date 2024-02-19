import MaterialTailwind from "@material-tailwind/react";
const { Button } = MaterialTailwind;
import { Form, useFetcher, useNavigate } from "@remix-run/react"
import Input from "../elements/input_field";
import CheckField from "../elements/check_field";
import { InputField } from "@prisma/client";

type GroupFormProps = {
    group: any
}

export default function GroupForm({ group }: GroupFormProps) {
    const navigate = useNavigate()
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
                    form="addInputFieldForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="createEmptyInputField"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Field
                </Button>
                <Button
                    id="updateGroupButton"
                    className="hidden"
                    color="green"
                    form="updateGroupForm"
                    placeholder=""
                    type="submit"
                    size="sm"
                    name="_action"
                    value="updateGroup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Save
                </Button>
                <Button
                    className="flex items-center gap-1"
                    color="red"
                    form="deleteGroupForm"
                    placeholder=""
                    size="sm"
                    type="submit"
                    name="_action"
                    value="deleteGroup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    Delete
                </Button>
            </div>
            <fetcher.Form
                id="addInputFieldForm"
                method="post"
            >
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />
                <input type="hidden" name="groupId" defaultValue={group.id} />
                <input type="hidden" name="cnt" defaultValue={group.fields.length + 1} />
            </fetcher.Form>
            <Form
                id="updateGroupForm"
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={group.id} />
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />

                <Input
                    type="number"
                    name="pos"
                    title="Pos: "
                    value={group?.pos}
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateGroupButton") as HTMLButtonElement
                        button.click()
                    }}
                />
                <Input
                    type="text"
                    name="title"
                    title="Title: "
                    value={group?.title}
                    required={true}
                    onChange={() => {
                        const button = document.getElementById("updateGroupButton") as HTMLButtonElement
                        button.click()
                    }}
                />
                <CheckField
                    type="checkbox"
                    name="isMulty"
                    title="Is Multy: "
                    value={group?.isMulty ? true : false}
                    required={false}
                    onChange={() => {
                        const button = document.getElementById("updateGroupButton") as HTMLButtonElement
                        button.click()
                    }}
                />on
            </Form>
            {group?.fields && group.fields.map((field: InputField) => (
                <Form
                    className="hidden"
                    id={`updateInputFieldForm_${field.id}`}
                    key={`updateInputFieldForm_${field.id}`}
                    method="post"
                >
                    <input type="hidden" name="id" defaultValue={field.id} />
                    <input type="hidden" name="groupId" defaultValue={field.groupId} />
                    <Button
                        id={`updateInputFieldButton_${field.id}`}
                        className="flex items-center gap-1"
                        color="green"
                        form={`updateInputFieldForm_${field.id}`}
                        placeholder=""
                        size="sm"
                        type="submit"
                        name="_action"
                        value="updateInputField"
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
                            <th className="p-1 text-sm border border-blue-gray-700">Type</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Len</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Precision</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Key</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Visible</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Enable</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Require</th>
                            <th className="p-1 text-sm border border-blue-gray-700">Duplicate</th>
                            <th className="p-1 text-sm border border-blue-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {group?.fields && group.fields.map((field: InputField, index: number) => (
                            <tr key={field.id} >
                                <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="pos"
                                        defaultValue={field.pos}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td
                                    className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40"
                                    onClick={() => navigate(`/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}&inputFieldId=${field.id}`)}
                                >
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="text"
                                        name="title"
                                        defaultValue={field.title}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">{field.filedType}</td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="len"
                                        defaultValue={field.len}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 w-20">
                                    <input
                                        className="text-sm w-full"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="number"
                                        name="precision"
                                        defaultValue={field.precision}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isKey"
                                        defaultChecked={field.isKey}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isVisible"
                                        defaultChecked={field.isVisible}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isEnable"
                                        defaultChecked={field.isEnable}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isRequire"
                                        defaultChecked={field.isRequire}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700">
                                    <input
                                        className="text-sm"
                                        form={`updateInputFieldForm_${field.id}`}
                                        type="checkbox"
                                        name="isDuplicate"
                                        defaultChecked={field.isDuplicate}
                                        onChange={() => {
                                            const button = document.getElementById(`updateInputFieldButton_${field.id}`) as HTMLButtonElement
                                            button.click()
                                        }}
                                    />
                                </td>
                                <td className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer">
                                    <fetcher.Form method="post">
                                        <input type="hidden" name="id" defaultValue={field?.id ? field.id : ''} />
                                        <Button
                                            className="hover:underline"
                                            color="red"
                                            placeholder=""
                                            size="sm"
                                            disabled={isDeleting}
                                            onClick={handleDelete}
                                            type="submit"
                                            name="_action"
                                            value="deleteInputField"
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
            <Form
                id="deleteGroupForm"
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
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />
                <input type="hidden" name="id" defaultValue={group.id} />
            </Form>
        </>
    )
}
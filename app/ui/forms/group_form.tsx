import MaterialTailwind from "@material-tailwind/react";
import { Group, InputField as Field } from "@prisma/client";
const { Button } = MaterialTailwind;
import { Form } from "@remix-run/react"
import InputField from "../elements/input_field";
import CheckField from "../elements/check_field";

type GroupFormProps = {
    group: Group,
    inputFields: Field[],
}

export default function GroupForm({ group, inputFields }: GroupFormProps
) {
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
                    value="addInputField"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Field
                </Button>
                <Button
                    className="flex items-center gap-1"
                    color="green"
                    form="updateGroupForm"
                    placeholder=""
                    size="sm"
                    type="submit"
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
            <Form
                id="addInputFieldForm"
                key={1}
                method="post"
            >
                <input type="hidden" name="groupId" defaultValue={group.id} />
                <input type="hidden" name="cnt" defaultValue={inputFields.length + 1} />
            </Form>
            <Form
                id="updateGroupForm"
                key={2}
                className="flex flex-col gap-3"
                method="post"
            >
                <input type="hidden" name="id" defaultValue={group.id} />
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />
                <InputField
                    type="number"
                    name="pos"
                    title="Pos: "
                    value={group?.pos}
                    required={true}
                />
                <InputField
                    type="text"
                    name="title"
                    title="Title: "
                    value={group?.title}
                    required={true}
                />
                <InputField
                    type="text"
                    name="tableName"
                    title="Table name: "
                    value={group?.tableName}
                    required={true}
                />
                <CheckField
                    type="checkbox"
                    name="isMulty"
                    title="Is Multy: "
                    value={group?.isMulty}
                    required={false}
                />
            </Form>
            <Form
                id="deleteGroupForm"
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
                <input type="hidden" name="id" defaultValue={group.id} />
            </Form>
        </>
    )
}
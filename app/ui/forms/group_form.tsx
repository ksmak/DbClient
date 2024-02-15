import MaterialTailwind from "@material-tailwind/react";
const { Button } = MaterialTailwind;
import { Form, useNavigate } from "@remix-run/react"
import Input from "../elements/input_field";
import CheckField from "../elements/check_field";
import { InputField } from "@prisma/client";
import { ActionFunctionArgs } from "@remix-run/node";
import moment from "moment";

type GroupFormProps = {
    group: any
}

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)


    return null
}

export default function GroupForm({ group }: GroupFormProps
) {
    const navigate = useNavigate()

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
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />
                <input type="hidden" name="groupId" defaultValue={group.id} />
                <input type="hidden" name="cnt" defaultValue={group.fields.length + 1} />
            </Form>
            <Form
                id="updateGroupForm"
                key={2}
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
                />
                <Input
                    type="text"
                    name="title"
                    title="Title: "
                    value={group?.title}
                    required={true}
                />
                <Input
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
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead
                            className="bg-blue-gray-400 text-white"
                        >
                            <tr>
                                <th className="p-1 text-sm border border-blue-gray-700">#</th>
                                <th className="p-1 text-sm border border-blue-gray-700">pos</th>
                                <th className="p-1 text-sm border border-blue-gray-700">title</th>
                                <th className="p-1 text-sm border border-blue-gray-700">name</th>
                                <th className="p-1 text-sm border border-blue-gray-700">type</th>
                                <th className="p-1 text-sm border border-blue-gray-700">Len</th>
                                <th className="p-1 text-sm border border-blue-gray-700">1</th>
                                <th className="p-1 text-sm border border-blue-gray-700">2</th>
                                <th className="p-1 text-sm border border-blue-gray-700">3</th>
                                <th className="p-1 text-sm border border-blue-gray-700">4</th>
                                <th className="p-1 text-sm border border-blue-gray-700">5</th>
                                <th className="p-1 text-sm border border-blue-gray-700">6</th>
                                <th className="p-1 text-sm border border-blue-gray-700">createAt</th>
                                <th className="p-1 text-sm border border-blue-gray-700">updateAt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {group?.fields && group.fields.map((field: InputField, index: number) => (
                                <tr
                                    className="hover:cursor-pointer hover:bg-blue-gray-100"
                                    key={field.id}
                                    onClick={() => navigate(`/fields?fieldId=${field.id}`)}
                                >
                                    <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.pos}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.title}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.fieldName}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.fieldType}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.len}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.isKey}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.isVisible}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.isEnable}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.isRequire}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.precision}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{field.isDuplicate}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{moment(field.createdAt).format('DD.MM.YYYY H:m:s')}</td>
                                    <td className="p-1 text-sm border border-blue-gray-700">{moment(field.updatedAt).format('DD.MM.YYYY H:m:s')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                <input type="hidden" name="inputFormId" defaultValue={group.inputFormId} />
                <input type="hidden" name="id" defaultValue={group.id} />
            </Form>
        </>
    )
}
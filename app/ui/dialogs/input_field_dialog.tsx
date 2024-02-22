import MaterialTailwind from "@material-tailwind/react";
import { InputField } from "@prisma/client";
import { Form } from "@remix-run/react";
import CustomInput from "../elements/custom_input";
import CustomButton from "../elements/custom_button";
const { Dialog, Card, CardBody, CardFooter } = MaterialTailwind;

type InputFieldDialogProps = {
    handleOpen: () => void
    open: boolean,
    field: InputField | null
}

export default function InputFieldDialog({ handleOpen, open, field }: InputFieldDialogProps) {
    return (
        <Dialog
            placeholder=""
            size="sm"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full" placeholder="">
                <CardBody className="flex flex-col gap-4 overflow-auto" placeholder="">
                    <Form
                        id="updateUserForm"
                        key={field?.id}
                        className="flex flex-col gap-3"
                        method="post"
                    >
                        <input type="hidden" name="id" defaultValue={field?.id ? field.id : ''} />
                        <CustomInput
                            id="inputField_title"
                            type="text"
                            name="title"
                            title="Title: "
                            defaultValue={field?.title}
                            required={true}
                        />
                    </Form>
                    <Form
                        id="deleteInputFieldForm"
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
                        <input type="hidden" name="groupId" defaultValue={field?.groupId} />
                        <input type="hidden" name="id" defaultValue={field?.id} />
                    </Form>
                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3" placeholder="">
                    <CustomButton
                        className="bg-green-500 hover:shadow-green-100"
                        form="updateUserForm"
                        type="submit"
                        name="_action"
                        value="updateUser"
                    >
                        Save
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                        form="deleteUserForm"
                        type="submit"
                        name="_action"
                        value="deleteUser"
                    >
                        Delete
                    </CustomButton>
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                        onClick={handleOpen}
                    >
                        Close
                    </CustomButton>
                </CardFooter>
            </Card>
        </Dialog>
    )
}
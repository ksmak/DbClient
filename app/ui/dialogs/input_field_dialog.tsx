import MaterialTailwind from "@material-tailwind/react";
import { Department, User, Role, InputField } from "@prisma/client";
import { Form } from "@remix-run/react";
import Input from "../elements/input_field";
import SelectField from "../elements/select_field";
import moment from "moment";
const { Button, Dialog, Card, CardBody, CardFooter } = MaterialTailwind;

type InputFieldDialogProps = {
    handleOpen: () => void
    open: boolean,
    field: InputField | null
}

export default function UserDialog({ handleOpen, open, field }: InputFieldDialogProps) {
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
                        <Input
                            type="text"
                            name="title"
                            title="Title: "
                            value={field?.title}
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
                    <Button
                        variant="gradient"
                        color="green"
                        form="updateUserForm"
                        placeholder=""
                        type="submit"
                        name="_action"
                        value="updateUser"
                        fullWidth
                    >
                        Save
                    </Button>
                    <Button
                        variant="gradient"
                        color="red"
                        form="deleteUserForm"
                        placeholder=""
                        type="submit"
                        name="_action"
                        value="deleteUser"
                        fullWidth
                    >
                        Delete
                    </Button>
                    <Button variant="gradient" onClick={handleOpen} fullWidth placeholder="">
                        Close
                    </Button>
                </CardFooter>
            </Card>
        </Dialog>
    )
}
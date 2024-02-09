import MaterialTailwind from "@material-tailwind/react";
import { Department, User, Role } from "@prisma/client";
import { Form } from "@remix-run/react";
import InputField from "../elements/input_field";
import SelectField from "../elements/select_field";
import moment from "moment";
const { Button, Dialog, Card, CardBody, CardFooter } = MaterialTailwind;

type UserDialogProps = {
    handleOpen: () => void
    open: boolean,
    user: User | null,
    roles: { id: Role, title: Role }[],
    departments: Department[],
}

export default function UserDialog({ handleOpen, open, user, roles, departments }: UserDialogProps) {
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
                        key={user?.id}
                        className="flex flex-col gap-3"
                        method="post"
                    >
                        <input type="hidden" name="id" defaultValue={user?.id ? user.id : ''} />
                        <InputField
                            type="text"
                            name="login"
                            title="Login: "
                            value={user?.login}
                            required={true}
                        />
                        <InputField
                            type="password"
                            name="password"
                            title="Password: "
                            value={user?.password}
                            required={false}
                        />
                        <InputField
                            type="text"
                            name="firstName"
                            title="First Name: "
                            value={user?.firstName}
                            required={false}
                        />
                        <InputField
                            type="text"
                            name="lastName"
                            title="Last Name: "
                            value={user?.lastName}
                            required={false}
                        />
                        <InputField
                            type="text"
                            name="middleName"
                            title="Middle Name: "
                            value={user?.middleName}
                            required={false}
                        />
                        <SelectField
                            name="role"
                            title="Role: "
                            options={roles}
                            value={user?.role}
                            required={true}
                        />
                        <SelectField
                            name="departmentId"
                            title="Department: "
                            options={departments}
                            value={user?.departmentId}
                            required={false}
                        />
                        <InputField
                            type="date"
                            name="expiredPwd"
                            title="Expired Password: "
                            value={moment(user?.expiredPwd).format("YYYY-MM-DD")}
                            required={true}
                        />
                    </Form>
                    <Form
                        id="deleteUserForm"
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
                        <input type="hidden" name="id" defaultValue={user?.id ? user.id : ''} />
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
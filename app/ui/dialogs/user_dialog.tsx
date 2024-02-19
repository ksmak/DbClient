import MaterialTailwind from "@material-tailwind/react";
import { Department, User, Role } from "@prisma/client";
import { Form } from "@remix-run/react";
import InputField from "../elements/input_field";
import SelectField from "../elements/select_field";
import moment from "moment";
const { Button, Dialog, Card, CardBody, CardFooter } = MaterialTailwind;

type UserDialogProps = {
    isNew: boolean
    handleOpen: () => void
    open: boolean,
    user: User | null,
    roles: Role[],
    departments: Department[],
    errors: string | null | undefined
}

export default function UserDialog({ isNew, handleOpen, open, user, roles, departments, errors }: UserDialogProps) {
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
                        id="userForm"
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
                            readonly={!isNew}
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
                    <span className="text-red-500 text-sm">{errors}</span>
                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3" placeholder="">
                    <Button
                        variant="gradient"
                        color="green"
                        form="userForm"
                        placeholder=""
                        type="submit"
                        name="_action"
                        value={isNew ? "createUser" : "updateUser"}
                        fullWidth
                    >
                        Save
                    </Button>
                    <Button variant="gradient" onClick={handleOpen} fullWidth placeholder="">
                        Close
                    </Button>
                </CardFooter>
            </Card>
        </Dialog>
    )
}
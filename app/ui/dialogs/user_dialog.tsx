import MaterialTailwind from "@material-tailwind/react";
import { Department, User, Role } from "@prisma/client";
import { Form } from "@remix-run/react";
import moment from "moment";
import CustomInput from "../elements/custom_input";
import CustomSelect from "../elements/custom_select";
import CustomButton from "../elements/custom_button";
const { Dialog, Card, CardBody, CardFooter } = MaterialTailwind;

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
                        <CustomInput
                            id="user_is_active"
                            type="checkbox"
                            name="isActive"
                            title="is Active: "
                            defaultChecked={user?.isActive}
                        />
                        <CustomInput
                            id="user_login"
                            type="text"
                            name="login"
                            title="Login: "
                            defaultValue={user?.login}
                            required={true}
                            readOnly={!isNew}
                        />
                        <CustomInput
                            id="user_password"
                            type="password"
                            name="password"
                            title="Password: "
                            defaultValue={user?.password}
                            required={false}
                        />
                        <CustomInput
                            id="user_firsName"
                            type="text"
                            name="firstName"
                            title="First Name: "
                            defaultValue={user?.firstName ? user.firstName : ""}
                            required={false}
                        />
                        <CustomInput
                            id="user_lastName"
                            type="text"
                            name="lastName"
                            title="Last Name: "
                            defaultValue={user?.lastName ? user.lastName : ""}
                            required={false}
                        />
                        <CustomInput
                            id="user_middleName"
                            type="text"
                            name="middleName"
                            title="Middle Name: "
                            defaultValue={user?.middleName ? user.middleName : ""}
                            required={false}
                        />
                        <CustomSelect
                            id="user_department"
                            name="departmentId"
                            title="Department: "
                            defaultValue={user?.departmentId ? user.departmentId : ""}
                            required={false}
                        >
                            <option>-</option>
                            {departments.map(item => (
                                <option value={item.id}>{item.title}</option>
                            ))}
                        </CustomSelect>
                        <CustomInput
                            id="user_expiredPwd"
                            type="date"
                            name="expiredPwd"
                            title="Expired Password: "
                            defaultValue={moment(user?.expiredPwd).format("YYYY-MM-DD")}
                            required={true}
                        />
                    </Form>
                    <span className="text-red-500 text-sm">{errors}</span>
                </CardBody>
                <CardFooter className="pt-0 flex flex-row gap-3" placeholder="">
                    <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                        form="userForm"
                        type="submit"
                        name="_action"
                        value={isNew ? "createUser" : "updateUser"}
                    >
                        Save
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
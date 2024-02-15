import MaterialTailwind from "@material-tailwind/react";
import { User } from "@prisma/client";
const { Button } = MaterialTailwind;
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useLoaderData, useNavigate } from "@remix-run/react"
import moment from "moment";
import { createEmptyUser, deleteUser, getDepartments, getRoles, getUser, getUsers, updateUser } from "~/api/api"
import UserDialog from "~/ui/dialogs/user_dialog";

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const roles = await getRoles()
    const departments = await getDepartments()
    const users = await getUsers()
    const url = new URL(request.url)
    const userId = url.searchParams.get("userId")
    let user
    if (userId) {
        user = await getUser(Number(userId))
        user = { ...user, password: undefined }
    }
    return json({ user, users, roles, departments })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData();
    const { _action, ...values } = Object.fromEntries(formData);
    if (_action === 'createEmptyUser') {
        const user = await createEmptyUser(Number(values.cnt))
        return redirect(`/users?userId=${user.id}`);
    }
    if (_action === 'updateUser') {
        await updateUser(Number(values.id), {
            id: Number(values.id),
            login: String(values.login),
            password: String(values.password),
            firstName: String(values.firstName),
            lastName: String(values.lastName),
            middleName: String(values.middleName),
            departmentId: Number(values.departmentId),
            expiredPwd: new Date(String(values.expiredPwd)),
            createdAt: null,
            updatedAt: null,
        });
        return redirect(`/users`);
    }
    if (_action === 'deleteUser') {
        await deleteUser(Number(values.id));
        return redirect(`/users`);
    }
    return null
}

export default function Users() {
    const { user, users, roles, departments } = useLoaderData<typeof loader>()
    const navigate = useNavigate()

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <UserDialog
                handleOpen={() => { navigate('/users') }}
                open={user ? true : false}
                user={user ? user as User : null}
                roles={roles}
                departments={departments}
            />
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">Users</h1>
            <div
                className="flex items-center gap-3"
            >
                <Form method="post">
                    <input type="hidden" name="cnt" defaultValue={users.length + 1} />
                    <Button
                        className="flex items-center gap-3"
                        color="blue-gray"
                        placeholder=''
                        size="sm"
                        type="submit"
                        name="_action"
                        value="createEmptyUser"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add User
                    </Button>
                </Form>
            </div>
            <table
                className="border-2 border-blue-gray-700"
            >
                <thead
                    className="bg-blue-gray-400 text-white"
                >
                    <tr>
                        <th className="p-1 text-sm border border-blue-gray-700">#</th>
                        <th className="p-1 text-sm border border-blue-gray-700">Login</th>
                        <th className="p-1 text-sm border border-blue-gray-700">First Name</th>
                        <th className="p-1 text-sm border border-blue-gray-700">Last Name</th>
                        <th className="p-1 text-sm border border-blue-gray-700">Middle Name</th>
                        <th className="p-1 text-sm border border-blue-gray-700">Department</th>
                        <th className="p-1 text-sm border border-blue-gray-700">Expired Password</th>
                        <th className="p-1 text-sm border border-blue-gray-700">created</th>
                        <th className="p-1 text-sm border border-blue-gray-700">updated</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            className="hover:cursor-pointer hover:bg-blue-gray-100"
                            key={user.id}
                            onClick={() => navigate(`/users?userId=${user.id}`)}
                        >
                            <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{user.login}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{user.firstName}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{user.lastName}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{user.middleName}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{departments.find(item => item.id === user.departmentId)?.title}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{moment(user.expiredPwd).format('DD.MM.YYYY')}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{moment(user.createdAt).format('DD.MM.YYYY H:m:s')}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{moment(user.updatedAt).format('DD.MM.YYYY H:m:s')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
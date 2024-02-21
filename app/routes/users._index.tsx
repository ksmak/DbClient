import MaterialTailwind from "@material-tailwind/react"
const { Spinner, Button } = MaterialTailwind
import { Department, Prisma, Role, User } from "@prisma/client"
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useActionData, useFetcher, useLoaderData, useNavigate } from "@remix-run/react"
import moment from "moment"
import UserDialog from "~/ui/dialogs/user_dialog"
import api from "~/api"
import { useEffect, useState } from "react"
import CustomButton from "~/ui/elements/custom_button"

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const roles: Role[] = await api.users.getRoles()
    const departments: Department[] = await api.users.getDepartments()
    const users = await api.users.getUsers()
    const url = new URL(request.url)
    const userId = url.searchParams.get("userId")
    const isNew = url.searchParams.get("new")
    let user
    if (isNew) {
        user = {}
    } else if (userId) {
        user = await api.users.getUser(Number(userId))
        user = { ...user, password: undefined }
    }
    return json({ user, users, roles, departments, isNew })
}

export async function action({
    request,
}: ActionFunctionArgs) {
    let errors: string | null = null
    const formData = await request.formData()
    const { _action, ...values } = Object.fromEntries(formData)
    if (_action === 'createUser') {
        const createUser = {
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
        }
        try {
            await api.users.createUser(createUser)
            return redirect("/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
            // throw e
        }
    }
    if (_action === 'updateUser') {
        const userId = Number(values.id)
        const updateUser = {
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
        }
        try {
            await api.users.updateUser(userId, updateUser)
            return redirect("/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
            // throw e
        }
    }
    if (_action === 'deleteUser') {
        const userId = Number(values.id)
        try {
            await api.users.deleteUser(userId)
            return redirect("/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
            // throw e
        }
    }
    return json({ errors })
}

export default function Users() {
    const [open, setOpen] = useState(false)
    const { user, users, roles, departments, isNew } = useLoaderData<typeof loader>()
    const actionData = useActionData<typeof action>()
    const navigate = useNavigate()
    const fetcher = useFetcher()
    const isDeleting = fetcher.state !== "idle"

    useEffect(() => {
        setOpen(user ? true : false)
    }, [user])

    const handleDelete = async (event: any) => {
        const response = confirm(
            "Please confirm you want to delete this record."
        )
        if (!response) {
            event.preventDefault()
        }
    }

    return (
        <div className="container mx-auto flex flex-col gap-3 h-screen pb-5">
            <UserDialog
                isNew={isNew ? true : false}
                handleOpen={() => navigate("/users")}
                open={open}
                user={user ? user as User : null}
                roles={roles}
                departments={departments}
                errors={actionData?.errors}
            />
            <h1 className="self-center text-amber-700 text-3xl font-bold mt-4">Users</h1>
            <div
                className="flex items-center gap-3"
            >
                <Button
                    className="flex items-center gap-3"
                    color="blue-gray"
                    placeholder=''
                    size="sm"
                    onClick={() => { navigate("/users?new=true") }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New User
                </Button>
            </div>
            <table
                className="border-2 border-blue-gray-700"
            >
                <thead
                    className="bg-blue-gray-400 text-white text-center"
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
                        <th className="p-1 text-sm border border-blue-gray-700">#</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User, index: number) => (
                        <tr
                            key={user.id}
                        // onClick={() => navigate(`/users?userId=${user.id}`)}
                        >
                            <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                            <td
                                className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                                onClick={() => navigate(`/users?userId=${user.id}`)}
                            >
                                {user.login}
                            </td>
                            <td
                                className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                                onClick={() => navigate(`/users?userId=${user.id}`)}
                            >
                                {user.firstName}
                            </td>
                            <td
                                className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                                onClick={() => navigate(`/users?userId=${user.id}`)}
                            >
                                {user.lastName}
                            </td>
                            <td
                                className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                                onClick={() => navigate(`/users?userId=${user.id}`)}
                            >
                                {user.middleName}
                            </td>
                            <td className="p-1 text-sm border border-blue-gray-700">{departments.find(item => item.id === user.departmentId)?.title}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{moment(user.expiredPwd).format('DD.MM.YYYY')}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{moment(user.createdAt).format('DD.MM.YYYY H:m:s')}</td>
                            <td className="p-1 text-sm border border-blue-gray-700">{moment(user.updatedAt).format('DD.MM.YYYY H:m:s')}</td>
                            <td className="p-1 text-sm border border-blue-gray-700 flex justify-center">
                                <fetcher.Form method="post">
                                    <input type="hidden" name="id" defaultValue={user?.id ? user.id : ''} />
                                    <CustomButton
                                        className="bg-red-500 hover:shadow-red-100"
                                        disabled={isDeleting}
                                        onClick={handleDelete}
                                        type="submit"
                                        name="_action"
                                        value="deleteUser"
                                    >
                                        {isDeleting
                                            ? <>
                                                <Spinner className="w-4 h-4" />
                                                Deleting...
                                            </>
                                            : <>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                                Delete
                                            </>}
                                    </CustomButton>
                                </fetcher.Form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
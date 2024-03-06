import { Department, Prisma, Role } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import api from "~/components/api";
import UsersView from "~/components/UI/widgets/users/view";

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
            isActive: Boolean(values.isActive),
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
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'updateUser') {
        const userId = Number(values.id)
        const updateUser = {
            id: Number(values.id),
            isActive: Boolean(values.isActive),
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
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    if (_action === 'deleteUser') {
        const userId = Number(values.id)
        try {
            await api.users.deleteUser(userId)
            return redirect("/dashboard/users")
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                errors = e.message
            }
        }
    }
    return json({ errors })
}

export default function Users() {
    const { user, users, departments, isNew } = useLoaderData<typeof loader>()
    const data = useActionData<typeof action>()

    return (
        <UsersView
            isNew={isNew ? true : false}
            user={user}
            users={users}
            departments={departments}
            errors={data?.errors ? data.errors : undefined}
        />
    )
}
import moment from "moment"
import { Department, User } from "@prisma/client"
import { useNavigate } from "@remix-run/react"
import ButtonDeleteUser from "./btn_delete_user"
import { useTranslation } from "react-i18next"

type UsersTableProps = {
    users: User[],
    departments: Department[]
}

export default function UsersTable({ users, departments }: UsersTableProps) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <table
            className="border-2 border-blue-gray-700 w-full"
        >
            <thead
                className="bg-blue-gray-400 text-white text-center"
            >
                <tr>
                    <th className="p-1 text-sm border border-blue-gray-700">#</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('is_active')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('login')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('first_name')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('last_name')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('middle_name')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('department')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('expired_password')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('created')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700">{t('updated')}</th>
                    <th className="p-1 text-sm border border-blue-gray-700"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User, index: number) => (
                    <tr
                        key={user.id}
                    >
                        <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                        <td
                            className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                            onClick={() => navigate(`/dashboard/users?userId=${user.id}`)}>
                            {user.isActive ? t('active') : t('not_active')}
                        </td>
                        <td
                            className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                            onClick={() => navigate(`/dashboard/users?userId=${user.id}`)}
                        >
                            {user.login}
                        </td>
                        <td
                            className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                            onClick={() => navigate(`/dashboard/users?userId=${user.id}`)}
                        >
                            {user.firstName}
                        </td>
                        <td
                            className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                            onClick={() => navigate(`/dashboard/users?userId=${user.id}`)}
                        >
                            {user.lastName}
                        </td>
                        <td
                            className="p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline"
                            onClick={() => navigate(`/dashboard/users?userId=${user.id}`)}
                        >
                            {user.middleName}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-700">
                            {departments.find(item => item.id === user.departmentId)?.title}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-700">
                            {moment(user.expiredPwd).format('DD.MM.YYYY')}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-700">
                            {moment(user.createdAt).format('DD.MM.YYYY H:m:s')}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-700">
                            {moment(user.updatedAt).format('DD.MM.YYYY H:m:s')}
                        </td>
                        <td className="p-1 text-sm border border-blue-gray-700 flex justify-center">
                            <ButtonDeleteUser userId={user.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
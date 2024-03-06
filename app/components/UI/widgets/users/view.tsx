import { Department, User } from "@prisma/client";
import UserDialog from "./user_dialog";
import ButtonNewUser from "./btn_new_user";
import Panel from "../../elements/panel";
import UsersTable from "./users_table";
import ErrorMessage from "../../elements/error_message";

type UserViewProps = {
    isNew: boolean,
    user: User | null,
    users: User[],
    departments: Department[],
    errors: string | undefined
}

export default function UsersView({
    isNew,
    user,
    users,
    departments,
    errors,
}: UserViewProps) {
    return (
        <div className="mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]">
            <ErrorMessage errors={errors} />
            <UserDialog
                isNew={isNew}
                user={user ? user as User : null}
                departments={departments}
                errors={errors}
            />
            <Panel className="h-full overflow-auto">
                <div className="mb-2 flex justify-between py-2 px-2 border border-gray-900">
                    <div
                        className="flex items-center gap-3"
                    >
                        <ButtonNewUser />
                    </div>
                </div>
                <UsersTable
                    users={users}
                    departments={departments}
                />
            </Panel>
        </div>
    )
}
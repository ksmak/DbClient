import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ErrorMessage from "../../elements/error_message";
import Buttons from "./buttons/buttons";
import DialogFindResult from "./dlg_find_result";
import RecNavigator from "./rec_navigator";
import Panel from "../../elements/panel";
import EditForm from "./edit_form/edit_form";
import DialogMultyGroup from "./dlg_multy_group";
import { Group, InputField } from "@prisma/client";

type EnterDataViewProps = {
    errors?: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    docs: { formId?: number, ids?: number[] },
    userId: number,
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>,
    formRef: any,
    inputForm: any,
    state: string | null,
    dictionaries: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
    group: Group & { fields: InputField[] } | null,
}

export default function EnterDataView({
    errors,
    open,
    setOpen,
    docs,
    userId,
    current,
    setCurrent,
    formRef,
    inputForm,
    state,
    dictionaries,
    doc,
    setDoc,
    group,
}: EnterDataViewProps) {
    const [openGroup, setOpenGroup] = useState(false)

    useEffect(() => {
        if (state === 'edit' && group) {
            setOpenGroup(true)
        }
    }, [group])

    return (
        <div className="h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5">
            <ErrorMessage errors={errors} />
            <DialogFindResult
                open={open}
                setOpen={setOpen}
                docs={docs}
            />
            <DialogMultyGroup
                state={state}
                open={openGroup}
                setOpen={setOpenGroup}
                group={group}
                dictionaries={dictionaries}
                doc={doc}
                setDoc={setDoc}
            />
            <Panel className="h-full overflow-auto">
                <div className="py-2 flex justify-between items-center">
                    <Buttons userId={userId} inputFormId={inputForm.id} doc={doc} state={state} />
                    <RecNavigator docs={docs} current={current} setCurrent={setCurrent} />
                </div>
                <EditForm
                    formRef={formRef}
                    userId={userId}
                    inputForm={inputForm}
                    state={state}
                    dictionaries={dictionaries}
                    doc={doc}
                    setDoc={setDoc}
                />
            </Panel>
        </div>
    )
}
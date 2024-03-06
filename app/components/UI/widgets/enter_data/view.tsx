import { Dispatch, SetStateAction } from "react";
import ErrorMessage from "../../elements/error_message";
import Buttons from "./buttons/buttons";
import DialogFindResult from "./dlg_find_result";
import RecNavigator from "./rec_navigator";
import Panel from "../../elements/panel";
import EditForm from "./edit_form/edit_form";

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
    setDoc
}: EnterDataViewProps) {
    return (
        <div className="h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5">
            <ErrorMessage errors={errors} />
            <DialogFindResult
                open={open}
                setOpen={setOpen}
                docs={docs}
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
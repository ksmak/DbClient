import { Form, useLocation } from "@remix-run/react";
import SingleGroup from "./single_group";
import MultyGroup from "./multy_group";
import { Dispatch, SetStateAction } from "react";

type EditFormProps = {
    formRef: any,
    userId: number,
    inputForm: any,
    state: string | null,
    dictionaries: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
}

export default function EditForm({
    formRef,
    userId,
    inputForm,
    state,
    dictionaries,
    doc,
    setDoc
}: EditFormProps) {
    const location = useLocation()

    return (
        <Form
            key={location.key}
            id="documentForm"
            method="post"
            ref={formRef}
        >
            <input type="hidden" name="_user" value={userId} />
            <input type="hidden" name="_inputFormId" value={inputForm.id} />
            <input type="hidden" name="_id" value={doc.id ? doc.id : ''} />
            {inputForm?.groups && inputForm.groups.map((group: any) => (
                <div key={group.id} className="mb-2">
                    <h2 className="col-span-3 bg-orange-700 text-white font-bold text-sm p-1 pl-4">{group.title}</h2>
                    {!group.isMulty
                        ? <SingleGroup
                            state={state}
                            dictionaries={dictionaries}
                            group={group}
                            doc={doc}
                            setDoc={setDoc}
                        />
                        : <MultyGroup
                            state={state}
                            dictionaries={dictionaries}
                            group={group}
                            doc={doc}
                            setDoc={setDoc}
                        />}
                </div>
            ))}
        </Form>
    )
}
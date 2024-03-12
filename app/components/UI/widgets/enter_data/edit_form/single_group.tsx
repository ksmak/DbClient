import { InputField } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"
import Field from "./field_single"

type SingleGroupProps = {
    state: string | null,
    dictionaries: any,
    group: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
}
export default function SingleGroup({ state, dictionaries, group, doc, setDoc }: SingleGroupProps) {
    return (
        <div className="border p-1 grid grid-cols-3 gap-1">
            {group?.fields && group.fields.map((fld: InputField) => (
                <Field
                    key={fld.id}
                    state={state}
                    dictionaries={dictionaries}
                    recordIndex={0}
                    doc={doc}
                    setDoc={setDoc}
                    fld={fld}
                />
            ))}
        </div>
    )
}
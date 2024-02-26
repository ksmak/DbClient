import { InputField } from "@prisma/client"
import { Dispatch, MouseEvent, SetStateAction } from "react"
import Field from "./field"
import CustomButton from "~/ui/elements/custom_button"

type MultyGroupProps = {
    state: string | null,
    dictionaries: any,
    group: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
}
export default function MultyGroup({ state, dictionaries, group, doc, setDoc }: MultyGroupProps) {
    const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let d = { ...doc }
        const tbl = `tbl_${group.id}`
        let fields: any = { id: null, sid: null, lst: 0 }
        for (const field of group.fields) {
            fields[`f${field.id}`] = ''
        }
        d[tbl].push(fields)
        setDoc(d)
    }

    const handleDelete = (e: MouseEvent<HTMLButtonElement>, recordIndex: number) => {
        e.preventDefault()
        const response = confirm(
            "Please confirm you want to delete this record."
        )
        if (response) {
            let d = { ...doc }
            const tbl = `tbl_${group.id}`
            d[tbl].splice([recordIndex], 1)
            setDoc(d)
        }
    }

    return (
        <div className="border p-1">
            <div
                className="flex justify-end p-1"
            >
                {state === 'edit'
                    ? <CustomButton
                        className="bg-blue-gray-500 hover:shadow-blue-gray-100"
                        onClick={handleAdd}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add
                    </CustomButton>
                    : null}
            </div>
            <table
                className="border border-blue-gray-700"
            >
                <thead
                    className="bg-blue-gray-400 text-white text-center"
                >
                    <tr>
                        <th className="p-1 text-sm border border-blue-gray-700">#</th>
                        {group?.fields && group.fields.map((fld: InputField) => (
                            <th key={fld.id} className="p-1 text-sm border border-blue-gray-700">
                                {fld.title}
                            </th>
                        ))}
                        <th className="p-1 text-sm border border-blue-gray-700">#</th>
                    </tr>
                </thead>
                <tbody>
                    {doc[`tbl_${group.id}`].map((record: any, index: number) => (
                        <tr key={index} >
                            <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                            {group?.fields && group.fields.map((fld: InputField) => (
                                <td key={fld.id} className="p-1 text-sm border border-blue-gray-700">
                                    <Field
                                        state={state}
                                        dictionaries={dictionaries}
                                        recordIndex={index}
                                        doc={doc}
                                        setDoc={setDoc}
                                        fld={fld}
                                    />
                                </td>
                            ))}
                            {state === "edit" && index !== 0
                                ? <td className="p-1 text-sm border border-blue-gray-700">
                                    <CustomButton
                                        className="bg-red-500 hover:shadow-red-100"
                                        onClick={(e) => handleDelete(e, index)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                        Delete
                                    </CustomButton>
                                </td>
                                : null}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
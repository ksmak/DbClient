import { InputField } from "@prisma/client"
import { Dispatch, MouseEvent, SetStateAction } from "react"
import CustomButton from "~/components/UI/elements/custom_button"
import { useTranslation } from "react-i18next"
import { useNavigate } from "@remix-run/react"

type MultyGroupProps = {
    state: string | null,
    dictionaries: any,
    group: any,
    doc: any,
    setDoc: Dispatch<SetStateAction<any>>,
}
export default function MultyGroup({ state, dictionaries, group, doc, setDoc }: MultyGroupProps) {
    const { i18n, t } = useTranslation()
    const navigate = useNavigate()
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
        <div className="border p-1 flex flex-col gap-3">
            <div className="mt-2">
                {state === 'edit'
                    ? <CustomButton
                        className="bg-primary hover:shadow-primary_shadow"
                        onClick={() => navigate(`/dashboard/enter_data/${doc.formId}?state=edit&groupId=${group.id}`)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        {t('add')}
                    </CustomButton>
                    : null}
            </div>
            <table
                className="border border-blue-gray-700"
            >
                <thead
                    className="bg-primary text-white text-center"
                >
                    <tr>
                        <th className="p-1 text-sm border border-blue-gray-700">#</th>
                        {group?.fields && group.fields.map((fld: InputField) => (
                            <th key={fld.id} className="p-1 text-sm border border-blue-gray-700">
                                {fld[`title_${i18n.language}` as keyof typeof fld]}
                            </th>
                        ))}
                        <th className="p-1 text-sm border border-blue-gray-700">#</th>
                    </tr>
                </thead>
                <tbody>
                    {doc[`tbl_${group.id}`].map((record: any, index: number) => (
                        <tr key={index} >
                            <td className="p-1 text-sm border border-blue-gray-700">{index + 1}</td>
                            {group?.fields && group.fields.map((fld: InputField) => {
                                let val = doc[`tbl_${group.id}`][index][`fld_${fld.id}`]
                                return (
                                    <th key={fld.id} className="p-1 text-sm border border-blue-gray-700">
                                        {val}
                                    </th>
                                )
                            })}
                            <td className="p-1 text-sm border border-blue-gray-700">{record.value}</td>
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
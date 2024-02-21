import { Dict } from "~/routes/forms.$formId"

type FormInputProps = {
    cls: string,
    fieldType: string,
    fieldName: string,
    title: string,
    value: string,
    required: boolean,
    disabled: boolean
    size: number
    maxLength: number,
    step?: string,
    isSelect?: boolean,
    options?: Dict
}
export default function FormInput({ cls, fieldType, fieldName, title, value, required, disabled, size, maxLength, step, isSelect = false, options }: FormInputProps) {
    return (
        <div
            className={`p-1 flex items-baseline ${cls}`}
        >
            <label
                className="font-bold text-sm mr-1 min-w-40"
                htmlFor={fieldName}
            >
                {title}
            </label>
            <div className="flex flex-col justify-between">
                {isSelect
                    ? <select
                        className="font-mono text-sm border-2 p-1 focus:outline-blue-gray-500 bg-white"
                        id={fieldName}
                        name={fieldName}
                        defaultValue={value}
                        required={required}
                        disabled={disabled}
                    >
                        <option>-</option>
                        {options?.data.map((item: any) => (
                            <option key={item.id} value={item.id}>{item.title}</option>
                        ))}
                    </select>
                    : <input
                        className="font-mono text-sm border-2 p-1 focus:outline-blue-gray-500"
                        id={fieldName}
                        type={fieldType}
                        name={fieldName}
                        defaultValue={value}
                        required={required}
                        disabled={disabled}
                        size={size}
                        maxLength={maxLength}
                        step={step}
                    />}
                <span className="text-sm text-red-500 h-4"></span>
            </div>
        </div>
    )
}
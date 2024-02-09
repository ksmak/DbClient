type InputFieldProps = {
    type: string,
    name: string,
    title: string,
    value: any,
    required: boolean
}

export default function InputField({ type, name, title, value, required }: InputFieldProps) {
    return (
        <div
            className="flex flex-col gap-1"
        >
            <label
                className="text-sm font-bold text-slate-700"
                htmlFor={name}
            >
                {title}
            </label>
            <input
                id={name}
                type={type}
                defaultValue={value}
                aria-label={name}
                name={name}
                required={required}
            />
        </div >
    )
}
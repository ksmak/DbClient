type InputProps = {
    type: string,
    name: string,
    title: string,
    value: any,
    required: boolean,
    readonly?: boolean,
    onChange?: () => void
}

export default function Input({ type, name, title, value, required, readonly, onChange }: InputProps) {
    return (
        <div
            className="flex flex-col gap-1 w-fit"
        >
            <label
                className="text-sm font-bold text-slate-700"
                htmlFor={name}
            >
                {title}
            </label>
            <input
                className="font-mono"
                id={name}
                type={type}
                defaultValue={value}
                aria-label={name}
                name={name}
                required={required}
                readOnly={readonly}
                onChange={onChange}
                size={5}
                maxLength={10}
            />
        </div >
    )
}
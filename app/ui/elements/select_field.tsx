type SelectFieldProps = {
    name: string,
    title: string,
    options: { title: string, id: string | number }[],
    value: any,
    required: boolean
}

export default function SelectField({ name, title, options, value, required }: SelectFieldProps) {
    return (
        <div
            className="flex flex-col gap-1"
        >
            <label
                className="block text-sm font-bold text-slate-700"
                htmlFor={name}
            >
                {title}
            </label>
            <select
                id={name}
                defaultValue={value}
                aria-label={name}
                name={name}
                required={required}
            >
                <option>-</option>
                {options.map((item) => (
                    <option key={item.id} value={item.id}>{item.title}</option>
                ))}
            </select>
        </div>
    )
}
import { useState } from "react"

type CheckFieldProps = {
    type: string,
    name: string,
    title: string,
    value: boolean,
    required: boolean
}

export default function CheckField({ type, name, title, value, required }: CheckFieldProps) {
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
                defaultChecked={value}
                aria-label={name}
                name={name}
                required={required}
            />
        </div >
    )
}
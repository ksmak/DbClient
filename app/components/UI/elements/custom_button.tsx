import { ReactNode, ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children?: ReactNode,
}

export default function CustomButton({ className, children, ...props }: CustomButtonProps) {
    return (
        <button {...props}
            className={`text-white text-xs py-1.5 px-3.5 flex items-center gap-2 rounded-md hover:cursor-pointer hover:shadow-lg font-semibold uppercase ${className}`}
        >
            {children}
        </button>
    );
};

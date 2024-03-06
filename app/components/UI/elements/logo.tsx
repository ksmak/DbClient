import { Link } from "@remix-run/react";

const Logo = () => {
    return (
        <Link to="/" className="flex gap-3">
            < img
                className="h-14 object-cover object-center"
                src="/logo.png"
                alt="logo"
            />
            <span className="font-bold text-lg self-center pt-1 text-blue-gray-800">
                Db Creator
            </span>
        </Link >
    )
}

export default Logo;
"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },

]
function Nav() {
    const pathname=usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname ?"text-accent border-accent capitalize border-b-2":"capitalize font-medium hover:text-accent "}`}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav
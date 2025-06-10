"use client";

import { SheetContent, Sheet, SheetTrigger } from "./ui/sheet";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";


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
function MobileNav() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                {/* this is the button */}
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl ">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Moha <span className="text-accent">.</span></h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${pathname === link.path ? "text-accent border-b-2 border-accent " : "hover:text-accent hover:leading-4"}text-xl capitalize  transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
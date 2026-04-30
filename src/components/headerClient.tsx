'use client'

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { INavLinks } from "./Header";

function ContactButton({ phoneNumber }: { phoneNumber: string }) {
    return (
        <button className='button-contact flex items-center gap-2'>
            <Phone strokeWidth={2} size={16} />
            <span className='text-sm'>
                {phoneNumber}
            </span>
        </button>
    )
}

export function HeaderClient({ navLinks, phoneNumber, isMobileMenuOpen, setIsMobileMenuOpen }: { navLinks: INavLinks[], phoneNumber: string, isMobileMenuOpen: any, setIsMobileMenuOpen: any }) {
    const pathname = usePathname();

    return (<>
        <nav className="flex flex-wrap gap-3 items-center">
            {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (

                    <Link
                        key={item.href}
                        href={item.href}

                    >

                        {(item.type === 'button') ? (<ContactButton phoneNumber={phoneNumber} />) : <span className={`${isActive ? "menu-active" : ""} menu dark:hover:text-white transition-colors rounded-[25px] px-3 py-2`}>{item.label}</span>}

                    </Link>
                )
            })}
        </nav>
        <div className={`flex lg:hidden items-center gap-4`}>
            <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </div>
        </div>
    </>);
}

export function MobileMenu({ navLinks, phoneNumber }: { navLinks: INavLinks[], phoneNumber: string }) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (<div className={`mobile-menu block lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900`}>
        <nav className="flex flex-col gap-4 py-4 px-6">
            {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${pathname === item.href ? "menu-active" : ""} menu p-1 dark:hover:text-white transition-colors`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {(item.type === 'button') ? (<span style={{ float: "right" }}><ContactButton phoneNumber={phoneNumber} /></span>) : <span className={`${isActive ? "menu-active" : ""} menu dark:hover:text-white transition-colors rounded-full p-2`}>{item.label}</span>}
                    </Link>
                )
            })}
        </nav>
    </div>)
} 
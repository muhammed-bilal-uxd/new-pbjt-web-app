'use client'

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { INavLinks } from "./Header";

function ContactButton({ phoneNumber }: { phoneNumber: string }) {
    return (
        <button className='button-contact flex items-center gap-2'>
            {/* <Phone strokeWidth={2} size={16} /> */}
            <span className='text-sm'>
                {phoneNumber}
                {/* Contact */}
            </span>
        </button>
    )
}

export function HeaderClient({ navLinks, phoneNumber }: { navLinks: INavLinks[], phoneNumber: string }) {
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

                        {(item.type === 'button') ? (<ContactButton phoneNumber={phoneNumber} />) : <span className={`${isActive ? "menu-active" : ""} menu dark:hover:text-white transition-colors rounded-[25px] px-3 py-2`}>
                            <span className="pbjt_links_label">{item.label}</span>
                            <span className="pbjt__border-bottom"></span>
                        </span>}

                    </Link>
                )
            })}
        </nav>
    </>);
}

export function MobileMenu({ navLinks, phoneNumber }: { navLinks: INavLinks[], phoneNumber: string }) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="flex items-center">
            <div className="flex items-center gap-2">
                <span style={{ float: "right" }}><ContactButton phoneNumber={phoneNumber} /></span>
                <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="cursor-pointer">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className={`mobile-menu absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800`}>
                    <nav className="flex flex-col py-4 px-6">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${pathname === item.href ? "menu-active" : ""} menu p-1 dark:hover:text-white transition-colors`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {(item.type === 'button') ? "" : <span className={`${isActive ? "menu-active" : ""} menu dark:hover:text-white transition-colors rounded-full p-2`}>{item.label}</span>}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </div>
    )
} 
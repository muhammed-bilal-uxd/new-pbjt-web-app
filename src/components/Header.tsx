"use client";

import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import "./header.css"
import { usePathname } from 'next/navigation';

const phoneNumber = "+1 (555) 123-4567";

const navLinks = [
  { label: "In practice", href: "/" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Impact Proposition", href: "/impact-proposition" },
  { label: "Framework", href: "/framework" },
  { label: "Food menu", href: "/food-menu" },
  { label: "Methodology", href: "/methodology" },
  { label: "Glossary", href: "/glossary" },
  { label: "Contact", href: "/contact", type: "button" },
];

function Logo() {
  return (
    <Link href="/">
      <Image
        className='site-logo'
        src="/images/site/logo.png"
        alt="Logo"
        width={120}
        height={120}
        priority
      />
    </Link>
  )
}

function ContactButton() {
  return (
    <button className='button-contact flex items-center gap-2'>
      <Phone strokeWidth={2} size={16} />
      <span className='text-sm'>
        {phoneNumber}
      </span>
    </button>
  )
}

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-3 items-center">
      {navLinks.map((item) => {
        const isActive = pathname === item.href;

        return (

          <Link
            key={item.href}
            href={item.href}

          >

            {(item.type === 'button') ? (<ContactButton />) : <span className={`${isActive ? "menu-active" : ""} menu dark:hover:text-white transition-colors rounded-[25px] px-3 py-2`}>{item.label}</span>}

          </Link>
        )
      })}
    </nav>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="header-content container-fluid mx-auto flex items-center justify-between px-6 py-2">
        <div className="flex items-center justify-between gap-6 w-full">
          <Logo />
          <nav className={`hidden lg:flex gap-6 items-center`}>
            <Navbar />
          </nav>
        </div>
        <div className={`flex lg:hidden items-center gap-4`}>
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`mobile-menu block lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900`}>
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
                  {(item.type === 'button') ? (<span style={{ float: "right" }}><ContactButton /></span>) : <span className={`${isActive ? "menu-active" : ""} menu dark:hover:text-white transition-colors rounded-full p-2`}>{item.label}</span>}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

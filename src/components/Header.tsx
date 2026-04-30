"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import "./header.css"
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: "In practice", href: "/" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Impact Proposition", href: "/impact-proposition" },
  { label: "Framework", href: "/framework" },
  { label: "Food menu", href: "/food-menu" },
  { label: "Methodology", href: "/methodology" },
  { label: "Glossary", href: "/glossary" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/site/logo.png"
        alt="Logo"
        width={120}
        height={120}
        priority
      />
    </Link>
  )
}

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-3">
      {navLinks.map((item) => {
        const isActive = pathname === item.href;

        return (

          <Link
            key={item.href}
            href={item.href}
            className={`${isActive ? "menu-active" : ""} menu dark:hover:text-white transition-colors rounded-full p-2`}
          >
            {item.label}
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
      <div className="container-fluid mx-auto flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className={`hidden lg:flex gap-6`}>
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
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${pathname === item.href ? "menu-active" : ""} menu p-1 dark:hover:text-white transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';

import "./header.css"
import { HeaderClient, MobileMenu } from './headerClient';

const phoneNumber = "+1 (555) 123-4567";

const navLinks: INavLinks[] = [
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

export interface INavLinks { label: string, href: string, type?: string }

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

export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="header-content container-fluid mx-auto flex items-center justify-between px-6 py-2">
        <div className="flex items-center justify-between gap-6 w-full">
          <Logo />
          <nav className={`hidden lg:flex gap-6 items-center`}>
            <HeaderClient navLinks={navLinks} phoneNumber={phoneNumber} />
          </nav>
        </div>

      </div>

      <MobileMenu navLinks={navLinks} phoneNumber={phoneNumber} />
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';

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

const footerNavLinks = [
  { label: "Partnerships", href: "/partnerships" },
  { label: "Funding", href: "/funding" },
  { label: "Contact", href: "/contact" },
];

function FooterNavLinks() {
  return (
    <nav className="flex gap-4">
      {footerNavLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="footer-link text-sm text-white-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-950 dark:border-gray-800">
      <div className="container-fluid mx-auto px-6 py-8 ">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Logo />
          <nav className="flex gap-4">
            <FooterNavLinks />
          </nav>
        </div>
      </div>
    </footer>
  );
}

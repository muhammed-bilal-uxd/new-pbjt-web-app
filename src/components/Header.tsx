import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";
import { HeaderClient, MobileMenu } from "./headerClient";
import { navLinks } from "@/data/menu";

const phoneNumber = "+1 (555) 123-4567";

function Logo() {
  return (
    <Link href="/">
      <Image
        className={styles.siteLogo}
        src="/images/site/logo.png"
        alt="Logo"
        width={120}
        height={120}
        priority
      />
    </Link>
  );
}

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md"
      id="header-section"
    >
      <div
        className={`${styles.headerContent} container-fluid mx-auto flex items-center justify-between px-6 py-2`}
      >
        <div className="hidden min-[1250px]:flex items-center justify-between gap-6 w-full">
          <Logo />
          <HeaderClient navLinks={navLinks} phoneNumber={phoneNumber} />
        </div>
        <div
          className={
            "flex min-[1250px]:hidden items-center justify-between gap-6 w-full"
          }
        >
          <Logo />
          <div>
            <MobileMenu navLinks={navLinks} phoneNumber={phoneNumber} />
          </div>
        </div>
      </div>
    </header>
  );
}

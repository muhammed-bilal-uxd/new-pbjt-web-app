"use client";

import { INavLinks } from "@/interface/common";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./header.module.css";

function ContactButton({ phoneNumber }: { phoneNumber: string }) {
  return (
    <button className={`${styles.buttonContact} flex items-center gap-2`}>
      <span className="text-sm">{phoneNumber}</span>
    </button>
  );
}

export function HeaderClient({
  navLinks,
  phoneNumber,
}: {
  navLinks: INavLinks[];
  phoneNumber: string;
}) {
  const pathname = usePathname();

  return (
    <nav className={styles.navRow}>
      {navLinks.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link key={item.href} href={item.href}>
            <span
              className={`${styles.menu} ${isActive ? styles.menuActive : ""} transition-colors rounded-[25px] px-1 py-2`}
            >
              <span className={styles.menuLabel}>
                <span>{item.label}</span>
                <span className={styles.borderBottom}></span>
              </span>
            </span>
          </Link>
        );
      })}

      {/* <ContactButton phoneNumber={phoneNumber} /> */}
    </nav>
  );
}

export function MobileMenu({
  navLinks,
  phoneNumber,
}: {
  navLinks: INavLinks[];
  phoneNumber: string;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.mobileMenuWrapper}>
      <div className={styles.mobileMenuControls}>
        {/* <span className={styles.mobileContactWrap}><ContactButton phoneNumber={phoneNumber} /></span> */}
        <div
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.menuToggle}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`${styles.mobileMenuPanel} absolute left-0 w-full bg-white border-t border-gray-200`}
        >
          <nav className="flex flex-col py-4 px-6">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.menu} ${isActive ? styles.mobileMenuLinkActive : ""} p-1 transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.type === "button" ? (
                    ""
                  ) : (
                    <span
                      className={`${styles.menu} ${isActive ? styles.mobileMenuLinkActive : ""} transition-colors rounded-full p-2`}
                    >
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

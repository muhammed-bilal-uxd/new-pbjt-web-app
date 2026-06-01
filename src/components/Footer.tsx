"use client";

import { useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";
import { navLinks } from "@/data/menu";
import { INavLinks } from "@/interface/common";

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.58 1.36h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.09 6.09l.96-1.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const getInvolvedLinks = [
  { label: "Partnerships", href: "#" },
  { label: "Funding", href: "#" },
  { label: "Volunteer", href: "#" },
  { label: "Share Your Story", href: "#" },
  { label: "Work With Us", href: "#" },
];

const resourcesLinks = [
  { label: "Reports & Publications", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Tools & Guides", href: "#" },
  { label: "News & Stories", href: "#" },
  { label: "Events", href: "#" },
];

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} px-6 py-4`}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <Link href="/">
              <div className={styles.footerBrandLogo}>
                <div className={styles.logoBox}>
                  <span className={styles.logoText}>PB</span>
                  <span className={styles.logoText}>JT</span>
                </div>
                <div className={styles.logoName}>
                  <span>PLACE</span>
                  <span>BASED JUST</span>
                  <span>TRANSITION</span>
                </div>
              </div>
            </Link>
            <p className={styles.footerTagline}>
              Building fair, inclusive and sustainable economies from the ground
              up.
            </p>
            <div className={styles.footerDivider} />
            <div className={styles.socials}>
              {[
                { icon: <TwitterIcon />, label: "Twitter" },
                { icon: <LinkedInIcon />, label: "LinkedIn" },
                { icon: <YouTubeIcon />, label: "YouTube" },
                { icon: <InstagramIcon />, label: "Instagram" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={styles.socialBtn}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <span></span>
          <span></span>
          <NavColumn
            className={styles.navColFooter}
            title="EXPLORE"
            links={navLinks}
            expanded={!!expandedSections.explore}
            onToggle={() => toggleSection("explore")}
          />
          {/* <NavColumn
            title="GET INVOLVED"
            links={getInvolvedLinks}
            expanded={!!expandedSections.getinvolved}
            onToggle={() => toggleSection("getinvolved")}
          />
          <NavColumn
            title="RESOURCES"
            links={resourcesLinks}
            expanded={!!expandedSections.resources}
            onToggle={() => toggleSection("resources")}
          /> */}

          <div className={styles.navCol}>
            <button
              type="button"
              className={styles.colHeader}
              onClick={() => toggleSection("contact")}
              aria-expanded={!!expandedSections.contact}
            >
              <span>CONTACT US</span>
              <span
                className={`${styles.mobileChevron} ${expandedSections.contact ? styles.expanded : ""}`}
              >
                <ChevronRightIcon />
              </span>
            </button>
            <div className={styles.headerUnderline} />
            <div
              className={`${styles.colContent} ${expandedSections.contact ? styles.expanded : ""}`}
            >
              <ContactItem icon={<LocationIcon />}>
                <span className={styles.contactText}>
                  C/o Centre for Sustainable Work
                </span>
                <span className={styles.contactText}>
                  First Floor, 123 Community Lane
                </span>
                <span className={styles.contactText}>
                  Bengaluru, Karnataka 560001, India
                </span>
              </ContactItem>
              <div className={styles.contactDivider} />
              <ContactItem icon={<MailIcon />}>
                <a href="mailto:hello@pbjt.org" className={styles.contactLink}>
                  hello@pbjt.org
                </a>
                <span className={styles.contactSubtext}>
                  We aim to respond within 2-3 working days.
                </span>
              </ContactItem>
              <div className={styles.contactDivider} />
              <ContactItem icon={<PhoneIcon />}>
                <a href="tel:+918012345678" className={styles.contactLink}>
                  +91 80 1234 5678
                </a>
                <span className={styles.contactSubtext}>
                  Mon - Fri, 10:00 AM - 6:00 PM IST
                </span>
              </ContactItem>
              <div className={styles.contactDivider} />
              <ContactItem icon={<GlobeIcon />}>
                <a
                  href="https://www.thepbjt.com"
                  className={styles.contactLink}
                >
                  www.thepbjt.com
                </a>
              </ContactItem>
            </div>
          </div>
        </div>

        <div className={`${styles.bottomBar} sm:text-center`}>
          <p className={styles.copyright}>
            &copy; 2024 Place-Based Just Transition. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            {["Privacy Policy", "Terms of Use", "Accessibility"].map(
              (item, i) => (
                <span key={item} className={styles.bottomLinkGroup}>
                  <a href="#" className={styles.bottomLink}>
                    {item}
                  </a>
                  {i < 2 && <span className={styles.bottomSep}>|</span>}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

function NavColumn({
  className,
  title,
  links,
  expanded,
  onToggle,
}: {
  className?: string;
  title: string;
  links: Array<Pick<INavLinks, "label" | "href" | "hasArrow">>;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${styles.navCol} ${className}`}>
      <button
        type="button"
        className={styles.colHeader}
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <span>{title}</span>
        <span
          className={`${styles.mobileChevron} ${expanded ? styles.expanded : ""}`}
        >
          <ChevronRightIcon />
        </span>
      </button>
      <div className={styles.headerUnderline} />
      <ul className={`${styles.navList} ${expanded ? styles.expanded : ""}`}>
        {links.map(({ label, href, hasArrow }) => (
          <li key={label}>
            <a href={href} className={styles.navLink}>
              {label}
              {hasArrow && (
                <span className={styles.arrowIcon}>
                  <ChevronRightIcon />
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.contactItem}>
      <span className={styles.contactIcon}>{icon}</span>
      <div className={styles.contactDetails}>{children}</div>
    </div>
  );
}

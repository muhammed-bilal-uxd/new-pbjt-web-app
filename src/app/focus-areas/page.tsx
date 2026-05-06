"use client";

import Banner from "@/components/banner";
import styles from "./focus-areas.module.css";

const cn = (names: string) =>
  names
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(" ");

/* ------------------------------------------------------------------ */
/*  Inline SVG icons (no external dependency)                          */
/* ------------------------------------------------------------------ */
const UsersIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LinkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ShieldIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const GlobeIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TargetIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const HandsHeartIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
    <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.83-2.82l-4.2 3.92" />
    <path d="m2 15 6 6" />
    <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.7 2.7 0 0 0 18.4 3c-.9 0-1.5.4-2.4 1.2C15.1 3.4 14.5 3 13.6 3A2.7 2.7 0 0 0 11 5.8c0 1.1.7 2 1.5 2.7L16 12Z" />
  </svg>
);

const HandshakeIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);

const ScaleIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

const LeafIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: UsersIcon,
    title: "Understanding Corporate Footprints on Local Lives:",
    desc: "We examine how business operations shape livelihoods, resource use, labour relations, informal economies, and everyday life along with consumption shifts within communities.",
  },
  {
    icon: LinkIcon,
    title: "Brand-Level Value Chain Analysis:",
    desc: "PBJT looks beyond the final product to examine sourcing, production, labour practices, vendor relationships, and waste generation and disposal, revealing hidden actors and risks that are often excluded from sustainability narratives.",
  },
  {
    icon: ShieldIcon,
    title: "Corporate Accountability at the Village Level:",
    desc: "Accountability goes beyond compliance. It includes transparent engagement, grievance mechanisms, ethical sourcing, fair labour conditions, and continuous dialogue with local collectives.",
  },
  {
    icon: GlobeIcon,
    title: "Ground-Level Reflection on BRSR Disclosures:",
    desc: "Global markets, climate policies, and sustainability standards reshape local work and wages. PBJT anticipates these pressures while protecting local resilience. This perspective is increasingly recognised in global policy and investor discussions, including work by the Asia Investor Group on Climate Change on place-sensitive transition risks.",
  },
];

const cards = [
  {
    src: "/images/focus-area/focus-area-01.jpg",
    alt: "Vendors working with goods on the ground",
    caption: "We strengthen the organisations that strengthen communities.",
    icon: UsersIcon,
  },
  {
    src: "/images/focus-area/focus-area-02.jpg",
    alt: "Workers folding garments on a factory floor",
    caption: "From local realities to systemic change, together.",
    icon: TargetIcon,
  },
];

const tags = [
  { icon: HandshakeIcon, label: "Participatory" },
  { icon: ScaleIcon, label: "Accountable" },
  { icon: LeafIcon, label: "Sustainable" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function FocusAreas() {
  return (
    <section className={cn("pbjt")} aria-labelledby="pbjt-heading">
      {/* HERO */}

      <Banner>
        <img
          className="single-cover-banner"
          src="/images/banner/focus-area-banner-01.jpg"
        />

        <div
          className={cn(
            "relative flex gap-2 items-center focus-banner-container",
          )}
        >
          <div className="flex flex-col">
            <p className={cn("hero-text-1")}>Focus Areas:</p>
            <span className={cn("hero-text-2")}>Where</span>
            <span className={cn("hero-text-3")}>PBJT works</span>
          </div>
          <div className={cn("hero-text-4")}>?</div>
        </div>
      </Banner>

      {/* MAIN GRID */}
      <div className={cn("pbjt-main center-content")}>
        <div className={cn("pbjt-main__left")}>
          <span className={cn("pbjt-bar")} aria-hidden="true" />
          <h2 className={cn("pbjt-main__title")}>
            Strengthening Local
            <br />
            Groups and Collectives
          </h2>
          <p className={cn("pbjt-main__lead")}>
            PBJT works through existing collectives, worker groups, vendor
            associations, MSMEs, women&rsquo;s collectives and SHGs, youth and
            farmer groups, recognising them as the foundation of democratic
            participation and accountability.
          </p>

          <ul className={cn("pbjt-features")}>
            {features.map((f) => (
              <li key={f.title} className={cn("pbjt-feature")}>
                <span className={cn("pbjt-feature__icon")} aria-hidden="true">
                  {f.icon}
                </span>
                <div className={cn("pbjt-feature__body")}>
                  <h3 className={cn("pbjt-feature__title")}>{f.title}</h3>
                  <p className={cn("pbjt-feature__desc")}>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={cn("pbjt-main__right")}>
          {cards.map((c) => (
            <figure key={c.caption} className={cn("pbjt-card")}>
              <img src={c.src} alt={c.alt} className={cn("pbjt-card__img")} />
              <figcaption className={cn("pbjt-card__caption")}>
                <span className={cn("pbjt-card__icon")} aria-hidden="true">
                  {c.icon}
                </span>
                <span className={cn("pbjt-card__text")}>{c.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* FOOTER STRIP */}
      <div className="center-content">
        <footer className={cn("pbjt-footer")}>
          <div className={cn("pbjt-footer__message")}>
            <span className={cn("pbjt-footer__icon")} aria-hidden="true">
              {HandsHeartIcon}
            </span>
            <p>
              Our approach ensures that communities are not just consulted, but
              engaged as equal partners in shaping fair, sustainable futures.
            </p>
          </div>
          <ul className={cn("pbjt-tags")}>
            {tags.map((t) => (
              <li key={t.label} className={cn("pbjt-tag")}>
                <span className={cn("pbjt-tag__icon")} aria-hidden="true">
                  {t.icon}
                </span>
                {t.label}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}

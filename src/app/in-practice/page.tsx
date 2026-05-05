"use client";

import { useState } from "react";
import styles from "./in-practice.module.css";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner";

/* ---------- Inline SVG icons (kept in JSX, no CSS) ---------- */
const PeopleIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HandshakeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);

const PlantIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </svg>
);

const BookIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ---------- Component ---------- */
export default function PBJTInPractice() {
  const [email, setEmail] = useState("");

  const insights = [
    {
      icon: <PeopleIcon />,
      text: "How workers define dignity in the midst of transition.",
    },
    {
      icon: <HandshakeIcon />,
      text: "How communities negotiate responsibility with businesses.",
    },
    {
      icon: <PlantIcon />,
      text: "How informal actors adapt sustainability simply to survive.",
    },
  ];

  const locations = [
    {
      name: "Dindigul",
      color: "#f87171",
      href: "dindigal",
      img: "/images/in-practice/dindukal.png",
    },
    {
      name: "Virudhnagar",
      color: "#fbbf24",
      href: "#",
      img: "/images/in-practice/virutunagar.png",
    },
    {
      name: "Krishnagiri",
      color: "#fb923c",
      href: "#",
      img: "/images/in-practice/krisnakiri.png",
    },
    {
      name: "Hosur",
      color: "#f97316",
      href: "#",
      img: "/images/in-practice/osur.png",
    },
  ];

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    // TODO: wire to your API / mailing list
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className={styles.wrapper}>
      {/* ===== Hero Banner ===== */}
      <section className={styles.heroBanner} aria-label="Page heading">
        <div className={styles.heroInner}>
          <span className={styles.heroTop}>What the</span>
          <h1 className={styles.heroMain}>
            Ground<span className={styles.heroQuestion}>?</span>
          </h1>
          <span className={styles.heroBottom}>Teaches Us</span>
        </div>
      </section>

      {/* ===== PBJT In Practice ===== */}
      <section className={styles.practiceSection + " center-content"}>
        {/* <span className={styles.decorCircle} aria-hidden="true" /> */}
        <span className={styles.decorDots} aria-hidden="true" />
        <div className={styles.practiceGrid}>
          <div className={styles.practiceText}>
            <h2 className={styles.practiceTitle}>
              <span className={styles.accentRed}>PBJT</span> In Practice
            </h2>
            <h3 className={styles.practiceSubtitle}>
              What The Ground Teaches Us
            </h3>
            <p className={styles.practiceParagraph}>
              PBJT&apos;s learning emerges through real conversations on
              worksites, in community meetings, and in everyday informal spaces.
              In one cluster, workers told us that &lsquo;green jobs&rsquo;
              meant little without wage security. In another village,
              sustainability investments improved waste management but quietly
              increased unpaid labour for women. These experiences expose the
              gap between intention and lived impact.
            </p>

            <button type="button" className={styles.exploreBtn}>
              Explore Just Transition In Practice
              <ArrowIcon />
            </button>

            <div className={styles.tagline}>
              <span className={styles.taglineIcon}>
                <BookIcon />
              </span>
              <div>
                <p className={styles.taglineTitle}>
                  Real stories. Local voices.
                </p>
                <p className={styles.taglineSub}>
                  Grounded insights from the field.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.practiceImageWrap}>
            {/* <span className={styles.practiceImageBg} aria-hidden="true" /> */}
            <img
              src="/images/in-practice/yellow-flower.png"
              alt="Workers harvesting marigold flowers in a field"
              className="cover-image rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* ===== Field Insights ===== */}
      <section className={styles.insightsSection}>
        <h2 className={styles.insightsTitle}>
          Our Field Insights <span className={styles.accentRed}>Centre</span>{" "}
          On:
        </h2>
        <span className={styles.titleUnderline} aria-hidden="true" />

        <div className={styles.insightsGrid + " center-content"}>
          {insights.map((item, i) => (
            <article key={i} className={styles.insightCard}>
              <span className={styles.insightIconWrap}>{item.icon}</span>
              <p className={styles.insightText}>{item.text}</p>
              <span className={styles.insightDivider} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      {/* ===== Quote ===== */}
      <section className={styles.quoteSection + " center-content"}>
        <div className={styles.quoteImageWrap}>
          <img
            src="/images/in-practice/fun-time.png"
            alt="Two women workers in conversation at a worksite"
            className={styles.quoteImg}
          />
        </div>
        <div className={styles.quoteBox}>
          <span className={styles.quoteOpenMark} aria-hidden="true">
            &ldquo;
          </span>
          <p className={styles.quoteText}>
            These are not polished success stories. They are honest, grounded
            accounts of transition{" "}
            <span className={styles.accentRed}>where power</span>,{" "}
            <span className={styles.accentRed}>vulnerability</span>, and{" "}
            <span className={styles.accentRed}>hope</span> meet.
          </p>
          <span className={styles.quoteCloseMark} aria-hidden="true">
            &rdquo;
          </span>
        </div>
      </section>

      {/* ===== Location Selector ===== */}
      <section className={"center-content"}>
        <div className={styles.locationSection}>
          <div className={styles.locationLeft}>
            <div className={styles.locationHeader}>
              <span className={styles.locationPin}>
                <MapPinIcon />
              </span>
              <div>
                <h3 className={styles.locationTitle}>Choose A Location</h3>
                <p className={styles.locationSub}>
                  Select a district to explore local stories and changes.
                </p>
              </div>
            </div>

            <div className={styles.locationGrid}>
              {locations.map((loc) => (
                <Link href={loc.href} key={loc.name}>
                  <button type="button" className={styles.locationCard}>
                    <span
                      className={styles.locationMapIcon}
                      // style={{ backgroundColor: loc.color }}
                      aria-hidden="true"
                    >
                      <img
                        src={loc?.img}
                        alt=""
                        className={"relative h-full w-full"}
                      />
                    </span>

                    <span className={styles.locationName}>{loc.name}</span>
                    <span className={styles.locationArrow} aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.tnMapWrap} aria-hidden="true">
            <img
              src="/images/in-practice/tn.png"
              alt="Tamil Nadu Map"
              style={{ width: 260, height: "auto", maxWidth: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <span className={styles.newsletterIconWrap}>
            <MailIcon />
          </span>
          <div className={styles.newsletterText}>
            <h3 className={styles.newsletterTitle}>Stay connected with PBJT</h3>
            <p className={styles.newsletterSub}>
              Subscribe to our newsletter to stay updated on our latest
              research, stories, and opportunities.
            </p>
          </div>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.newsletterInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className={styles.newsletterBtn}>
              Subscribe <ArrowIcon />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

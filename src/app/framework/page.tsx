// Framework.jsx
// Drop the three images into /public/images/ with these names,
// or change the src values below.
//   /public/images/hero-worker.jpg
//   /public/images/recycler.jpg
//   /public/images/farmer.jpg

import Banner from "@/components/banner";
import styles from "./framework.module.css";

const cn = (names: string) =>
  names
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(" ");

export default function Framework() {
  return (
    <div className={cn("pbjt framework-page")}>
      {/* ============ HERO ============ */}

      <Banner
        title="PBJT - FRAMEWORK Principles of Place-Based Just Transition"
        imgUrl="/images/impact-proposition/hero-center.jpg"
        textColor="#ffffff"
      />

      {/* ============ TOOLS ============ */}
      <section className={cn("pbjt-tools")}>
        <div className={cn("pbjt-tools__text")}>
          <span className={cn("pbjt-bar")} aria-hidden="true" />
          <p className={cn("pbjt-tools__lead")}>
            To make Place-Based Transition actionable, PBJT develops and uses
            simple, practical tools that communities and practitioners can
            actually use.
          </p>

          <div className={cn("pbjt-item")}>
            <div className={cn("pbjt-icon")}>
              <IconNetwork />
            </div>
            <div>
              <h3 className={cn("pbjt-item__heading")}>These include:</h3>
              <p>
                Value Chain Mapping Tools that identify informal and last-tier
                actors, Community Impact Reflection Guides to assess
                environmental and social change, Worker-Led Audit Formats that
                reflect lived labour conditions and Collective Dialogue
                Templates for grievance redressal and negotiation.
              </p>
            </div>
          </div>

          <div className={cn("pbjt-item")}>
            <div className={cn("pbjt-icon")}>
              <IconQuestion />
            </div>
            <div>
              <h3 className={cn("pbjt-item__heading")}>
                Each tool is designed to support discussion, not compliance.
              </h3>
              <p>
                They help communities ask better questions, and help businesses
                see what is usually invisible.
              </p>
              <p>Our approach prioritises strengthening existing capacities.</p>
            </div>
          </div>
        </div>

        <div className={cn("pbjt-tools__image")}>
          <img src="/images/focus-area/img171.jpg" alt="Informal worker collecting recyclables" />
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section className={cn("pbjt-principles")}>
        <div className={cn("pbjt-principles__card")}>
          <div className={cn("pbjt-item")}>
            <div className={cn("pbjt-icon")}>
              <IconPeople />
            </div>
            <div>
              <h3 className={cn("pbjt-item__heading")}>
                Embedded in Business Responsibility:
              </h3>
              <p>
                A just transition must be part of everyday business
                responsibility. All economic actors—workers, vendors, MSMEs,
                and communities are part of the business ecosystem, not just
                large firms.
              </p>
              <p>
                Businesses have responsibilities toward the social and
                environmental wellbeing of the places they operate in.
                Transition efforts must strengthen existing livelihoods rather
                than displacing or marginalising them. Responsibility moves
                beyond compliance to active participation in community
                wellbeing.
              </p>
            </div>
          </div>

          <hr className={cn("pbjt-divider")} />

          <div className={cn("pbjt-item")}>
            <div className={cn("pbjt-icon")}>
              <IconHands />
            </div>
            <div>
              <h3 className={cn("pbjt-item__heading")}>
                Collectivisation and Collective Agency:
              </h3>
              <p>
                PBJT is built on collective strength. Transition processes are
                more democratic, inclusive, and sustainable when communities
                act together rather than as isolated individuals.
              </p>
              <p>
                Worker groups, community collectives, and local associations
                enable shared decision-making, collective bargaining, and
                problem-solving, reducing vulnerability and increasing agency.
              </p>
            </div>
          </div>
        </div>

        <div className={cn("pbjt-principles__image")}>
          <img src="/images/framework/img137.jpg" alt="Farmer in field" />
        </div>
      </section>

      {/* ============ LAST TIER ============ */}
      <section className={cn("pbjt-tiers")}>
        <div className={cn("pbjt-tiers__head")}>
          <h2 className={cn("pbjt-tiers__title")}>Starting from the Last Tier</h2>
          <span className={cn("pbjt-bar pbjt-bar--center")} aria-hidden="true" />
        </div>

        <div className={cn("pbjt-tiers__grid")}>
          <article className={cn("pbjt-tiers__card")}>
            <div className={cn("pbjt-icon")}>
              <IconPeople />
            </div>
            <h3 className={cn("pbjt-tiers__heading")}>
              PBJT prioritises those most affected
            </h3>
            <p>
              informal workers, small vendors, marginalised groups, and
              vulnerable communities. Solutions are designed by starting with
              local realities, addressing unequal power relations, and
              strengthening community capacity to shape their own transition
              pathways.
            </p>
          </article>

          <article className={cn("pbjt-tiers__card")}>
            <div className={cn("pbjt-icon")}>
              <IconPin />
            </div>
            <h3 className={cn("pbjt-tiers__heading")}>Place-Based and Context-Driven</h3>
            <p>
              Every place is different. PBJT is rooted in local social,
              economic, cultural, and environmental contexts. Instead of
              one-size-fits-all solutions, PBJT builds on local knowledge,
              networks, and strengths to co-create relevant and dignified
              transition strategies.
            </p>
          </article>

          <article className={cn("pbjt-tiers__card")}>
            <div className={cn("pbjt-icon")}>
              <IconScales />
            </div>
            <h3 className={cn("pbjt-tiers__heading")}>
              Equity and Redistribution of Power
            </h3>
            <p>
              A just transition requires shifting decision-making power toward
              those historically excluded. PBJT ensures meaningful
              participation of workers, women, informal sector actors, and
              marginalised communities in decisions that affect their
              livelihoods and environment.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

/* ---------- Inline SVG icons (no external deps) ---------- */

function IconNetwork() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <line x1="7.7" y1="7.5" x2="10.5" y2="16.4" strokeLinecap="round" />
      <line x1="16.3" y1="7.5" x2="13.5" y2="16.4" strokeLinecap="round" />
      <line x1="8" y1="6" x2="16" y2="6" strokeLinecap="round" />
    </svg>
  );
}

function IconQuestion() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 11.5c0 4.7-4 8.5-9 8.5-1.4 0-2.7-.3-3.9-.9L4 20.5l1.3-3.6A8.5 8.5 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5z" strokeLinejoin="round" />
      <path d="M9.8 9.4a2.3 2.3 0 0 1 4.5 0c0 1.4-2.3 1.8-2.3 3.3" strokeLinecap="round" />
      <circle cx="12" cy="15.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="17" cy="9" r="1.8" />
      <circle cx="5.5" cy="9" r="1.6" />
      <path d="M3.5 17.5c0-2.4 2.5-4 5.5-4s5.5 1.6 5.5 4" strokeLinecap="round" />
      <path d="M14.5 16c.4-1.7 1.8-2.7 3.5-2.7 1.8 0 3 .9 3.5 2.7" strokeLinecap="round" />
      <path d="M2 16c.4-1.7 1.5-2.7 3-2.7" strokeLinecap="round" />
    </svg>
  );
}

function IconHands() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 13V7c0-.8.5-1.4 1.4-1.4S11.8 6.2 11.8 7v4" strokeLinecap="round" />
      <path d="M11.8 11V5.5c0-.8.5-1.4 1.4-1.4s1.4.6 1.4 1.4V11" strokeLinecap="round" />
      <path d="M14.6 11V6.5c0-.8.5-1.4 1.4-1.4s1.4.6 1.4 1.4V12" strokeLinecap="round" />
      <path d="M17.4 12v-1.5c0-.8.5-1.4 1.4-1.4s1.4.6 1.4 1.4V15c0 3-2.2 5.5-5.5 5.5S9.7 19 8.5 16.5L6.7 13c-.4-.8 0-1.7.9-1.7.7 0 1.2.4 1.5 1l.9 1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21.5s7.5-6.5 7.5-12a7.5 7.5 0 1 0-15 0c0 5.5 7.5 12 7.5 12z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function IconScales() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 4v17" strokeLinecap="round" />
      <path d="M5.5 7h13" strokeLinecap="round" />
      <path d="M9 21h6" strokeLinecap="round" />
      <path d="M5.5 7l-2.5 5h5z" strokeLinejoin="round" />
      <path d="M18.5 7l-2.5 5h5z" strokeLinejoin="round" />
      <circle cx="12" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}


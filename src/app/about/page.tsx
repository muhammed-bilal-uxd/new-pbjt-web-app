"use client";

import Banner from "@/components/banner";
import "./about.css";

const PlaceBasedJustTransition = () => {
  return (
    <div className="pbjt about-page">
      {/* ============ HERO 1: SHAPING ============ */}

      <Banner
        title="Shaping Place-Based Just Transition"
        imgUrl="/images/about/about-07.jpg"
        textColor="#ffffff"
      />

      {/* ============ SHAPING CONTENT ============ */}
      <section className="pbjt-section">
        <div className="pbjt-container">
          <div className="pbjt-grid pbjt-grid--two">
            {/* LEFT */}
            <div>
              <span className="pbjt-bar" aria-hidden="true" />
              <h3 className="pbjt-h3">No one-size-fits-all approach exists.</h3>
              <p className="pbjt-p">
                Just Transition often appears in global discussions as a policy
                framework for meeting climate goals, shifting energy systems,
                or channeling green investments yet for workers and communities
                on the ground, it unfolds more intimately: in the quiet shifts
                to daily income, the strain on working conditions, the ebb and
                flow of access to essential resources, and the deeper sense of
                dignity that holds it all together shaped always by local
                realities.
              </p>

              <div className="pbjt-callout">
                <div className="pbjt-callout__badge pbjt-callout__badge--solid" aria-hidden="true">
                  <PeopleIcon />
                </div>
                <div className="pbjt-callout__body">
                  <p className="pbjt-callout__lead">
                    A Place-Based Just Transition begins with a simple but
                    critical question:
                  </p>
                  <p className="pbjt-callout__highlight">
                    Who carries the cost of transition, and who decides how it
                    happens?
                  </p>
                </div>
              </div>

              <p className="pbjt-p">
                Across most value chains, the heaviest burdens fall on those at
                the last tier: informal workers, MSMEs, vendors, and
                marginalised communities.
              </p>
            </div>

            {/* RIGHT */}
            <div className="pbjt-stack">
              <article className="pbjt-card">
                <div className="pbjt-card__media">
                  <img
                    src="/images/pbjt-bricks.jpg"
                    alt="Workers carrying bricks"
                    loading="lazy"
                  />
                </div>
                <div className="pbjt-card__body">
                  <span className="pbjt-card__icon" aria-hidden="true">
                    <SeedIcon />
                  </span>
                  <h4 className="pbjt-card__title">
                    The places where environmental damage is felt first
                  </h4>
                  <p className="pbjt-card__text">
                    livelihoods are most vulnerable, and transitions are often
                    the most disruptive.
                  </p>
                </div>
              </article>

              <article className="pbjt-card">
                <div className="pbjt-card__media">
                  <img
                    src="/images/pbjt-worker.jpg"
                    alt="Informal worker loading sacks"
                    loading="lazy"
                  />
                </div>
                <div className="pbjt-card__body">
                  <span className="pbjt-card__icon" aria-hidden="true">
                    <UserIcon />
                  </span>
                  <h4 className="pbjt-card__title">
                    PBJT brings attention back to these actors
                  </h4>
                  <p className="pbjt-card__text">
                    and treats them as central, not peripheral, to
                    sustainability.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* BOTTOM STRIP */}
          <div className="pbjt-strip">
            <div className="pbjt-strip__col pbjt-strip__col--main">
              <span className="pbjt-strip__icon" aria-hidden="true">
                <GlobeIcon />
              </span>
              <p>
                Our thinking draws from global just transition frameworks
                developed by institutions such as the International{" "}
                <strong>Labour Organization</strong> and{" "}
                <strong>the UNFCCC</strong>, while grounding them in the lived
                realities of villages, peri-urban settlements, and local
                production clusters.
              </p>
            </div>
            <div className="pbjt-strip__divider" aria-hidden="true" />
            <div className="pbjt-strip__col pbjt-strip__col--quote">
              <p>
                A transition is only just when it improves environmental
                outcomes and strengthens livelihoods, agency, and collective
                power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HERO 2: WHAT IS ============ */}
      <section
        className="pbjt-hero pbjt-hero--whatis"
        style={{ backgroundImage: "url('/images/pbjt-whatis-hero.jpg')" }}
        aria-label="What is Place-Based Just Transition"
      >
        <div className="pbjt-hero__inner pbjt-hero__inner--center">
          <h1 className="pbjt-hero__main pbjt-hero__main--white">
            What is<span className="pbjt-hero__qmark">?</span>
          </h1>
          <h2 className="pbjt-hero__sub">Place-Based Just Transition</h2>
        </div>
      </section>

      {/* ============ WHAT IS CONTENT ============ */}
      <section className="pbjt-section">
        <div className="pbjt-container">
          <div className="pbjt-grid pbjt-grid--two">
            {/* LEFT */}
            <div>
              <h3 className="pbjt-h3 pbjt-h3--lg">
                Place-Based Just Transition (PBJT) is an approach to
                sustainability that starts from the ground up.
              </h3>
              <span className="pbjt-bar" aria-hidden="true" />
              <p className="pbjt-p">
                PBJT recognises that environmental change and economic
                transition are not abstract ideas, they are lived every day in
                villages, neighbourhoods, worksites, and local production
                clusters.
              </p>
              <p className="pbjt-p">
                PBJT focuses on how workers, MSMEs, vendors, informal labour,
                and communities experience climate action, sustainability
                policies, and business practices at the last tiers of the value
                chain. These are the places where risk concentrates and
                visibility is lowest.
              </p>

              <div className="pbjt-callout">
                <div
                  className="pbjt-callout__badge pbjt-callout__badge--ghost"
                  aria-hidden="true"
                >
                  <LeafIcon />
                </div>
                <div className="pbjt-callout__body">
                  <p className="pbjt-callout__text">
                    <strong>A transition can only be called &ldquo;green&rdquo;</strong>{" "}
                    when it also protects people. As workers often remind us,
                    environmental improvements must go hand in hand with fair
                    wages, safety, dignity, and secure livelihoods.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="pbjt-stack">
              <NetworkDiagram />

              <div className="pbjt-benefits">
                <h4 className="pbjt-benefits__title">
                  PBJT ensures that the shift to greener economies:
                </h4>
                <ul className="pbjt-benefits__list">
                  <li>
                    <span className="pbjt-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    Protects both people and the planet
                  </li>
                  <li>
                    <span className="pbjt-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    Strengthens local livelihoods rather than displacing them
                  </li>
                  <li>
                    <span className="pbjt-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    Makes businesses accountable to the places they operate in
                  </li>
                  <li>
                    <span className="pbjt-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    Builds resilient and responsible local economic ecosystems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaceBasedJustTransition;

/* ============================================================ */
/*                       INLINE SVG ICONS                        */
/* ============================================================ */

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M3 19c.8-3 3.4-4.5 6-4.5s5.2 1.5 6 4.5" />
    <path d="M15 19c.5-2 2-3 3.5-3S21 17 21.5 19" />
  </svg>
);

const SeedIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-4-4-4-9 0-13 4 4 4 9 0 13z" />
    <path d="M5 21h14" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="3.5" />
    <path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" />
    <path d="M9 4.5l-2-1.2M15 4.5l2-1.2" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
    <path d="M5 19c3-3 6-5 10-7" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

/* ============================================================ */
/*                    NETWORK DIAGRAM (SVG)                      */
/* ============================================================ */

const NetworkDiagram = () => (
  <div className="pbjt-network" role="img" aria-label="Network of actors around Place-Based Transition">
    <svg viewBox="0 0 460 340" className="pbjt-network__svg">
      {/* Connecting lines */}
      <g className="pbjt-network__lines">
        <line x1="230" y1="170" x2="90" y2="230" />
        <line x1="230" y1="170" x2="230" y2="60" />
        <line x1="230" y1="170" x2="360" y2="120" />
        <line x1="230" y1="170" x2="370" y2="230" />
        <line x1="230" y1="170" x2="230" y2="290" />
        <line x1="90" y1="230" x2="230" y2="290" />
        <line x1="230" y1="60" x2="360" y2="120" />
        <line x1="370" y1="230" x2="230" y2="290" />
        <line x1="160" y1="120" x2="230" y2="60" />
        <line x1="160" y1="120" x2="90" y2="230" />
        <line x1="300" y1="230" x2="370" y2="230" />
      </g>

      {/* Small accent dots */}
      <circle cx="160" cy="120" r="6" className="pbjt-network__dot" />
      <circle cx="160" cy="220" r="6" className="pbjt-network__dot" />
      <circle cx="300" cy="230" r="6" className="pbjt-network__dot" />
      <circle cx="305" cy="80" r="5" className="pbjt-network__dot" />

      {/* Outer nodes */}
      <circle cx="90" cy="230" r="22" className="pbjt-network__node" />
      <circle cx="230" cy="60" r="22" className="pbjt-network__node" />
      <circle cx="360" cy="120" r="20" className="pbjt-network__node" />
      <circle cx="370" cy="230" r="22" className="pbjt-network__node" />
      <circle cx="230" cy="290" r="22" className="pbjt-network__node" />

      {/* Center */}
      <circle cx="230" cy="170" r="52" className="pbjt-network__center" />
      <text x="230" y="160" textAnchor="middle" className="pbjt-network__center-text">
        Placed
      </text>
      <text x="230" y="175" textAnchor="middle" className="pbjt-network__center-text">
        Based
      </text>
      <text x="230" y="190" textAnchor="middle" className="pbjt-network__center-text">
        Transition
      </text>

      {/* Labels */}
      <text x="90" y="200" textAnchor="middle" className="pbjt-network__label">Workers</text>
      <text x="230" y="32" textAnchor="middle" className="pbjt-network__label">Associations</text>
      <text x="395" y="100" textAnchor="start" className="pbjt-network__label">Actor</text>
      <text x="395" y="113" textAnchor="start" className="pbjt-network__label">driver</text>
      <text x="395" y="126" textAnchor="start" className="pbjt-network__label">Small</text>
      <text x="395" y="139" textAnchor="start" className="pbjt-network__label">Vendor</text>
      <text x="395" y="225" textAnchor="start" className="pbjt-network__label">Children and</text>
      <text x="395" y="238" textAnchor="start" className="pbjt-network__label">Youth</text>
      <text x="230" y="320" textAnchor="middle" className="pbjt-network__label">MSMEs</text>
    </svg>
  </div>
);

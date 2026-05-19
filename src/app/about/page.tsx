"use client";

import Banner from "@/components/banner";
import styles from "./about.module.css";

import AboutPlaceBasedTransitionSection from "@/components/about-place-based-transition-section/about-place-based-transition-section";
import HowPBJTWorks from "@/components/HowPBJTWorks/HowPBJTWorks";
import CustomTitle from "@/components/custom-title/custom-title";

const cn = (names: string) =>
  names
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(" ");

const PlaceBasedJustTransition = () => {
  return (
    <div className={cn("pbjt about-page")}>
      {/* ============ HERO 1: SHAPING ============ */}

      <Banner>
        <img
          className="single-cover-banner"
          src="/images/banner/about-banner-01.jpg"
        />

        <div className="relative text-center">
          <h3 className={cn("about-banner-title")}>shaping</h3>
          <div className={cn("about-banner-desc-container")}>
            <span className={cn("about-banner-desc-left")}>Place based</span>
            <span className={cn("about-banner-desc-right")}>
              just transition
            </span>
          </div>
        </div>
      </Banner>

      <div className={"center-content"}>
        <AboutPlaceBasedTransitionSection />
      </div>

      <div className={"center-content"}>
        <HowPBJTWorks />
      </div>

      <div className={cn("pbjt-diagram-section")}>
        <div className={"center-content text-center"}>
          <img
            style={{ margin: "0 auto", maxWidth: "100%" }}
            src="/images/about/hand-diagram.png"
          />
        </div>
      </div>

      {/* ============ SHAPING CONTENT ============ */}
      <section className={cn("pbjt-section section-one")}>
        <div className={"center-content"}>
          <div className={cn("pbjt-grid pbjt-grid--two")}>
            {/* LEFT */}
            <div>
              <CustomTitle>No one-size-fits-all approach exists.</CustomTitle>
              <p className={cn("pbjt-p mt-3")}>
                Just Transition often appears in global discussions as a policy
                framework for meeting climate goals, shifting energy systems, or
                channeling green investments yet for workers and communities on
                the ground, it unfolds more intimately: in the quiet shifts to
                daily income, the strain on working conditions, the ebb and flow
                of access to essential resources, and the deeper sense of
                dignity that holds it all together shaped always by local
                realities.
              </p>

              <div className={cn("pbjt-callout")}>
                <div
                  className={cn(
                    "pbjt-callout__badge pbjt-callout__badge--solid",
                  )}
                  aria-hidden="true"
                >
                  <PeopleIcon />
                </div>
                <div className={cn("pbjt-callout__body")}>
                  <p className={cn("pbjt-callout__lead")}>
                    A Place-Based Just Transition begins with a simple but
                    critical question:
                  </p>
                  <p className={cn("pbjt-callout__highlight")}>
                    Who carries the cost of transition, and who decides how it
                    happens?
                  </p>
                </div>
              </div>

              <p className={cn("pbjt-p")}>
                Across most value chains, the heaviest burdens fall on those at
                the last tier: informal workers, MSMEs, vendors, and
                marginalised communities.
              </p>
            </div>

            {/* RIGHT */}
            <div className={cn("pbjt-stack")}>
              <article className={cn("pbjt-card")}>
                <div className={cn("pbjt-card__media")}>
                  <img
                    src="/images/about/about-08.jpg"
                    alt="Workers carrying bricks"
                    loading="lazy"
                  />
                </div>
                <div className={cn("pbjt-card__body")}>
                  <span className={cn("pbjt-card__icon")} aria-hidden="true">
                    <SeedIcon />
                  </span>
                  <h4 className={cn("pbjt-card__title")}>
                    The places where environmental damage is felt first
                  </h4>
                  <p className={cn("pbjt-card__text")}>
                    livelihoods are most vulnerable, and transitions are often
                    the most disruptive.
                  </p>
                </div>
              </article>

              <article className={cn("pbjt-card")}>
                <div className={cn("pbjt-card__media")}>
                  <img
                    src="/images/about/about-09b.png"
                    alt="Informal worker loading sacks"
                    loading="lazy"
                  />
                </div>
                <div className={cn("pbjt-card__body")}>
                  <span className={cn("pbjt-card__icon")} aria-hidden="true">
                    <UserIcon />
                  </span>
                  <h4 className={cn("pbjt-card__title")}>
                    PBJT brings attention back to these actors
                  </h4>
                  <p className={cn("pbjt-card__text")}>
                    and treats them as central, not peripheral, to
                    sustainability.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* BOTTOM STRIP */}
          <div className={cn("pbjt-strip")}>
            <div className={cn("pbjt-strip__col pbjt-strip__col--main")}>
              <div className={cn("pbjt-strip__icon")} aria-hidden="true">
                <GlobeIcon />
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Our thinking draws from global just transition frameworks
                  developed by institutions such as the International{" "}
                  <strong>Labour Organization</strong> and{" "}
                  <strong>the UNFCCC</strong>, while grounding them in the lived
                  realities of villages, peri-urban settlements, and local
                  production clusters.
                </p>
                <div
                  className={cn(
                    "flex items-center gap-2 organization-logo-container",
                  )}
                >
                  <img src="/images/about/ilo-logo.png" alt="" />
                  <img src="/images/about/unfccc-logo.png" alt="" />
                </div>
              </div>
            </div>
            <div className={cn("pbjt-strip__divider")} aria-hidden="true" />
            <div className={cn("pbjt-strip__col pbjt-strip__col--quote")}>
              <p>
                A transition is only just when it improves environmental
                outcomes and strengthens livelihoods, agency, and collective
                power.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className={cn(
          "flex flex-col justify-center items-center p-4 critical-question",
        )}
      >
        <p className={cn("critical-question-p1")}>
          A Place-Based Just Transition begins with a simple but critical
          question:
        </p>
        <p className={cn("critical-question-p2")}>
          Who carries the cost of transition, and who decides how it happens?
        </p>
      </div>

      <Banner>
        <img
          className="single-cover-banner"
          src="/images/banner/about-banner-02.jpg"
        />

        <div className="relative text-center">
          <div
            className={cn(
              "flex flex-col items-center p-7 place-based-just-transition-container",
            )}
          >
            <div className="">
              <h1 className={cn("pbjt-hero__main pbjt-hero__main--white")}>
                What is
              </h1>
              <h2 className={cn("pbjt-hero__sub")}>
                Place-Based <br />
                Just Transition
                <br />
              </h2>
            </div>
            <div className="">
              <span className={cn("pbjt-hero__qmark")}>?</span>
            </div>
          </div>
        </div>
      </Banner>

      {/* ============ WHAT IS CONTENT ============ */}
      <section className={cn("pbjt-section section-two")}>
        <div className={"center-content"}>
          <div className={cn("pbjt-grid pbjt-grid--two")}>
            {/* LEFT */}
            <div>
              <CustomTitle>
                <div className={cn("grounup-title mt-[25px]")}>
                  Place-Based Just Transition (PBJT) is an approach to
                  sustainability that starts from the ground up.
                </div>
              </CustomTitle>

              <p className={cn("pbjt-p mt-4")}>
                PBJT recognises that environmental change and economic
                transition are not abstract ideas, they are lived every day in
                villages, neighbourhoods, worksites, and local production
                clusters.
              </p>
              <p className={cn("pbjt-p")}>
                PBJT focuses on how workers, MSMEs, vendors, informal labour,
                and communities experience climate action, sustainability
                policies, and business practices at the last tiers of the value
                chain. These are the places where risk concentrates and
                visibility is lowest.
              </p>

              <div className={cn("pbjt-callout")}>
                <div
                  className={cn(
                    "pbjt-callout__badge pbjt-callout__badge--ghost",
                  )}
                  aria-hidden="true"
                >
                  <LeafIcon />
                </div>
                <div className={cn("pbjt-callout__body")}>
                  <p className={cn("pbjt-callout__text")}>
                    <strong>
                      A transition can only be called &ldquo;green&rdquo;
                    </strong>{" "}
                    when it also protects people. As workers often remind us,
                    environmental improvements must go hand in hand with fair
                    wages, safety, dignity, and secure livelihoods.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className={cn("pbjt-stack")}>
              <div className={cn("diagram-wrap")}>
                <div className={cn("diagram-content")}>
                  <NetworkDiagram />
                </div>
              </div>
              <div className={cn("pbjt-benefits")}>
                <h4 className={cn("pbjt-benefits__title")}>
                  PBJT ensures that the shift to greener economies:
                </h4>
                <ul className={cn("pbjt-benefits__list")}>
                  <li>
                    <span className={cn("pbjt-check")} aria-hidden="true">
                      <CheckIcon />
                    </span>
                    Protects both people and the planet
                  </li>
                  <li>
                    <span className={cn("pbjt-check")} aria-hidden="true">
                      <CheckIcon />
                    </span>
                    Strengthens local livelihoods rather than displacing them
                  </li>
                  <li>
                    <span className={cn("pbjt-check")} aria-hidden="true">
                      <CheckIcon />
                    </span>
                    Makes businesses accountable to the places they operate in
                  </li>
                  <li>
                    <span className={cn("pbjt-check")} aria-hidden="true">
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
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M3 19c.8-3 3.4-4.5 6-4.5s5.2 1.5 6 4.5" />
    <path d="M15 19c.5-2 2-3 3.5-3S21 17 21.5 19" />
  </svg>
);

const SeedIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21c-4-4-4-9 0-13 4 4 4 9 0 13z" />
    <path d="M5 21h14" />
  </svg>
);

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="9" r="3.5" />
    <path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" />
    <path d="M9 4.5l-2-1.2M15 4.5l2-1.2" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
  </svg>
);

const LeafIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
    <path d="M5 19c3-3 6-5 10-7" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

/* ============================================================ */
/*                    NETWORK DIAGRAM (SVG)                      */
/* ============================================================ */

const NetworkDiagram = () => (
  <div
    className={cn("pbjt-network")}
    role="img"
    aria-label="Network of actors around Place-Based Transition"
  >
    <svg viewBox="0 0 460 340" className={cn("pbjt-network__svg")}>
      {/* Connecting lines */}
      <g className={cn("pbjt-network__lines")}>
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
      <circle cx="160" cy="120" r="6" className={cn("pbjt-network__dot")} />
      <circle cx="160" cy="220" r="6" className={cn("pbjt-network__dot")} />
      <circle cx="300" cy="230" r="6" className={cn("pbjt-network__dot")} />
      <circle cx="305" cy="80" r="5" className={cn("pbjt-network__dot")} />

      {/* Outer nodes */}
      <circle cx="90" cy="230" r="22" className={cn("pbjt-network__node")} />
      <circle cx="230" cy="60" r="22" className={cn("pbjt-network__node")} />
      <circle cx="360" cy="120" r="20" className={cn("pbjt-network__node")} />
      <circle cx="370" cy="230" r="22" className={cn("pbjt-network__node")} />
      <circle cx="230" cy="290" r="22" className={cn("pbjt-network__node")} />

      {/* Center */}
      <circle cx="230" cy="170" r="52" className={cn("pbjt-network__center")} />
      <text
        x="230"
        y="160"
        textAnchor="middle"
        className={cn("pbjt-network__center-text")}
      >
        Placed
      </text>
      <text
        x="230"
        y="175"
        textAnchor="middle"
        className={cn("pbjt-network__center-text")}
      >
        Based
      </text>
      <text
        x="230"
        y="190"
        textAnchor="middle"
        className={cn("pbjt-network__center-text")}
      >
        Transition
      </text>

      {/* Labels */}
      <text
        x="90"
        y="200"
        textAnchor="middle"
        className={cn("pbjt-network__label")}
      >
        Workers
      </text>
      <text
        x="230"
        y="32"
        textAnchor="middle"
        className={cn("pbjt-network__label")}
      >
        Associations
      </text>
      <text
        x="395"
        y="100"
        textAnchor="start"
        className={cn("pbjt-network__label")}
      >
        Actor
      </text>
      <text
        x="395"
        y="113"
        textAnchor="start"
        className={cn("pbjt-network__label")}
      >
        driver
      </text>
      <text
        x="395"
        y="126"
        textAnchor="start"
        className={cn("pbjt-network__label")}
      >
        Small
      </text>
      <text
        x="395"
        y="139"
        textAnchor="start"
        className={cn("pbjt-network__label")}
      >
        Vendor
      </text>
      <text
        x="395"
        y="225"
        textAnchor="start"
        className={cn("pbjt-network__label")}
      >
        Children and
      </text>
      <text
        x="395"
        y="238"
        textAnchor="start"
        className={cn("pbjt-network__label")}
      >
        Youth
      </text>
      <text
        x="230"
        y="320"
        textAnchor="middle"
        className={cn("pbjt-network__label")}
      >
        MSMEs
      </text>
    </svg>
  </div>
);

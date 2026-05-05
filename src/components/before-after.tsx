import { useMemo, useState } from "react";

import styles from "./before-after.module.css";

const icons: Record<string, string> = {
  waste: "WS",
  plastic: "PL",
  water: "WT",
  energy: "EN",
  culture: "GC",
  business: "RB",
  labour: "LD",
  child: "CP",
};

const themes = [
  {
    id: "waste",
    label: "Waste System Transformation",
    heading: "Waste System Transformation",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (By February 2026)",
    before: [
      "Waste dump sites were identified across villages",
      "Mixed waste was disposed of without systematic segregation",
      "Meetings were conducted with vendors and households",
      "A community pledge was initiated towards waste segregation and responsible disposal",
    ],
    after: [
      "Households are properly segregating milk packets and other plastic waste",
      "Plastic waste is responsibly disposed of through structured collection systems",
      "Hair waste from salons is being segregated and sent to farmers for use as organic manure",
      "Community-level awareness has translated into consistent waste management practices",
    ],
    impact: [
      "Informal dumping reduced",
      "Structured waste segregation",
      "Resource recovery enabled",
    ],
  },
  {
    id: "plastic",
    label: "Plastic Accountability Model",
    heading: "Plastic Accountability Model",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (By February 2026)",
    before: [
      "Plastics were indiscriminately dumped and burnt at local dump sites",
      "Shops commonly used plastic covers for packaging",
    ],
    after: [
      "Plastics are now properly collected and sold to waste vendors for recycling",
      "Shopkeepers have transitioned to eco-friendly alternatives such as banana leaves for packaging",
      "Community-level conversations on plastic accountability are influencing local business practices",
    ],
    impact: [
      "Reduced open burning",
      "Circular waste systems",
      "Responsible retail practices",
    ],
  },
  {
    id: "water",
    label: "Water & Ecological Restoration",
    heading: "Water and Ecological Restoration",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (By February 2026)",
    before: [
      "Waterbodies were identified during village mapping",
      "Large quantities of village waste were dumped inside waterbodies and along bunds",
    ],
    after: [
      "Waste from waterbodies and bund areas was cleared",
      "Tree saplings were planted to restore and protect the ecological spaces",
      "Community engagement has strengthened local stewardship over common water resources",
    ],
    impact: [
      "Reduced ecological degradation",
      "Restoration of commons",
      "Protection of local ecosystems",
    ],
  },
  {
    id: "energy",
    label: "Renewable Energy & Water Harvesting",
    heading: "Renewable Energy and Water Harvesting",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (By February 2026)",
    before: [
      "Awareness sessions conducted on rainwater harvesting and its benefits",
    ],
    after: ["2 households adopted and installed a rainwater harvesting pit"],
    impact: [
      "Knowledge translated into action at the household level",
      "Adoption of rainwater harvesting practices",
      "Improved local climate resilience through water conservation",
    ],
  },
  {
    id: "culture",
    label: "Green Cultural Practices",
    heading: "Green Cultural Practices",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (February 2026)",
    before: [
      "Festivals used flex banners",
      "Non-sustainable practices were followed",
    ],
    after: [
      "Temple festival organized as a Green Festival initiative",
      "Plastic-free celebration implemented",
      "Sustainable waste management practices introduced",
      "Tree planting integrated into celebrations",
    ],
    impact: [
      "Cultural events transformed into platforms for environmental responsibility",
      "Increased adoption of sustainable practices during festivals",
      "Strengthened community dignity and collective participation",
    ],
  },
  {
    id: "business",
    label: "Responsible Business Norms",
    heading: "Responsible Business Norms",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (By February 2026)",
    before: ["Vendors identified and engaged through focused meetings"],
    after: [
      "Discussions promoted reduced plastic use and reusable alternatives",
      "Vendors incentivize customers bringing their own vessels",
      "112 vendors established Zero Plastic commitment in their shops",
    ],
    impact: [
      "Emerging responsible business behavior rooted in local economic systems",
      "Increased adoption of sustainable retail practices",
      "Strengthened accountability among local vendors",
    ],
  },
  {
    id: "labour",
    label: "Labour Dignity & Heat Response",
    heading: "Labour Dignity and Heat Response",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (By February 2026)",
    before: [
      "Heat stress impacts on workers were not systematically addressed",
      "Limited local response to rising temperatures and working conditions",
    ],
    after: [
      "100 saplings distributed by an MSME as a heat response initiative",
      "Totally 470 saplings planted across 4 villages",
      "Villagers actively maintaining the trees",
    ],
    impact: [
      "Community-led heat mitigation through greening",
      "Improved local environmental conditions for workers",
      "Shared responsibility between communities and local actors",
    ],
  },
  {
    id: "child",
    label: "Child Protection & Ethical Business",
    heading: "Child Protection & Ethical Business",
    timeline: "June 2025 -> February 2026",
    beforeTitle: "Before (June 2025)",
    afterTitle: "After (By February 2026)",
    before: [
      "Limited coordinated efforts to address child marriage and child labour",
      "Lack of visible commitments from local businesses on child protection",
    ],
    after: [
      "Rally organized with schools, colleges, and Panchayat to prevent child marriage",
      "Enterprises committed to eliminating child labour",
      "No Child Labour signage displayed across business establishments",
    ],
    impact: [
      "Strengthened ethical business norms",
      "Increased institutional backing for child protection",
      "Greater community awareness and collective action",
    ],
  },
];

function runTests() {
  console.assert(themes.length === 8, "Expected 8 PBJT journey themes");
  console.assert(
    themes.every(
      (theme) => theme.id && theme.label && theme.heading && theme.timeline,
    ),
    "Every theme needs id, label, heading and timeline",
  );
  console.assert(
    themes.every(
      (theme) =>
        Array.isArray(theme.before) &&
        Array.isArray(theme.after) &&
        Array.isArray(theme.impact),
    ),
    "Every theme needs before, after and impact arrays",
  );
  console.assert(
    themes[0].impact.includes("Resource recovery enabled"),
    "Waste theme should include resource recovery impact",
  );
  console.assert(
    new Set(themes.map((theme) => theme.id)).size === themes.length,
    "Theme IDs must be unique",
  );
  console.assert(
    themes.every((theme) => icons[theme.id]),
    "Every theme must have an icon mapping",
  );
}

runTests();

function ListBlock({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: string;
}) {
  const isBefore = type === "before";

  return (
    <article
      className={`${styles.listBlock} ${styles.infoBox} ${isBefore ? styles.before : styles.after}`}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.comparisonImage}
          src={`/images/in-practice-detail/${isBefore ? "img05.png" : "img06.png"}`}
          alt=""
        />
      </div>
      <div className={styles.boxTitle}>
        <span className={styles.statusIcon}>{isBefore ? "!" : "+"}</span>
        <span>{title}</span>
      </div>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = themes[activeIndex];

  const next = () => {
    setActiveIndex((value) => (value + 1) % themes.length);
    document
      .getElementById("pbjt-root")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const previous = () => {
    setActiveIndex((value) => (value - 1 + themes.length) % themes.length);
    document
      .getElementById("pbjt-root")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeIcon = useMemo(() => icons[active.id] || "o", [active.id]);

  return (
    <main id="pbjt-root" className={styles.page}>
      <div className="center-content">
        <section className={styles.shell}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>Dindigul</p>
            <h1 className={styles.title}>PBJT: The Before and After Journey</h1>
            <p className={styles.subtitle}>
              Rooted in collaboration. Measurable impact across seven key
              themes.
            </p>
            <div className={styles.badge}>
              Built by communities. Sustained together.
            </div>
          </header>

          <nav className={styles.tabsWrap} aria-label="PBJT journey themes">
            <div
              className={styles.tabs}
              role="tablist"
              aria-orientation="horizontal"
            >
              {themes.map((theme, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={theme.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${theme.id}`}
                    id={`tab-${theme.id}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight")
                        setActiveIndex((index + 1) % themes.length);
                      if (event.key === "ArrowLeft")
                        setActiveIndex(
                          (index - 1 + themes.length) % themes.length,
                        );
                    }}
                    title={theme.label}
                    className={`${styles.tab} ${selected ? styles.active : ""}`}
                  >
                    <span className={styles.tabIcon}>{icons[theme.id]}</span>
                    <span>{theme.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <section
            className={styles.contentGrid}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
          >
            <div>
              <article className={styles.themeCard}>
                <div className={styles.themeIcon}>{activeIcon}</div>
                <h2 className={styles.themeTitle}>{active.heading}</h2>
                <div className={styles.timeline}>
                  Timeline: {active.timeline}
                </div>
              </article>

              <div className={styles.beforeAfterGrid}>
                <ListBlock
                  title={active.beforeTitle}
                  items={active.before}
                  type="before"
                />
                <ListBlock
                  title={active.afterTitle}
                  items={active.after}
                  type="after"
                />
              </div>
            </div>

            <aside className={styles.impactPanel}>
              <div className={styles.impactHead}>
                <div className={styles.impactIcon}>*</div>
                <div>
                  <small className={styles.impactLabel}>Impact</small>
                  <h3 className={styles.impactTitle}>What changed</h3>
                </div>
              </div>
              <div>
                {active.impact.map((item, index) => (
                  <div key={index} className={styles.impactItem}>
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <footer className={styles.navRow}>
            <button type="button" onClick={previous} className={styles.navBtn}>
              {"<"} Previous
            </button>

            <div className={styles.dots}>
              {themes.map((theme, index) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${theme.label}`}
                  className={`${styles.dot} ${index === activeIndex ? styles.active : ""}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className={`${styles.navBtn} ${styles.navBtnNext}`}
            >
              Next {">"}
            </button>
          </footer>
        </section>
      </div>
    </main>
  );
}

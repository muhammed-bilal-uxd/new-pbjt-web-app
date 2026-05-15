import { useEffect, useMemo, useState } from "react";

import styles from "./before-after.module.css";
import { districts, VillageTheme } from "@/data/district";

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

function runTests({ themes }: { themes: VillageTheme[] }) {
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
        {/* <span className={styles.statusIcon}>{isBefore ? "!" : "+"}</span> */}
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

export default function BeforeAfter({
  districtName,
}: {
  districtName: string;
}) {
  const data = districts[districtName]?.beforeAfter;
  const themes = data.themes;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = themes[activeIndex];

  useEffect(() => {
    runTests({ themes });
  }, [themes]);

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
            <p className={styles.eyebrow}>{data.name}</p>
            <h1 className={styles.title}>PBJT - {data?.title}</h1>
            <p className={styles.subtitle}>{data?.description}</p>
            <div className={styles.badge}>{data?.badge}</div>
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
                  {/* <small className={styles.impactLabel}>Impact</small> */}
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

// VillageMapping.jsx
// Next.js / React component — pair with VillageMapping.module.css

import styles from "./village-mapping.module.css";

const villages = [
  {
    id: 1,
    label: "Waste Dump Site",
    location: "Siluvattur",
    tag: "Cleared",
    tagColor: "green",
    beforeImg: "https://placehold.co/420x260/e8e0d5/6b5e4e?text=Before+%E2%80%94+Waste+Dump",
    afterImg:  "https://placehold.co/420x260/d0e8d5/2e6b3e?text=After+%E2%80%94+Site+Cleared",
  },
  {
    id: 2,
    label: "Waste Dump Site",
    location: "Pethampatti",
    tag: "Remediated",
    tagColor: "green",
    beforeImg: "https://placehold.co/420x260/f5e8c8/7a5c2a?text=Before+%E2%80%94+Dump+Site",
    afterImg:  "https://placehold.co/420x260/e8f0d8/3d6e26?text=After+%E2%80%94+Remediated",
  },
  {
    id: 3,
    label: "Tree Plantation",
    location: "Sannarpatti",
    tag: "Planted",
    tagColor: "forest",
    beforeImg: "https://placehold.co/420x260/ece8e0/5a5040?text=Before+%E2%80%94+Bare+Land",
    afterImg:  "https://placehold.co/420x260/c8e8c0/1a5e2e?text=After+%E2%80%94+Trees+Planted",
  },
];

export default function VillageMapping() {
  return (
    <section className={styles.section}>
      {/* Decorative grain overlay */}
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Community-Led Transformation</span>
          <h1 className={styles.title}>
            Mapping <em>Change</em>
          </h1>
          <p className={styles.subtitle}>
            Participatory village mapping surfaced each community's own needs
            and resources — guiding hyper-local action from clearing dumpsites
            to planting trees. The result: sustainable transformation that
            truly <strong>fits the place</strong>.
          </p>
        </header>

        {/* ── Feature pill row ── */}
        <div className={styles.pillRow} aria-label="Key outcomes">
          {["Locally Relevant", "Community-Owned", "Measurable Impact", "Sustainable"].map(
            (p) => (
              <span key={p} className={styles.pill}>
                {p}
              </span>
            )
          )}
        </div>

        {/* ── Cards ── */}
        <div className={styles.grid}>
          {villages.map((v) => (
            <article key={v.id} className={styles.card}>
              {/* Before / After image pair */}
              <div className={styles.imageRow}>
                <div className={styles.imageWrap}>
                  <span className={styles.imageLabel}>Before</span>
                  <img
                    src={v.beforeImg}
                    alt={`${v.location} before`}
                    className={styles.img}
                    loading="lazy"
                  />
                </div>
                <div className={`${styles.imageWrap} ${styles.imageWrapAfter}`}>
                  <span className={`${styles.imageLabel} ${styles.imageLabelAfter}`}>
                    After
                  </span>
                  <img
                    src={v.afterImg}
                    alt={`${v.location} after`}
                    className={styles.img}
                    loading="lazy"
                  />
                  {/* Leaf badge */}
                  <span className={styles.leaf} aria-hidden="true">🌿</span>
                </div>
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={`${styles.tag} ${styles[`tag--${v.tagColor}`]}`}>
                    {v.tag}
                  </span>
                  <span className={styles.cardType}>{v.label}</span>
                </div>
                <h2 className={styles.cardLocation}>{v.location}</h2>
                <div className={styles.divider} />
                <p className={styles.cardDesc}>
                  Participatory mapping identified the site. Community members
                  planned and executed the transformation — ensuring outcomes
                  are owned and maintained locally.
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Footer stat bar ── */}
        <footer className={styles.statBar}>
          {[
            { value: "3", label: "Villages Mapped" },
            { value: "100%", label: "Community-Led" },
            { value: "2026", label: "Ongoing" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </footer>
      </div>
    </section>
  );
}

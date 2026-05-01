'use client';

import { useState, useRef, useEffect } from 'react';

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/*  Move this to a separate file (data/villages.js) when convenient.  */
/* ------------------------------------------------------------------ */

const VILLAGES = [
  {
    id: 'avilipatti',
    name: 'AVILIPATTI',
    image: 'https://picsum.photos/seed/avilipatti-village/640/360',
    cardMetrics: { dumpSites: 4, waterBodies: 1, trees: 120 },
    panel: {
      tagline:
        'Local actions that turned waste into value and restored common ecosystems.',
      activities: [
        'Dump site: 4',
        'Water bodies: 1',
        'Trees planted: 120',
        'Sanitation workers - Collected waste properly and received incentives from the Panchayat',
      ],
      insight:
        'Community participation and incentives improved waste management practices.',
      restored: ['Dump site: 1', 'Water bodies: 1'],
      restoredImage:
        'https://picsum.photos/seed/avilipatti-restored/640/360',
      restoredCaption:
        'A restored water body now supports biodiversity and community use.',
      groups: [
        { name: 'Gethu Group', members: 13 },
        { name: 'Adolescent Boys and Girls', members: 27 },
        { name: 'MSME', members: 1 },
        { name: 'Vendors Association', members: 13 },
      ],
    },
  },
  {
    id: 'pethampatty',
    name: 'PETHAMPATTY',
    image: 'https://picsum.photos/seed/pethampatty-village/640/360',
    cardMetrics: { dumpSites: 2, waterBodies: 2, trees: 50 },
    panel: {
      tagline:
        'Local actions that turned waste into value and restored common ecosystems.',
      activities: [
        'Dump site: 2',
        'Water bodies: 2',
        'Trees planted: 50',
        'Petty shops - 2 shops - Collecting empty milk packets and dosa batter packets',
      ],
      insight:
        'Local shops have become collection points, embedding waste sorting into daily routine.',
      restored: ['Dump site: 1', 'Water bodies: 0'],
      restoredImage:
        'https://picsum.photos/seed/pethampatty-restored/640/360',
      restoredCaption:
        'Cleared dump sites are paving the way for healthier surroundings.',
      groups: [
        { name: 'Gethu Group', members: 13 },
        { name: 'Adolescent boys and Girls', members: 25 },
      ],
    },
  },
  {
    id: 'gopalpatti',
    name: 'GOPALPATTI',
    image: 'https://picsum.photos/seed/gopalpatti-village/640/360',
    cardMetrics: { dumpSites: 6, waterBodies: 3, trees: 100 },
    panel: {
      tagline:
        'Local actions that turned waste into value and restored common ecosystems.',
      activities: [
        'Dump site: 6',
        'Water bodies: 3',
        'Solar: 8',
        'Rain water: 400',
        'Trees planted: 100',
        'Waste recycle unit: 1 - Run by the Panchayat',
        'Vendors committed to zero plastic usage: 45',
        'Barber salon - 6 (segregating waste and giving hair to process manure)',
      ],
      insight:
        'Diverse community-led initiatives are reinforcing sustainable practices across livelihoods.',
      restored: ['Dump site: 2', 'Water bodies: 0'],
      restoredImage:
        'https://picsum.photos/seed/gopalpatti-restored/640/360',
      restoredCaption:
        'Restored dump sites are returning land to productive community use.',
      groups: [
        { name: 'Barbers Association', members: 13 },
        { name: 'Auto drivers association', members: 11 },
        { name: 'MSME Group', members: 4 },
        { name: 'Green workers', members: 15 },
      ],
    },
  },
  {
    id: 'sanarpatty',
    name: 'SANARPATTY',
    image: 'https://picsum.photos/seed/sanarpatty-village/640/360',
    cardMetrics: { dumpSites: 6, waterBodies: 5, trees: 200 },
    panel: {
      tagline:
        'Local actions that turned waste into value and restored common ecosystems.',
      activities: [
        'Dump site: 6',
        'Water bodies: 5',
        'Solar: 6',
        'Rain water: 11',
        'Trees planted: 200',
        'Waste recycle unit: 1 - Run by the Panchayat',
        'Shops committed to zero plastic usage: 51',
        'Best plastic free practices: 10',
      ],
      insight:
        'Strong vendor commitment and youth participation are accelerating change at scale.',
      restored: ['Dump site: 2', 'Water bodies: 0'],
      restoredImage:
        'https://picsum.photos/seed/sanarpatty-restored/640/360',
      restoredCaption:
        'Plastic-free practices are reshaping daily commerce in the village.',
      groups: [
        { name: 'Barbers Association', members: 4 },
        { name: 'Environmental Protection Committee', members: 70 },
        { name: 'MSME Group', members: 3 },
        { name: 'Small vendors Association', members: 27 },
        { name: 'Auto Drivers Association', members: 19 },
        { name: 'Youth Groups', members: 45 },
        { name: 'Adolescent Groups', members: 28 },
        { name: 'Green Gethu workers group', members: 60 },
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/*  ICONS                                                             */
/* ------------------------------------------------------------------ */

const TrashIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 6h18" />
    <path d="M19 6l-1.5 14a2 2 0 0 1-2 1.8H8.5a2 2 0 0 1-2-1.8L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const WaterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5s-6 7-6 11.5a6 6 0 0 0 12 0c0-4.5-6-11.5-6-11.5z" />
  </svg>
);

const TreeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2 7.5 9H10v3.5H7L12 20l5-7.5h-3V9h2.5z" />
  </svg>
);

const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8 2 5 5 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const PeopleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
    <path d="M14 20c0-2 2-4 5-4s4 2 4 4" />
  </svg>
);

const ClipboardIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M9 10h6M9 14h6M9 18h4" />
  </svg>
);

const LeafIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 3c-9 0-15 5-15 13 0 2 .5 4 1.5 5l1.5-1.5C12 17 17 14 20 9V3z" />
  </svg>
);

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l2.9 6.5 7.1.8-5.3 4.9 1.6 7L12 17.8 5.7 21.2l1.6-7L2 9.3l7.1-.8z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  SUB COMPONENTS                                                    */
/* ------------------------------------------------------------------ */

const MetricTile = ({ icon, value, label, variant }) => (
  <div className="metric">
    <span className={`metricIcon metric_${variant}`}>
      {icon}
    </span>
    <span className="metricValue">{value}</span>
    <span className="metricLabel">{label}</span>
  </div>
);

const VillageCard = ({ village, isActive, onSelect }) => (
  <article
    className={`card ${isActive ? "cardActive" : ''}`}
    aria-current={isActive ? 'true' : undefined}
  >
    <div className="cardImageWrap">
      <img
        src={village.image}
        alt={`Landscape of ${village.name}`}
        className="cardImage"
        loading="lazy"
      />
      <span
        className={`cardBadge ${isActive ? "cardBadgeActive" : ''
          }`}
      >
        <PinIcon className="cardBadgeIcon" />
        {village.name}
      </span>
    </div>

    <div className="cardMetrics">
      <MetricTile
        icon={<TrashIcon />}
        value={village.cardMetrics.dumpSites}
        label="Dump sites"
        variant="red"
      />
      <MetricTile
        icon={<WaterIcon />}
        value={village.cardMetrics.waterBodies}
        label="Water bodies"
        variant="blue"
      />
      <MetricTile
        icon={<TreeIcon />}
        value={village.cardMetrics.trees}
        label="Trees planted"
        variant="green"
      />
    </div>

    <button
      type="button"
      className={`viewMore ${isActive ? "viewMoreActive" : ''
        }`}
      onClick={() => onSelect(village.id)}
      aria-expanded={isActive}
      aria-controls="pbjt-panel"
    >
      View More <span aria-hidden="true">→</span>
    </button>
  </article>
);

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function VillageDetail() {
  const [activeId, setActiveId] = useState('avilipatti');
  const panelRef = useRef(null);
  const previousIdRef = useRef('avilipatti');

  // Scroll panel into view on mobile when user picks a different village.
  useEffect(() => {
    if (
      activeId &&
      activeId !== previousIdRef.current &&
      panelRef.current &&
      window.innerWidth < 900
    ) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    previousIdRef.current = activeId;
  }, [activeId]);

  const active = VILLAGES.find((v) => v.id === activeId);

  return (
    <>
      <section className="section" aria-labelledby="pbjt-heading">
        {/* Header */}
        <header className="header">
          <div className="titleRow">
            <span className="titleIcon" aria-hidden="true">
              <PeopleIcon className="titleIconSvg" />
            </span>
            <h2 id="pbjt-heading" className="title">
              <span className="titleAccent">PBJT</span> In Four Villages
              Across Dindigul
            </h2>
          </div>
          <p className="subtitle">
            Community-Led actions restoring ecosystems, reducing waste and
            building local livelihoods.
          </p>
        </header>

        {/* Village card grid */}
        <div className="cardGrid">
          {VILLAGES.map((v) => (
            <VillageCard
              key={v.id}
              village={v}
              isActive={activeId === v.id}
              onSelect={setActiveId}
            />
          ))}
        </div>

        {/* Expanded panel */}
        {active && (
          <div
            id="pbjt-panel"
            ref={panelRef}
            className="panel"
            role="region"
            aria-label={`Details for ${active.name}`}
          >
            <button
              type="button"
              className="panelClose"
              onClick={() => setActiveId(null)}
              aria-label="Close detail panel"
            >
              ×
            </button>

            {/* Sidebar */}
            <aside className="panelSidebar">
              <div className="sidebarLeaves" aria-hidden="true" />
              <div className="panelLocation">
                <PinIcon className="panelLocationIcon" />
                <span>{active.name}</span>
              </div>
              <p className="panelTagline">{active.panel.tagline}</p>
              <div className="panelMetricsCard">
                <div className="panelMetricRow">
                  <span
                    className={`metricIcon metric_red`}
                  >
                    <TrashIcon />
                  </span>
                  <div>
                    <div className="panelMetricValue">
                      {active.cardMetrics.dumpSites}
                    </div>
                    <div className="panelMetricLabel">Dump sites</div>
                  </div>
                </div>
                <div className="panelMetricRow">
                  <span
                    className={`metricIcon metric_blue`}
                  >
                    <WaterIcon />
                  </span>
                  <div>
                    <div className="panelMetricValue">
                      {active.cardMetrics.waterBodies}
                    </div>
                    <div className="panelMetricLabel">Water bodies</div>
                  </div>
                </div>
                <div className="panelMetricRow">
                  <span
                    className={`metricIcon metric_green`}
                  >
                    <TreeIcon />
                  </span>
                  <div>
                    <div className="panelMetricValue">
                      {active.cardMetrics.trees}
                    </div>
                    <div className="panelMetricLabel">Trees planted</div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right side: 3 content blocks */}
            <div className="panelContent">
              {/* ACTIVITIES */}
              <div className="panelBlock">
                <header className="blockHeader">
                  <span
                    className={`blockIcon blockIcon_red`}
                  >
                    <ClipboardIcon />
                  </span>
                  <h3 className="blockTitle">ACTIVITIES</h3>
                </header>
                <ul
                  className={`blockList blockList_red`}
                >
                  {active.panel.activities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
                {active.panel.insight && (
                  <div className="insightCard">
                    <span className="insightIcon" aria-hidden="true">
                      <LeafIcon />
                    </span>
                    <p>{active.panel.insight}</p>
                  </div>
                )}
              </div>

              {/* RESTORED */}
              <div className="panelBlock">
                <header className="blockHeader">
                  <span
                    className={`blockIcon blockIcon_green`}
                  >
                    <LeafIcon />
                  </span>
                  <h3 className="blockTitle">RESTORED</h3>
                </header>
                <ul
                  className={`blockList blockList_green`}
                >
                  {active.panel.restored.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <figure className="restoredFigure">
                  <img
                    src={active.panel.restoredImage}
                    alt={`Restored area in ${active.name}`}
                    loading="lazy"
                  />
                  <figcaption>{active.panel.restoredCaption}</figcaption>
                </figure>
              </div>

              {/* GROUPS & MEMBERS */}
              <div className="panelBlock">
                <header className="blockHeader">
                  <span
                    className={`blockIcon blockIcon_purple`}
                  >
                    <PeopleIcon />
                  </span>
                  <h3 className="blockTitle">GROUPS &amp; MEMBERS</h3>
                </header>
                <p className="blockDesc">
                  Local groups driving collective action in the village.
                </p>
                <div className="tableWrap">
                  <table className="groupsTable">
                    <thead>
                      <tr>
                        <th scope="col">Groups</th>
                        <th scope="col">Members</th>
                      </tr>
                    </thead>
                    <tbody>
                      {active.panel.groups.map((g, i) => (
                        <tr key={i}>
                          <td>{g.name}</td>
                          <td>{g.members}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer ribbon */}
            <div className="panelFooter">
              <span className="footerStar" aria-hidden="true">
                <StarIcon className="footerStarIcon" />
              </span>
              <span>Small actions. Collective spirit. Lasting change.</span>
            </div>
          </div>
        )}
      </section>

      <style jsx global>{`
/* ==================================================================
   PBJTSection.module.css
   Responsive styles for the PBJT in Four Villages section.
   Breakpoints:
     >= 1101px  : 4 cards in a row, 3-column expanded panel
     900-1100px : 4 cards in a row, expanded content stacks vertically
     601-899px  : 2x2 grid, sidebar stacks above panel content
     <= 600px   : single column stack
   ================================================================== */

.section {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  padding: 32px 24px;
  max-width: 1400px;
  margin: 0 auto;
  color: #1a1f36;
  box-sizing: border-box;
}

.section *,
.section *::before,
.section *::after {
  box-sizing: border-box;
}

/* -------- Header -------- */
.header {
  margin-bottom: 24px;
}

.titleRow {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.titleIcon {
  width: 36px;
  height: 36px;
  background: var(--pbjt-primary-color);
  color: white;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.titleIconSvg {
  width: 18px;
  height: 18px;
}

.title {
  font-size: clamp(1.4rem, 3vw, 2.25rem);
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.titleAccent {
  color: var(--pbjt-primary-color);
}

.subtitle {
  font-size: 1rem;
  color: #4a5568;
  margin: 8px 0 0 48px;
  line-height: 1.5;
}

/* -------- Card grid -------- */
.cardGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

/* -------- Card -------- */
.card {
  background: white;
  border-radius: 12px;
  padding: 12px;
  border: 2px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease,
    transform 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.cardActive {
  border-color: var(--pbjt-primary-color);
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.18);
}

.cardImageWrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #e2e8f0, #cbd5e0);
}

.cardImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cardBadge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: #1a202c;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.5px;
}

.cardBadgeActive {
  background: var(--pbjt-primary-color);
}

.cardBadgeIcon {
  width: 12px;
  height: 12px;
}

.cardMetrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 16px 4px 12px;
  flex: 1;
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
}

.metricIcon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.metricIcon svg {
  width: 18px;
  height: 18px;
}

.metric_red {
  background: #fde8ea;
  color: var(--pbjt-primary-color);
}

.metric_blue {
  background: #e0f2fe;
  color: #2196f3;
}

.metric_green {
  background: #dcfce7;
  color: #22c55e;
}

.metricValue {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
}

.metricLabel {
  font-size: 0.72rem;
  color: #4a5568;
}

.viewMore {
  width: 100%;
  border: none;
  background: none;
  border-top: 1px solid #e2e8f0;
  padding: 12px 0 4px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  color: #1a202c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: inherit;
  transition: color 0.15s ease;
}

.viewMore:hover,
.viewMoreActive {
  color: var(--pbjt-primary-color);
}

.viewMore:focus-visible {
  outline: 2px solid var(--pbjt-primary-color);
  outline-offset: 2px;
  border-radius: 4px;
}

/* ====================== EXPANDED PANEL ====================== */
.panel {
  position: relative;
  background: white;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 1fr auto;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
}

.panelClose {
  position: absolute;
  top: 12px;
  right: 14px;
  background: none;
  border: none;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  color: #4a5568;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border-radius: 4px;
  font-family: inherit;
}

.panelClose:hover {
  background: #f1f5f9;
}

/* Sidebar */
.panelSidebar {
  background: var(--pbjt-primary-color);
  color: white;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  grid-row: 1 / 2;
}

.sidebarLeaves {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 90%, rgba(255, 255, 255, 0.07) 0, transparent 30%),
    radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.05) 0, transparent 25%);
  pointer-events: none;
}

.panelLocation {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  letter-spacing: 0.3px;
}

.panelLocationIcon {
  width: 16px;
  height: 16px;
}

.panelTagline {
  font-size: 0.95rem;
  line-height: 1.55;
  margin: 0 0 24px 0;
  opacity: 0.97;
  position: relative;
  z-index: 1;
}

.panelMetricsCard {
  background: white;
  color: #1a202c;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.panelMetricRow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.panelMetricValue {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
}

.panelMetricLabel {
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 3px;
}

/* Right content */
.panelContent {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  padding: 28px 28px 20px;
  grid-row: 1 / 2;
}

.panelBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

.blockHeader {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.blockTitle {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #4a5568;
}

.blockIcon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.blockIcon svg {
  width: 16px;
  height: 16px;
}

.blockIcon_red {
  background: #fde8ea;
  color: var(--pbjt-primary-color);
}

.blockIcon_green {
  background: #dcfce7;
  color: #22c55e;
}

.blockIcon_purple {
  background: #ede9fe;
  color: #8b5cf6;
}

.blockList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.blockList li {
  position: relative;
  padding-left: 16px;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #2d3748;
}

.blockList li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.blockList_red li::before {
  background: var(--pbjt-primary-color);
}

.blockList_green li::before {
  background: #22c55e;
}

.insightCard {
  background: #fde8ea;
  border-radius: 8px;
  padding: 12px 14px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.85rem;
  color: #4a5568;
  margin-top: 8px;
  line-height: 1.5;
}

.insightIcon {
  color: var(--pbjt-primary-color);
  flex-shrink: 0;
  margin-top: 1px;
  display: inline-flex;
}

.insightIcon svg {
  width: 14px;
  height: 14px;
}

.insightCard p {
  margin: 0;
}

.restoredFigure {
  margin: 0;
}

.restoredFigure img {
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: linear-gradient(135deg, #e2e8f0, #cbd5e0);
  display: block;
}

.restoredFigure figcaption {
  font-size: 0.85rem;
  color: #4a5568;
  margin-top: 8px;
  line-height: 1.45;
}

.blockDesc {
  font-size: 0.9rem;
  color: #4a5568;
  margin: 0 0 4px 0;
  line-height: 1.45;
}

.tableWrap {
  overflow-x: auto;
}

.groupsTable {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.groupsTable thead th {
  background: #ede9fe;
  color: #4c1d95;
  text-align: left;
  padding: 10px 12px;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.3px;
}

.groupsTable thead th:last-child {
  text-align: right;
}

.groupsTable tbody td {
  padding: 10px 12px;
  border-bottom: 1px solid #f1f5f9;
  color: #2d3748;
}

.groupsTable tbody tr:last-child td {
  border-bottom: none;
}

.groupsTable tbody td:last-child {
  text-align: right;
  font-weight: 600;
}

/* Footer ribbon spans both columns */
.panelFooter {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  background: #fde8ea;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: #1a202c;
  font-size: 0.95rem;
}

.footerStar {
  width: 28px;
  height: 28px;
  background: var(--pbjt-primary-color);
  color: white;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footerStarIcon {
  width: 14px;
  height: 14px;
}

/* ====================== RESPONSIVE ====================== */

/* Large tablet / small desktop: panel content stacks below sidebar */
@media (max-width: 1100px) {
  .panelContent {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .cardGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .panel {
    grid-template-columns: 1fr;
  }
  .panelSidebar {
    padding: 20px;
  }
  .panelContent {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 24px;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 20px 16px;
  }
  .cardGrid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .subtitle {
    margin-left: 0;
    font-size: 0.95rem;
  }
  .titleIcon {
    width: 32px;
    height: 32px;
  }
  .metricValue {
    font-size: 1.25rem;
  }
  .panelFooter {
    padding: 14px 16px;
    font-size: 0.88rem;
  }
}

/* Very small phones */
@media (max-width: 360px) {
  .cardMetrics {
    gap: 4px;
  }
  .metricIcon {
    width: 32px;
    height: 32px;
  }
  .metricIcon svg {
    width: 16px;
    height: 16px;
  }
  .metricValue {
    font-size: 1.1rem;
  }
  .metricLabel {
    font-size: 0.68rem;
  }
}

    `}</style>
    </>
  );
}

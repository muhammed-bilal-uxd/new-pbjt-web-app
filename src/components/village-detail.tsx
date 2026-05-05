'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './village-detail.module.css';

const s = styles;

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

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

type Village = (typeof VILLAGES)[number];
type VillageId = Village['id'];

const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 6h18" />
    <path d="M19 6l-1.5 14a2 2 0 0 1-2 1.8H8.5a2 2 0 0 1-2-1.8L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const WaterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5s-6 7-6 11.5a6 6 0 0 0 12 0c0-4.5-6-11.5-6-11.5z" />
  </svg>
);

const TreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2 7.5 9H10v3.5H7L12 20l5-7.5h-3V9h2.5z" />
  </svg>
);

const PinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8 2 5 5 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const PeopleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
    <path d="M14 20c0-2 2-4 5-4s4 2 4 4" />
  </svg>
);

const ClipboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M9 10h6M9 14h6M9 18h4" />
  </svg>
);

const LeafIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 3c-9 0-15 5-15 13 0 2 .5 4 1.5 5l1.5-1.5C12 17 17 14 20 9V3z" />
  </svg>
);

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l2.9 6.5 7.1.8-5.3 4.9 1.6 7L12 17.8 5.7 21.2l1.6-7L2 9.3l7.1-.8z" />
  </svg>
);

const MetricTile = ({
  icon,
  value,
  label,
  variant,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  variant: string;
}) => (
  <div className={s.metric}>
    <span className={cx(s.metricIcon, s[`metric_${variant}` as keyof typeof s])}>
      {icon}
    </span>
    <span className={s.metricValue}>{value}</span>
    <span className={s.metricLabel}>{label}</span>
  </div>
);

const VillageCard = ({
  village,
  isActive,
  onSelect,
}: {
  village: Village;
  isActive: boolean;
  onSelect: (id: VillageId) => void;
}) => (
  <article className={cx(s.card, isActive && s.cardActive)} aria-current={isActive ? 'true' : undefined}>
    <div className={s.cardImageWrap}>
      <img
        src={village.image}
        alt={`Landscape of ${village.name}`}
        className={s.cardImage}
        loading="lazy"
      />
      <span className={cx(s.cardBadge, isActive && s.cardBadgeActive)}>
        <PinIcon className={s.cardBadgeIcon} />
        {village.name}
      </span>
    </div>

    <div className={s.cardMetrics}>
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
      className={cx(s.viewMore, isActive && s.viewMoreActive)}
      onClick={() => onSelect(village.id)}
      aria-expanded={isActive}
      aria-controls="pbjt-panel"
    >
      View More <span aria-hidden="true">{'>'}</span>
    </button>
  </article>
);

export default function VillageDetail() {
  const [activeId, setActiveId] = useState<VillageId | null>('avilipatti');
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previousIdRef = useRef<VillageId | null>('avilipatti');

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
    <section className={s.section} aria-labelledby="pbjt-heading">
      <header className={s.header}>
        <div className={s.titleRow}>
          <span className={s.titleIcon} aria-hidden="true">
            <PeopleIcon className={s.titleIconSvg} />
          </span>
          <h2 id="pbjt-heading" className={s.title}>
            <span className={s.titleAccent}>PBJT</span> In Four Villages Across Dindigul
          </h2>
        </div>
        <p className={s.subtitle}>
          Community-Led actions restoring ecosystems, reducing waste and building local livelihoods.
        </p>
      </header>

      <div className={s.cardGrid}>
        {VILLAGES.map((v) => (
          <VillageCard
            key={v.id}
            village={v}
            isActive={activeId === v.id}
            onSelect={setActiveId}
          />
        ))}
      </div>

      {active && (
        <div
          id="pbjt-panel"
          ref={panelRef}
          className={s.panel}
          role="region"
          aria-label={`Details for ${active.name}`}
        >
          <button
            type="button"
            className={s.panelClose}
            onClick={() => setActiveId(null)}
            aria-label="Close detail panel"
          >
            x
          </button>

          <aside className={s.panelSidebar}>
            <div className={s.sidebarLeaves} aria-hidden="true" />
            <div className={s.panelLocation}>
              <PinIcon className={s.panelLocationIcon} />
              <span>{active.name}</span>
            </div>
            <p className={s.panelTagline}>{active.panel.tagline}</p>
            <div className={s.panelMetricsCard}>
              <div className={s.panelMetricRow}>
                <span className={cx(s.metricIcon, s.metric_red)}>
                  <TrashIcon />
                </span>
                <div>
                  <div className={s.panelMetricValue}>{active.cardMetrics.dumpSites}</div>
                  <div className={s.panelMetricLabel}>Dump sites</div>
                </div>
              </div>
              <div className={s.panelMetricRow}>
                <span className={cx(s.metricIcon, s.metric_blue)}>
                  <WaterIcon />
                </span>
                <div>
                  <div className={s.panelMetricValue}>{active.cardMetrics.waterBodies}</div>
                  <div className={s.panelMetricLabel}>Water bodies</div>
                </div>
              </div>
              <div className={s.panelMetricRow}>
                <span className={cx(s.metricIcon, s.metric_green)}>
                  <TreeIcon />
                </span>
                <div>
                  <div className={s.panelMetricValue}>{active.cardMetrics.trees}</div>
                  <div className={s.panelMetricLabel}>Trees planted</div>
                </div>
              </div>
            </div>
          </aside>

          <div className={s.panelContent}>
            <div className={s.panelBlock}>
              <header className={s.blockHeader}>
                <span className={cx(s.blockIcon, s.blockIcon_red)}>
                  <ClipboardIcon />
                </span>
                <h3 className={s.blockTitle}>ACTIVITIES</h3>
              </header>
              <ul className={cx(s.blockList, s.blockList_red)}>
                {active.panel.activities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              {active.panel.insight && (
                <div className={s.insightCard}>
                  <span className={s.insightIcon} aria-hidden="true">
                    <LeafIcon />
                  </span>
                  <p>{active.panel.insight}</p>
                </div>
              )}
            </div>

            <div className={s.panelBlock}>
              <header className={s.blockHeader}>
                <span className={cx(s.blockIcon, s.blockIcon_green)}>
                  <LeafIcon />
                </span>
                <h3 className={s.blockTitle}>RESTORED</h3>
              </header>
              <ul className={cx(s.blockList, s.blockList_green)}>
                {active.panel.restored.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <figure className={s.restoredFigure}>
                <img
                  src={active.panel.restoredImage}
                  alt={`Restored area in ${active.name}`}
                  loading="lazy"
                />
                <figcaption>{active.panel.restoredCaption}</figcaption>
              </figure>
            </div>

            <div className={s.panelBlock}>
              <header className={s.blockHeader}>
                <span className={cx(s.blockIcon, s.blockIcon_purple)}>
                  <PeopleIcon />
                </span>
                <h3 className={s.blockTitle}>GROUPS &amp; MEMBERS</h3>
              </header>
              <p className={s.blockDesc}>
                Local groups driving collective action in the village.
              </p>
              <div className={s.tableWrap}>
                <table className={s.groupsTable}>
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

          <div className={s.panelFooter}>
            <span className={s.footerStar} aria-hidden="true">
              <StarIcon className={s.footerStarIcon} />
            </span>
            <span>Small actions. Collective spirit. Lasting change.</span>
          </div>
        </div>
      )}
    </section>
  );
}

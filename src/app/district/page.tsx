"use client";

import { useState } from "react";
import styles from "./district.module.css";
import BeforeAfter from "@/components/before-after";
import Villages from "@/components/villages/villages";
import Mapping from "@/components/mapping";

const cn = (names: string) =>
  names
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(" ");

/* ============================================================
   DATA
   ============================================================ */

const INSIGHTS = [
  {
    id: "geography",
    title: "Geography & Ecology",
    body: (
      <p>
        Dindigul district, in southern Tamil Nadu, sits at a unique ecological
        crossroads — where fertile plains meet the hill ecosystems of the Palani
        and Sirumalai ranges. These landscapes shape the district&apos;s
        climate, water systems, and biodiversity.
      </p>
    ),
    icon: "mountains",
  },
  {
    id: "climate",
    title: "Climate & Rainfall",
    body: (
      <p>
        The plains experience a semi-arid tropical monsoon climate, while hill
        areas such as Kodaikanal have a cooler environment. Average annual
        rainfall: ~836 mm, largely dependent on the North East Monsoon.
      </p>
    ),
    icon: "rain",
  },
  {
    id: "livelihoods",
    title: "Livelihoods",
    body: (
      <p>
        Nearly 70% of the population depends on agriculture and related
        activities. Major crops include onions, groundnuts, grapes, flowers, and
        vegetables.
      </p>
    ),
    icon: "leaf",
  },
  {
    id: "industries",
    title: "Local Industries",
    body: (
      <div>
        <p className={cn("dp-mb-sm")}>Traditional industries include:</p>
        <p className={cn("dp-text-muted")}>
          Iron lock making · Leather tanning · Textile production (Art-Silk
          &amp; Sungudi sarees)
        </p>
      </div>
    ),
    icon: "factory",
  },
];

const CLIMATE_ROWS = [
  { year: 2021, rainfall: "240.5 mm", minC: 19.5, maxC: 37.5 },
  { year: 2022, rainfall: "1303.6 mm", minC: 19.8, maxC: 38.2 },
  { year: 2023, rainfall: "–", minC: 19.0, maxC: 38.7 },
  { year: 2024, rainfall: "–", minC: 20.0, maxC: 38.0 },
  { year: 2025, rainfall: "–", minC: 19.1, maxC: 39.0 },
];

const PROCESS_STEPS = [
  {
    n: 1,
    title: "MAP OUR VILLAGE",
    sub: "What we have & what we face",
    img: "/images/process/step-1.png",
    legend: ["Homes", "Trees", "Water", "Roads", "Dumpsite"],
  },
  {
    n: 2,
    title: "IDENTIFY PRIORITIES",
    sub: "What needs our attention first",
    img: "/images/process/step-2.png",
    legend: [
      "Few trees (heat, erosion)",
      "Poor drainage (flooding)",
      "Dumpsite (health risk)",
      "Limited waste management",
    ],
  },
  {
    n: 3,
    title: "PLAN TOGETHER",
    sub: "Agree on actions, roles and timeline",
    img: "/images/process/step-3.png",
    legend: [
      "Clean dumpsite",
      "Plant trees for shade & soil",
      "Improve drainage",
      "Assign roles & set dates",
      "Review & adjust plan",
    ],
  },
  {
    n: 4,
    title: "TAKE ACTION",
    sub: "Working together for change",
    img: "/images/process/step-4.png",
    legend: [
      "Cleanup campaign",
      "Waste management",
      "Tree planting",
      "Drainage improvement",
    ],
  },
  {
    n: 5,
    title: "CARE & SUSTAIN",
    sub: "Keep it clean, green, and strong",
    img: "/images/process/step-5.png",
    legend: [
      "Water trees",
      "Keep waste areas clean",
      "Community monitoring",
      "Celebrate progress",
    ],
  },
  {
    n: 6,
    title: "THE RESULT",
    sub: "A healthier, greener, stronger village",
    img: "/images/process/step-6.png",
    legend: [
      "Cleaner environment",
      "More shade & less heat",
      "Better drainage",
      "Healthier community",
      "Stronger together",
    ],
  },
];

const VILLAGES = [
  {
    id: "avilipatti",
    name: "AVILIPATTI",
    image: "/images/villages/avilipatti.jpg",
    dump: 4,
    water: 1,
    trees: 120,
    treesLabel: "Trees planted",
  },
  {
    id: "pethampatty",
    name: "PETHAMPATTY",
    image: "/images/villages/pethampatty.jpg",
    dump: 2,
    water: 2,
    trees: 50,
    treesLabel: "Trees planted",
  },
  {
    id: "gopalpatti",
    name: "GOPALPATTI",
    image: "/images/villages/gopalpatti.jpg",
    dump: 6,
    water: 3,
    trees: 100,
    treesLabel: "Tree planted",
  },
  {
    id: "sanarpatty",
    name: "SANARPATTY",
    image: "/images/villages/sanarpatty.jpg",
    dump: 6,
    water: 5,
    trees: 200,
    treesLabel: "Tree Plantation",
  },
];

const VILLAGE_DETAIL = {
  village: "AVILIPATTI",
  blurb:
    "Local actions that turned waste into value and restored common ecosystems.",
  stats: { dump: 4, water: 1, trees: 120 },
  activities: {
    items: ["Dump site: 4", "Water bodies: 1", "Tree planted: 120"],
    note: "Sanitation workers — Collected waste properly and received incentives from the Panchayat",
    badge:
      "Community participation and incentives improved waste management practices.",
  },
  restored: {
    items: ["Dump site: 1", "Water bodies: 1"],
    image: "/images/villages/avilipatti-restored.jpg",
    caption:
      "A restored water body now supports biodiversity and community use.",
  },
  groups: {
    blurb: "Local groups driving collective action in the village.",
    rows: [
      { name: "Gethu Group", count: 13 },
      { name: "Adolescent Boys and Girls", count: 27 },
      { name: "MSME", count: 6 },
      { name: "Vendors Association", count: 13 },
    ],
  },
};

const THEMES = [
  { id: "waste", label: "Waste System Transformation", icon: "trash" },
  { id: "cultural", label: "Green Cultural Practices", icon: "leaf" },
  { id: "plastic", label: "Plastic Accountability Model", icon: "box" },
  { id: "water", label: "Water & Ecological Restoration", icon: "drop" },
  { id: "labour", label: "Labour Dignity & Heat Response", icon: "people" },
  { id: "energy", label: "Renewable Energy & Water Harvesting", icon: "sun" },
  { id: "child", label: "Child Protection & Ethical Business", icon: "shield" },
];

const WASTE_THEME = {
  timeline: "June 2025 — February 2026",
  before: {
    images: [
      { src: "/images/waste/before-1.jpg", label: "Open dumping ground" },
      {
        src: "/images/waste/before-2.jpg",
        label: "Mixed waste without segregation",
      },
      {
        src: "/images/waste/before-3.jpg",
        label: "Irregular collection practices",
      },
    ],
    points: [
      "Waste dump sites were identified across villages",
      "Mixed waste was disposed of without systematic segregation",
      "Meetings were conducted with vendors and households",
      "A community pledge was initiated towards waste segregation and responsible disposal",
    ],
  },
  after: {
    images: [
      { src: "/images/waste/after-1.jpg", label: "Segregated waste at source" },
      {
        src: "/images/waste/after-2.jpg",
        label: "Structured collection system",
      },
      { src: "/images/waste/after-3.jpg", label: "Organic waste composting" },
    ],
    points: [
      "Households are properly segregating milk packets and other plastic waste",
      "Plastic waste is responsibly disposed of through structured collection systems",
      "Hair waste from salons is being segregated and sent to farmers for use as organic manure",
      "Community-level awareness has translated into consistent waste management practices",
    ],
  },
  impact: [
    { label: "Informal dumping reduced", icon: "chart" },
    { label: "Structured waste segregation", icon: "recycle" },
    { label: "Resource recovery enabled", icon: "leaf" },
    { label: "Cleaner environment for all", icon: "globe" },
  ],
};

/* ============================================================
   ICONS (inline SVG)
   ============================================================ */

const Icon = {
  Pin: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        fill="currentColor"
      />
    </svg>
  ),
  Bars: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="12" width="3" height="8" fill="currentColor" />
      <rect x="10" y="8" width="3" height="12" fill="currentColor" />
      <rect x="16" y="4" width="3" height="16" fill="currentColor" />
    </svg>
  ),
  ChevDown: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ChevRight: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M13 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Mountains: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 18l5-8 4 6 3-4 6 6H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Rain: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 14a4 4 0 0 1 0-8 5 5 0 0 1 9.6 1A4 4 0 0 1 17 14H7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 17l-1 3M13 17l-1 3M17 17l-1 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Leaf: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 19c2-10 8-14 14-14 0 7-4 13-14 14zM5 19l5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Factory: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 20V11l5 3V11l5 3V8h6v12H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Trash: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Drop: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Tree: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l5 7h-3l4 6h-4v5h-4v-5H6l4-6H7l5-7z" fill="currentColor" />
    </svg>
  ),
  People: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="9"
        cy="8"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="17"
        cy="9"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c0-2 2-4 4-4s3 2 3 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Box: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Trophy: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 4h10v4a5 5 0 0 1-10 0V4zM5 6H3v2a4 4 0 0 0 4 4M19 6h2v2a4 4 0 0 1-4 4M9 18h6v3H9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Recycle: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 8l-3 5 3 2M17 8l3 5-3 2M7 8h10M9 19l3-3 3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 3v18h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="7" y="13" width="3" height="5" fill="currentColor" />
      <rect x="12" y="9" width="3" height="9" fill="currentColor" />
      <rect x="17" y="6" width="3" height="12" fill="currentColor" />
    </svg>
  ),
  Info: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 8v.5M12 11v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Group: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="8"
        cy="9"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="16"
        cy="9"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M2 19c0-3 3-5 6-5s6 2 6 5M14 14c3 0 6 2 6 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Clipboard: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="6"
        y="4"
        width="12"
        height="17"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="9" y="2" width="6" height="3" rx="1" fill="currentColor" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3l3 6 6 1-4.5 4 1 6L12 17l-5.5 3 1-6L3 10l6-1 3-6z"
        fill="currentColor"
      />
    </svg>
  ),
};

const ICON_BY_KEY: Record<string, any> = {
  mountains: Icon.Mountains,
  rain: Icon.Rain,
  leaf: Icon.Leaf,
  factory: Icon.Factory,
  trash: Icon.Trash,
  drop: Icon.Drop,
  people: Icon.People,
  sun: Icon.Sun,
  shield: Icon.Shield,
  box: Icon.Box,
  chart: Icon.Chart,
  recycle: Icon.Recycle,
  globe: Icon.Globe,
};

/* Stylized Tamil Nadu silhouette. Replace with a real geo-SVG in production. */
const TamilNaduMap = ({ pinX = 38, pinY = 58 }) => (
  <svg className={cn("dp-tn-map")} viewBox="0 0 100 120" aria-hidden="true">
    <path
      d="M48 4 C58 6, 64 14, 66 22 C72 28, 74 38, 70 46 C76 52, 78 62, 72 70 C74 80, 68 90, 60 96 C56 104, 50 112, 42 110 C34 108, 28 100, 26 92 C20 86, 18 76, 22 68 C16 62, 14 50, 20 42 C18 32, 26 22, 36 18 C38 10, 42 4, 48 4 Z"
      className={cn("dp-tn-shape")}
    />
    <circle cx={pinX} cy={pinY} r="6" className={cn("dp-tn-pin-bg")} />
    <g
      transform={`translate(${pinX - 3} ${pinY - 6})`}
      className={cn("dp-tn-pin")}
    >
      <path d="M3 0C1.3 0 0 1.3 0 3c0 2.2 3 6 3 6s3-3.8 3-6c0-1.7-1.3-3-3-3z" />
    </g>
  </svg>
);

/* ============================================================
   SUBCOMPONENTS
   ============================================================ */

function HeroSection() {
  return (
    <section className={cn("dp-hero")}>
      <div className={cn("dp-hero__inner center-content")}>
        <div className={cn("dp-hero__copy")}>
          <div className={cn("dp-locator")}>
            <span className={cn("dp-locator__pin")}>
              <Icon.Pin />
            </span>
            <span>Dindigul, Tamil Nadu</span>
          </div>
          <h1 className={cn("dp-hero__title")}>
            <span>DINDIGUL</span>
            <span className={cn("dp-hero__title--accent")}>IN TAMIL NADU</span>
          </h1>
          <span className={cn("dp-hero__rule")} aria-hidden="true" />
          <p className={cn("dp-hero__lede")}>
            A land of fertile plains, resilient communities, and rich traditions
            — where nature, culture, and livelihoods shape everyday life.
          </p>
          <button type="button" className={cn("dp-btn dp-btn--primary")}>
            <Icon.Bars />
            <span>VIEW CLIMATE DATA</span>
            <Icon.ChevRight />
          </button>
        </div>
        <div className={cn("dp-hero__map")}>
          {/* <TamilNaduMap /> */}
          <img
            src="/images/in-practice/tn.png"
            alt="Tamil Nadu Map"
            style={{ width: 415, height: "auto", maxWidth: "none" }}
          />
        </div>
      </div>
    </section>
  );
}

function KeyInsights() {
  const [open, setOpen] = useState<any>({
    geography: true,
    climate: true,
    livelihoods: true,
    industries: true,
  });
  const toggle = (id: string) => setOpen((p: any) => ({ ...p, [id]: !p[id] }));

  return (
    <section className={cn("dp-insights center-content")}>
      <div className={cn("dp-insights__head")}>
        <p className={cn("dp-eyebrow")}>ABOUT DINDIGUL</p>
        <h2 className={cn("dp-h2")}>Key Insights At A Glance</h2>
        <span className={cn("dp-rule")} aria-hidden="true" />
      </div>
      <div className={cn("dp-insights__list")}>
        {INSIGHTS.map((it) => {
          const I = ICON_BY_KEY[it.icon];
          const isOpen = open[it.id];
          return (
            <div
              key={it.id}
              className={cn(`dp-insight ${isOpen ? "is-open" : ""}`)}
            >
              <button
                type="button"
                className={cn("dp-insight__row")}
                onClick={() => toggle(it.id)}
                aria-expanded={isOpen}
              >
                <span className={cn("dp-insight__icon")}>
                  <I />
                </span>
                <span className={cn("dp-insight__body")}>
                  <span className={cn("dp-insight__title")}>{it.title}</span>
                  {isOpen && (
                    <span className={cn("dp-insight__text")}>{it.body}</span>
                  )}
                </span>
                <span
                  className={cn(`dp-insight__chev ${isOpen ? "is-open" : ""}`)}
                >
                  <Icon.ChevDown />
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ClimateTable() {
  const [unit, setUnit] = useState("C");
  const fmt = (c: any) =>
    unit === "F" ? ((c * 9) / 5 + 32).toFixed(1) : c.toFixed(1);

  return (
    <section className={cn("dp-climate center-content")}>
      <div className={cn("dp-climate__card")}>
        <div className={cn("dp-climate__head")}>
          <h3 className={cn("dp-climate__title")}>
            <span className={cn("dp-climate__icon")}>
              <Icon.Bars />
            </span>
            Climate At A Glance
          </h3>
          <div className={cn("dp-climate__sub")}>
            Year-wise rainfall and temperature overview for Dindigul district.
          </div>
          <div className={cn("dp-toggle")} role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={unit === "C"}
              className={cn(
                `dp-toggle__btn ${unit === "C" ? "is-active" : ""}`,
              )}
              onClick={() => setUnit("C")}
            >
              °C
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={unit === "F"}
              className={cn(
                `dp-toggle__btn ${unit === "F" ? "is-active" : ""}`,
              )}
              onClick={() => setUnit("F")}
            >
              °F
            </button>
          </div>
        </div>

        <div className={cn("dp-table-wrap")}>
          <table className={cn("dp-table")}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Annual Rainfall (mm)</th>
                <th>Min Temperature (°{unit})</th>
                <th>Max Temperature (°{unit})</th>
              </tr>
            </thead>
            <tbody>
              {CLIMATE_ROWS.map((r) => (
                <tr key={r.year}>
                  <td>{r.year}</td>
                  <td>{r.rainfall}</td>
                  <td>{fmt(r.minC)}</td>
                  <td>{fmt(r.maxC)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={cn("dp-climate__foot")}>
          <span className={cn("dp-climate__info")}>
            <Icon.Info />
          </span>
          <span>
            Rainfall varies year to year, largely influenced by the North East
            Monsoon.
          </span>
          <span className={cn("dp-climate__weather")} aria-hidden="true">
            <Icon.Sun />
            <Icon.Rain />
          </span>
        </div>
      </div>
    </section>
  );
}

function VillageProcess() {
  return (
    <section className={cn("dp-process")}>
      <div className={cn("dp-process__grid")}>
        <div className={cn("dp-process__intro")}>
          <h3 className={cn("dp-process__intro-title")}>
            MAPPING OUR VILLAGE NEEDS &amp; RESOURCES, GUIDING LOCAL ACTION
          </h3>
          <p className={cn("dp-process__intro-text")}>
            From identifying challenges to taking action and growing together
            for a cleaner, greener, and stronger village.
          </p>
          <ol className={cn("dp-process__intro-list")}>
            {PROCESS_STEPS.map((s) => (
              <li key={s.n}>
                <span className={cn("dp-process__num")}>{s.n}</span>
                <div>
                  <p className={cn("dp-process__step-title")}>{s.title}</p>
                  <p className={cn("dp-process__step-sub")}>{s.sub}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={cn("dp-process__intro-foot")}>
            <Icon.Leaf />
            <span>
              Locally driven. Everyone involved.
              <br />
              Sustainable transformation that lasts.
            </span>
          </p>
        </div>

        {PROCESS_STEPS.map((s) => (
          <article key={s.n} className={cn("dp-step")}>
            <header className={cn("dp-step__head")}>
              <h4>
                {s.n}. {s.title}
              </h4>
              <p>{s.sub}</p>
            </header>
            <div className={cn("dp-step__art")}>
              <img src={s.img} alt={`${s.title} illustration`} loading="lazy" />
            </div>
            <ul className={cn("dp-step__legend")}>
              {s.legend.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function VillagesSection() {
  return (
    <section className={cn("dp-villages")}>
      <header className={cn("dp-villages__head")}>
        <span className={cn("dp-villages__badge")}>
          <Icon.Group />
        </span>
        <div>
          <h2 className={cn("dp-h2 dp-h2--inline")}>
            <span className={cn("dp-villages__pbjt")}>PBJT</span> In Four
            Villages Across Dindigul
          </h2>
          <p className={cn("dp-villages__sub")}>
            Community-Led actions restoring ecosystems, reducing waste and
            building local livelihoods.
          </p>
        </div>
      </header>

      <div className={cn("dp-villages__grid")}>
        {VILLAGES.map((v) => (
          <article key={v.id} className={cn("dp-village-card")}>
            <div className={cn("dp-village-card__media")}>
              <img src={v.image} alt={v.name} loading="lazy" />
            </div>
            <div className={cn("dp-village-card__body")}>
              <h4 className={cn("dp-village-card__name")}>
                <span className={cn("dp-village-card__pin")}>
                  <Icon.Pin />
                </span>
                {v.name}
              </h4>
              <ul className={cn("dp-village-card__stats")}>
                <li>
                  <span className={cn("dp-stat dp-stat--red")}>
                    <Icon.Trash />
                  </span>
                  <strong>{v.dump}</strong>
                  <small>Dump sites</small>
                </li>
                <li>
                  <span className={cn("dp-stat dp-stat--blue")}>
                    <Icon.Drop />
                  </span>
                  <strong>{v.water}</strong>
                  <small>Water bodies</small>
                </li>
                <li>
                  <span className={cn("dp-stat dp-stat--green")}>
                    <Icon.Tree />
                  </span>
                  <strong>{v.trees}</strong>
                  <small>{v.treesLabel}</small>
                </li>
              </ul>
              <a href="#" className={cn("dp-village-card__link")}>
                View More <Icon.ArrowRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VillageDetail() {
  const d = VILLAGE_DETAIL;
  return (
    <section className={cn("dp-detail")}>
      <aside className={cn("dp-detail__side")}>
        <h4 className={cn("dp-detail__name")}>
          <span className={cn("dp-detail__pin")}>
            <Icon.Pin />
          </span>
          {d.village}
        </h4>
        <p className={cn("dp-detail__blurb")}>{d.blurb}</p>
        <ul className={cn("dp-detail__stats")}>
          <li>
            <span className={cn("dp-stat dp-stat--red")}>
              <Icon.Trash />
            </span>
            <strong>{d.stats.dump}</strong>
            <small>Dump sites</small>
          </li>
          <li>
            <span className={cn("dp-stat dp-stat--blue")}>
              <Icon.Drop />
            </span>
            <strong>{d.stats.water}</strong>
            <small>Water bodies</small>
          </li>
          <li>
            <span className={cn("dp-stat dp-stat--green")}>
              <Icon.Tree />
            </span>
            <strong>{d.stats.trees}</strong>
            <small>Trees planted</small>
          </li>
        </ul>
      </aside>

      <div className={cn("dp-detail__panels")}>
        <div className={cn("dp-panel")}>
          <header className={cn("dp-panel__head")}>
            <span className={cn("dp-panel__icon dp-panel__icon--red")}>
              <Icon.Clipboard />
            </span>
            <h5>ACTIVITIES</h5>
          </header>
          <ul className={cn("dp-panel__list")}>
            {d.activities.items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
            <li className={cn("dp-panel__list-strong")}>{d.activities.note}</li>
          </ul>
          <div className={cn("dp-panel__badge")}>
            <Icon.Star />
            <span>{d.activities.badge}</span>
          </div>
        </div>

        <div className={cn("dp-panel")}>
          <header className={cn("dp-panel__head")}>
            <span className={cn("dp-panel__icon dp-panel__icon--green")}>
              <Icon.Leaf />
            </span>
            <h5>RESTORED</h5>
          </header>
          <ul className={cn("dp-panel__list")}>
            {d.restored.items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
          <figure className={cn("dp-panel__figure")}>
            <img
              src={d.restored.image}
              alt="Restored water body"
              loading="lazy"
            />
            <figcaption>{d.restored.caption}</figcaption>
          </figure>
        </div>

        <div className={cn("dp-panel")}>
          <header className={cn("dp-panel__head")}>
            <span className={cn("dp-panel__icon dp-panel__icon--purple")}>
              <Icon.Group />
            </span>
            <h5>GROUPS &amp; MEMBERS</h5>
          </header>
          <p className={cn("dp-panel__lede")}>{d.groups.blurb}</p>
          <table className={cn("dp-mini-table")}>
            <thead>
              <tr>
                <th>Groups</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {d.groups.rows.map((r) => (
                <tr key={r.name}>
                  <td>{r.name}</td>
                  <td>{r.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className={cn("dp-detail__motto")}>
        <span className={cn("dp-detail__motto-star")}>
          <Icon.Star />
        </span>
        Small actions. Collective spirit. Lasting change.
      </p>
    </section>
  );
}

function BeforeAfterJourney() {
  const [active, setActive] = useState("waste");

  return (
    <section className={cn("dp-journey")}>
      <header className={cn("dp-journey__head")}>
        <p className={cn("dp-eyebrow dp-eyebrow--dark")}>DINDIGUL</p>
        <div className={cn("dp-journey__title-row")}>
          <h2 className={cn("dp-h2")}>PBJT: The Before and After Journey</h2>
          <span className={cn("dp-journey__pill")}>
            <Icon.Group />
            Built by communities. Sustained together.
          </span>
        </div>
        <p className={cn("dp-journey__sub")}>
          Rooted in collaboration. Measurable impact across seven key themes.
        </p>
      </header>

      <div className={cn("dp-tabs")} role="tablist">
        {THEMES.map((t) => {
          const I = ICON_BY_KEY[t.icon] || Icon.Leaf;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className={cn(`dp-tab ${active === t.id ? "is-active" : ""}`)}
              onClick={() => setActive(t.id)}
            >
              <span className={cn("dp-tab__icon")}>
                <I />
              </span>
              <span className={cn("dp-tab__label")}>{t.label}</span>
            </button>
          );
        })}
      </div>

      {active === "waste" ? (
        <WasteThemePanel />
      ) : (
        <div className={cn("dp-journey__placeholder")}>
          Content for this theme will appear here.
        </div>
      )}

      <footer className={cn("dp-journey__foot")}>
        <button type="button" className={cn("dp-btn dp-btn--ghost")}>
          ← Previous
        </button>
        <div className={cn("dp-dots")} aria-hidden="true">
          <span className={cn("is-active")} />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <button
          type="button"
          className={cn("dp-btn dp-btn--primary dp-btn--sm")}
        >
          Next <Icon.ArrowRight />
        </button>
      </footer>
    </section>
  );
}

function WasteThemePanel() {
  const t = WASTE_THEME;
  return (
    <div className={cn("dp-theme")}>
      <div className={cn("dp-theme__main")}>
        <header className={cn("dp-theme__head")}>
          <span className={cn("dp-theme__head-icon")}>
            <Icon.Trash />
          </span>
          <div>
            <h3>Waste System Transformation</h3>
            <p className={cn("dp-theme__time")}>📅 Timeline: {t.timeline}</p>
          </div>
        </header>

        <div className={cn("dp-ba-grid")}>
          <BACard
            variant="before"
            title={`Before (June 2025)`}
            block={t.before}
          />
          <BACard
            variant="after"
            title={`After (By February 2026)`}
            block={t.after}
          />
        </div>
      </div>

      <aside className={cn("dp-impact")}>
        <header className={cn("dp-impact__head")}>
          <span className={cn("dp-impact__trophy")}>
            <Icon.Trophy />
          </span>
          <h4>IMPACT SNAPSHOT</h4>
          <p>What changed</p>
        </header>
        <ul className={cn("dp-impact__list")}>
          {t.impact.map((it, i) => {
            const I = ICON_BY_KEY[it.icon] || Icon.Leaf;
            return (
              <li key={i}>
                <span className={cn("dp-impact__icon")}>
                  <I />
                </span>
                {it.label}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

function BACard({
  variant,
  title,
  block,
}: {
  variant: any;
  title: any;
  block: any;
}) {
  return (
    <div className={cn(`dp-ba dp-ba--${variant}`)}>
      <header className={cn("dp-ba__head")}>
        <span className={cn("dp-ba__pill")}>
          {variant === "before" ? "!" : "✓"}
        </span>
        <span>{title}</span>
      </header>
      <div className={cn("dp-ba__images")}>
        {block.images.map((im: any, i: any) => (
          <figure key={i} className={cn("dp-ba__fig")}>
            <img src={im.src} alt={im.label} loading="lazy" />
            <figcaption>{im.label}</figcaption>
          </figure>
        ))}
      </div>
      <ul className={cn("dp-ba__points")}>
        {block.points.map((p: any, i: any) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   MAIN
   ============================================================ */

export default function DindigulPage() {
  return (
    <main className={cn("dp-page")}>
      <HeroSection />
      <KeyInsights />
      <ClimateTable />
      {/* <VillageProcess /> */}
      <Mapping />
      {/* <VillagesSection /> */}
      {/* <VillageDetail /> */}
      <Villages />
      {/* <BeforeAfterJourney /> */}
      <BeforeAfter />
    </main>
  );
}

"use client";

import Link from "next/link";
import styles from "./village-location.module.css";

interface District {
  id: number;
  name: string;
  description: string;
  tag: string;
  icon?: string;
  img?: string;
  num: string;
  href: string;
}

const districts: District[] = [
  {
    id: 1,
    name: "Dindigul",
    description: "Central hills district with rich agricultural heritage",
    tag: "Central",
    icon: "🏔️",
    img: "/images/in-practice/location-1b.png",
    num: "01",
    href: "/dindigal",
  },
  {
    id: 2,
    name: "Virudhnagar",
    description: "Southern trade hub known for crackers and textiles",
    tag: "Southern",
    icon: "🌾",
    img: "/images/in-practice/location-2b.png",
    num: "02",
    href: "#",
  },
  {
    id: 3,
    name: "Krishnagiri",
    description: "Northern border district growing in industry and mangoes",
    tag: "Northern",
    icon: "⛰️",
    img: "/images/in-practice/location-3b.png",
    num: "03",
    href: "#",
  },
  {
    id: 4,
    name: "Hosur",
    description: "Fast-growing EV and electronics manufacturing corridor",
    tag: "Industrial",
    icon: "🏙️",
    img: "/images/in-practice/location-4b.png",
    num: "04",
    href: "#",
  },
];

const mapStats = [
  { value: "38", label: "Districts" },
  { value: "4", label: "Selected" },
  { value: "77M+", label: "Population" },
  { value: "130K", label: "Sq km" },
];

interface VillageLocationProps {
  onSelect?: (district: District) => void;
}

export default function VillageLocation({ onSelect }: VillageLocationProps) {
  return (
    <div className={styles.page}>
      {/* Left Panel */}
      <div className={styles.left}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Tamil Nadu, India
        </div>

        <h1 className={styles.heading}>Explore your district</h1>
        <p className={styles.sub}>
          Select a district to surface local stories, changes, and civic
          updates.
        </p>

        <div className={styles.grid}>
          {districts.map((d) => (
            <Link
              href={d.href}
              key={d.id}
              className={styles.card}
              onClick={() => onSelect?.(d)}
            >
              <div className="flex gap-2">
                <div className={styles.cardBody + " flex-grow"}>
                  <div className={styles.cardName}>{d.name}</div>
                  <div className={styles.cardDesc}>{d.description}</div>
                </div>
                <div>
                  <div className={styles.cardIcon}>
                    <img src={d.img} alt={`${d.name} district`} />
                  </div>
                </div>
              </div>

              <div className={styles.cardFoot}>
                <span className={styles.cardTag}>{d.tag}</span>
                <div className={styles.cardArrow}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M2.5 6.5h8M7 3l3.5 3.5L7 10"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className={styles.right}>
        <div className="mt-5">
          <img src="/images/in-practice/tn.png" alt="" />
        </div>

        <div className={styles.statsGrid}>
          {mapStats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statVal}>{s.value}</div>
              <div className={styles.statLbl}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

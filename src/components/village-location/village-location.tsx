"use client";

import Link from "next/link";
import styles from "./village-location.module.css";

interface District {
  id: number;
  name: string;
  slugName: string;
  description: string;
  tag: string;
  icon?: string;
  img?: string;
  num: string;
  hasDetails: boolean;
}

const districts: District[] = [
  {
    id: 1,
    name: "Dindigul",
    slugName: "dindigul",
    description: "Central hills district with rich agricultural heritage",
    tag: "Central",
    icon: "🏔️",
    img: "/images/in-practice/location-1d.png",
    num: "01",
    hasDetails: true,
  },
  {
    id: 2,
    name: "Virudhnagar",
    slugName: "virudhnagar",
    description: "Southern trade hub known for crackers and textiles",
    tag: "Southern",
    icon: "🌾",
    img: "/images/in-practice/location-2d.png",
    num: "02",
    hasDetails: true,
  },
  {
    id: 3,
    name: "Krishnagiri",
    slugName: "krishnagiri",
    description: "Northern border district growing in industry and mangoes",
    tag: "Northern",
    icon: "⛰️",
    img: "/images/in-practice/location-3d.png",
    num: "03",
    hasDetails: true,
  },
  {
    id: 4,
    name: "Hosur",
    slugName: "hosur",
    description: "Fast-growing EV and electronics manufacturing corridor",
    tag: "Industrial",
    icon: "🏙️",
    img: "/images/in-practice/location-4d.png",
    num: "04",
    hasDetails: true,
  },
  {
    id: 5,
    name: "Delhi NCR",
    slugName: "delhi-ncr",
    description: "Bustling capital region and major economic hub",
    tag: "Capital",
    icon: "🏢",
    img: "/images/in-practice/location-1d.png",
    num: "05",
    hasDetails: false,
  },
  {
    id: 6,
    name: "Patna",
    slugName: "patna",
    description: "Historic city along the banks of the Ganges river",
    tag: "Eastern",
    icon: "🏛️",
    img: "/images/in-practice/location-2d.png",
    num: "06",
    hasDetails: false,
  },
  {
    id: 7,
    name: "Shivajinagar",
    slugName: "shivajinagar",
    description: "Vibrant cultural and commercial neighborhood",
    tag: "Western",
    icon: "🏘️",
    img: "/images/in-practice/location-3d.png",
    num: "07",
    hasDetails: false,
  },
  {
    id: 8,
    name: "Chattisgarh",
    slugName: "chattisgarh",
    description: "Resource-rich state known for its tribal culture and forests",
    tag: "Central",
    icon: "🌳",
    img: "/images/in-practice/location-4d.png",
    num: "08",
    hasDetails: false,
  },
  {
    id: 9,
    name: "Madhya Pradesh",
    slugName: "madhya-pradesh",
    description: "The heart of India, famous for wildlife reserves and temples",
    tag: "Central",
    icon: "🐅",
    img: "/images/in-practice/location-1d.png",
    num: "09",
    hasDetails: false,
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
          India
        </div>

        <h1 className={styles.heading}>Explore your district</h1>
        <p className={styles.sub}>
          Select a district to surface local stories, changes, and civic
          updates.
        </p>

        <div className={styles.grid}>
          {districts.map((d) => (
            <Link
              href={
                !d.hasDetails ? "#" : `/in-practice/district/${d.slugName}`
              }
              key={d.id}
              className={
                styles.card +
                " " +
                (!d.hasDetails ? styles.disabled : styles.active)
              }
              onClick={() => onSelect?.(d)}
            >
              <div className="flex gap-2">
                <div className={styles.cardBody + " flex-grow"}>
                  <div className={styles.cardName}>{d.name}</div>
                  {/* <div className={styles.cardDesc}>{d.description}</div> */}
                </div>
                <div>
                  <div className={styles.cardIcon}>
                    <img src={d.img} alt={`${d.name} district`} />
                  </div>
                </div>
              </div>

              <div className={styles.cardFoot}>
                <span className={styles.cardTag}>
                  {!d.hasDetails ? (
                    <span className={styles.commingSoon}>Coming soon...</span>
                  ) : (
                    <span className={styles.viewMore}>View more</span>
                  )}
                </span>
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
          <img src="/images/in-practice/india-map-02.png" alt="" />
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

"use client";

/*
 * PbjtHero — Next.js client component.
 *
 * Styling split (intentional):
 *   - Tailwind  -> layout, spacing, breakpoints, type utilities
 *   - CSS Module -> backgrounds, motion, radial geometry, decorative detail
 *
 * Dependency: lucide-react  ->  npm i lucide-react
 *
 * Props (all optional):
 *   onExplore()      - fired by the "Explore Framework" button
 *   onMethodology()  - fired by the "View Methodology" button
 */

import React from "react";
import {
  Building2,
  Factory,
  Store,
  Users,
  Leaf,
  Network,
  User,
  ArrowRight,
} from "lucide-react";
import styles from "./PbjtHero.module.css";

// x / y are percentages inside the square radial diagram.
const STAKEHOLDERS = [
  { label: "Businesses", Icon: Building2, x: 50, y: 9 },
  { label: "Industry", Icon: Factory, x: 85, y: 27 },
  { label: "Vendors", Icon: Store, x: 91, y: 56 },
  { label: "Communities", Icon: Users, x: 73, y: 85 },
  { label: "Environment", Icon: Leaf, x: 35, y: 91 },
  { label: "MSMEs", Icon: Network, x: 10, y: 64 },
  { label: "Workers", Icon: User, x: 10, y: 34 },
];

function NodeCard({ Icon, label }) {
  return (
    <div className={styles.nodeCard}>
      <Icon size={22} strokeWidth={1.9} className="text-red-600" />
      <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-slate-700">
        {label}
      </span>
    </div>
  );
}

function Disc({ className = "" }) {
  return (
    <div className={`${styles.disc} ${styles.discPulse} ${className}`}>
      <Users size={34} strokeWidth={1.9} />
      <span className="mt-1 px-3 text-sm font-bold leading-tight sm:text-base">
        Shared
        <br />
        Responsibility
      </span>
    </div>
  );
}

/* Radial layout: only legible at tablet width and up. */
function RadialDiagram() {
  return (
    <div className={`${styles.radial} hidden md:block`}>
      <svg
        className={styles.lines}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {STAKEHOLDERS.map((s) => (
          <line
            key={s.label}
            className={styles.line}
            x1="50"
            y1="50"
            x2={s.x}
            y2={s.y}
          />
        ))}
      </svg>

      <div className={styles.ring} aria-hidden="true" />
      <Disc className={styles.centerAbs} />

      {STAKEHOLDERS.map((s, i) => (
        <div
          key={s.label}
          className={`${styles.node} ${styles.reveal}`}
          style={{ "--x": s.x, "--y": s.y, "--i": i + 2 }}
        >
          <NodeCard Icon={s.Icon} label={s.label} />
        </div>
      ))}
    </div>
  );
}

/* Mobile fallback: the radial would be unreadable, so it becomes a grid. */
function StackedDiagram() {
  return (
    <div className="flex flex-col items-center gap-6 md:hidden">
      <Disc className={styles.discStacked} />
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
        {STAKEHOLDERS.map((s) => (
          <NodeCard key={s.label} Icon={s.Icon} label={s.label} />
        ))}
      </div>
    </div>
  );
}

export default function PbjtHero() {
  return (
    <section className={styles.root}>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-20">
        {/* Copy column */}
        <div>
          <span
            className={`${styles.badge} ${styles.reveal} inline-block px-3 py-1 text-xs font-bold uppercase`}
            style={{ "--i": 0 }}
          >
            PBJT Framework
          </span>

          <h1
            className={`${styles.headline} ${styles.reveal} mt-6 font-extrabold`}
            style={{ "--i": 1 }}
          >
            A place-based framework for{" "}
            <span className={styles.mark}>shared responsibility</span> and{" "}
            <span className={styles.mark}>community-led change</span>
          </h1>

          <div
            className={`${styles.reveal} mt-5 h-1 w-14 rounded-full bg-red-600`}
            style={{ "--i": 2 }}
          />

          <p
            className={`${styles.reveal} mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600`}
            style={{ "--i": 3 }}
          >
            PBJT is a collaborative framework designed to help businesses,
            workers, MSMEs, vendors and communities respond collectively to
            environmental and social challenges.
          </p>
          <p
            className={`${styles.reveal} mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600`}
            style={{ "--i": 4 }}
          >
            Rather than treating sustainability as compliance, PBJT focuses on
            relationships, accountability and local realities.
          </p>

          <div
            className={`${styles.reveal} mt-8 flex flex-wrap gap-3`}
            style={{ "--i": 5 }}
          >
            <button
              type="button"
              onClick={() => {}}
              className={`${styles.cta} ${styles.ctaPrimary}`}
            >
              Explore Framework
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => {}}
              className={`${styles.cta} ${styles.ctaGhost}`}
            >
              View Methodology
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Diagram column */}
        <div className={styles.reveal} style={{ "--i": 2 }}>
          <RadialDiagram />
          <StackedDiagram />
        </div>
      </div>
    </section>
  );
}

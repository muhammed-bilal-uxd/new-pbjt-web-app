"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./HowPBJTWorks.module.css";

const steps = [
  {
    id: 1,
    title: "Listen & Understand",
    description:
      "Engage with workers, MSMEs, vendors, and communities to understand lived realities, needs, and aspirations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20c0-5.523 4.477-10 10-10s10 4.477 10 10v4a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4v-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 20h8M20 25h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 34c0 2 1 4 5 4s5-2 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="34" cy="30" r="5" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 30h4M34 28v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Map & Assess",
    description:
      "Map local ecological, economic, and social contexts. Identify vulnerabilities, risks, and existing strengths.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="21" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M27 26l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 21h6M22 18v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 34l4-3M35 34l-4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Participate & Include",
    description:
      "Ensure meaningful participation of workers, informal labour, MSMEs, women, youth, and marginalised groups in decision-making.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="19" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="31" cy="19" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="17" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 34c0-4.418 3.134-8 7-8M31 26c3.866 0 7 3.582 7 8M17 26c3.866 0 7 3.582 7 8s3.134 8 7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Co-Design Solutions",
    description:
      "Co-create locally relevant strategies that balance environmental goals with livelihoods, dignity, and equity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 14v4M24 30v4M14 24h4M30 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 24h8M24 20v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Act & Support",
    description:
      "Strengthen capacities, mobilise resources, and support just transition actions on the ground.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 34c-6 0-10-4-10-10 0-3 1-5 2-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 14s1 4 4 6c3 2 7 1 7 1s-1 4-4 6-7 1-7 1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 34v-6M21 31l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Monitor, Learn & Adapt",
    description:
      "Track impacts together, learn continuously, and adapt for long-term resilience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 15v-3M24 33v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 22H14M34 22h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 17l-2-2M31 17l2-2M19 27l-2 2M31 27l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="22" r="3" fill="currentColor" opacity="0.2" />
        <path d="M14 38c2-2 5-3 10-3s8 1 10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HowPBJTWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.sectionVisible : ""}`}
      aria-labelledby="pbjt-heading"
    >
      <header className={styles.header}>
        <span className={styles.sectionNumber} aria-hidden="true">02</span>
        <div className={styles.divider} aria-hidden="true" />
        <h2 id="pbjt-heading" className={styles.heading}>How PBJT Works</h2>
      </header>

      <div className={styles.stepsWrapper} role="list">
        {steps.map((step, i) => (
          <React.Fragment key={step.id}>
            <article
              role="listitem"
              className={`${styles.step} ${visible ? styles.stepVisible : ""} ${
                activeStep === step.id ? styles.stepActive : ""
              }`}
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
              onFocus={() => setActiveStep(step.id)}
              onBlur={() => setActiveStep(null)}
              tabIndex={0}
              aria-label={`Step ${step.id}: ${step.title}`}
            >
              <div className={styles.iconRing} aria-hidden="true">
                <span className={styles.stepBadge}>{step.id}</span>
                <div className={styles.iconWrap}>{step.icon}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </article>

            {i < steps.length - 1 && (
              <div className={styles.arrowWrap} aria-hidden="true">
                <svg viewBox="0 0 24 24" className={styles.arrowIcon} fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className={styles.feedbackBand} aria-label="Continuous learning, feedback and adaptation">
        <div className={styles.feedbackLine}>
          <div className={styles.feedbackArrowLeft} aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className={styles.feedbackLabel}>Continuous learning, feedback and adaptation</span>
          <div className={styles.feedbackArrowRight} aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

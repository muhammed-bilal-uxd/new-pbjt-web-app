"use client";

import { useState } from "react";
import {
  Users,
  MapPin,
  MessageSquare,
  Lock,
  HardHat,
  User,
  GraduationCap,
  Store,
  Leaf,
  Sparkles,
  Quote,
  Play,
  ArrowRight,
} from "lucide-react";
import styles from "./Testimonials.module.css";

const STATS = [
  { Icon: Users, value: "250+", label: "People Engaged" },
  { Icon: MapPin, value: "5", label: "Villages" },
  { Icon: MessageSquare, value: "60+", label: "Stories Collected" },
  { Icon: Lock, value: "12+", label: "Video Stories" },
];

const FILTERS = [
  { id: "all", label: "All Stories", Icon: Sparkles },
  { id: "workers", label: "Workers", Icon: HardHat },
  { id: "women", label: "Women", Icon: User },
  { id: "youth", label: "Youth", Icon: GraduationCap },
  { id: "leaders", label: "Community Leaders", Icon: Users },
  { id: "business", label: "Small Businesses", Icon: Store },
  { id: "environment", label: "Environment", Icon: Leaf },
];

const TESTIMONIALS = [
  {
    quote: "Green jobs meant little without wage security.",
    text: "We needed steady income, not just good intentions.",
    name: "Kumar",
    role: "Waste Worker, Dindigul",
    avatar: "https://placehold.co/80x80/c8102e/ffffff?text=K",
  },
  {
    quote:
      "Waste systems improved, but it also increased unpaid labour for women.",
    text: "We do more, but it is not always visible.",
    name: "Malika",
    role: "Home-based Worker",
    avatar: "https://placehold.co/80x80/c8102e/ffffff?text=M",
  },
  {
    quote: "We adapted sustainability to survive. Now, we're proud to lead it.",
    text: "Small changes, together, made a big difference.",
    name: "Ramesh",
    role: "Youth Volunteer",
    avatar: "https://placehold.co/80x80/c8102e/ffffff?text=R",
  },
];

const VIDEOS = [
  {
    title: "From Waste to Worth: Our Village Journey",
    location: "Sanarpatty, Dindigul",
    duration: "02:46",
    thumbnail: "/images/testimonials/testimonials-01.png",
    featured: true,
  },
  {
    title: "Water Changes Everything",
    location: "Gopalpatty, Dindigul",
    duration: "01:58",
    thumbnail: "/images/testimonials/testimonials-02.png",
  },
  {
    title: "Women Leading Waste Management",
    location: "Avilipatti, Dindigul",
    duration: "02:12",
    thumbnail: "/images/testimonials/testimonials-03.png",
  },
];

const MOMENTS = [
  {
    title: "Waste Segregation Drive",
    location: "Sanarpatty",
    image: "/images/testimonials/testimonials-04.png",
  },
  {
    title: "Water Body Restoration",
    location: "Gopalpatty",
    image: "/images/testimonials/testimonials-05.png",
  },
  {
    title: "Tree Plantation",
    location: "Pettampatty",
    image: "/images/testimonials/testimonials-06.png",
  },
  {
    title: "Plastic-Free Shop",
    location: "Avilipatti",
    image: "/images/testimonials/testimonials-07.png",
  },
  {
    title: "Community Meeting",
    location: "Sanarpatty",
    image: "/images/testimonials/testimonials-08.png",
  },
];

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const featuredVideo = VIDEOS.find((v) => v.featured);
  const otherVideos = VIDEOS.filter((v) => !v.featured);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroContent + " center-content"}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>
              <span className={styles.dot}></span> TESTIMONIALS
            </span>
            <h1 className={styles.heroTitle}>Stories from the Ground</h1>
            <p className={styles.heroSubtitle}>
              Real voices. Real experiences. Real change.
            </p>
            <p className={styles.heroDesc}>
              These are stories of workers, community members, and local leaders
              who are living the transition every day.
            </p>
          </div>
          <div className={styles.heroStats}>
            {STATS.map(({ Icon, value, label }) => (
              <div key={label} className={styles.statCard}>
                <Icon size={22} strokeWidth={2} />
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.page + " center-content"}>
        {/* ===== FILTERS ===== */}
        <div className={styles.filtersWrap}>
          <div className={styles.filters}>
            {FILTERS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`${styles.filterBtn} ${activeFilter === id ? styles.filterActive : ""}`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <section className={styles.contentGrid}>
          {/* Voices */}
          <div className={styles.voicesCol}>
            <div className={styles.colHeader}>
              <h2 className={styles.h2}>Voices that Inspire Change</h2>
              <p className={styles.sectionSub}>
                Every quote, every story, every image is a piece of the
                transition puzzle.
              </p>
            </div>

            <div className={styles.voicesGrid}>
              {TESTIMONIALS.map((t, i) => (
                <article key={i} className={styles.voiceCard}>
                  <div className={styles.quoteBadge}>
                    <Quote size={12} fill="white" strokeWidth={0} />
                  </div>
                  <p className={styles.voiceQuote}>{t.quote}</p>
                  <p className={styles.voiceText}>{t.text}</p>
                  <div className={styles.voiceAuthor}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={styles.avatar}
                    />
                    <div>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorRole}>{t.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Videos */}
          <div className={styles.videosCol}>
            <div className={styles.colHeader}>
              <div className={styles.headerRow}>
                <h2 className={styles.h2}>Stories in Motion</h2>
                <a href="#" className={styles.viewAll}>
                  View All Videos <ArrowRight size={14} />
                </a>
              </div>
              <p className={styles.sectionSub}>
                Watch and listen to real experiences from the field.
              </p>
            </div>

            {featuredVideo && (
              <div className={`${styles.videoCard} ${styles.videoFeatured}`}>
                <div className={styles.videoThumb}>
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                  />
                  <button className={styles.playBtn} aria-label="Play video">
                    <Play size={18} fill="white" strokeWidth={0} />
                  </button>
                  <span className={styles.duration}>
                    {featuredVideo.duration}
                  </span>
                </div>
                <div className={styles.videoMeta}>
                  <h3 className={styles.videoTitle}>
                    &ldquo;{featuredVideo.title}&rdquo;
                  </h3>
                  <p className={styles.videoLoc}>{featuredVideo.location}</p>
                </div>
              </div>
            )}

            <div className={styles.videoSubGrid}>
              {otherVideos.map((v, i) => (
                <div key={i} className={styles.videoCard}>
                  <div className={styles.videoThumb}>
                    <img src={v.thumbnail} alt={v.title} />
                    <button
                      className={styles.playBtnSm}
                      aria-label="Play video"
                    >
                      <Play size={12} fill="white" strokeWidth={0} />
                    </button>
                    <span className={styles.durationSm}>{v.duration}</span>
                  </div>
                  <div className={styles.videoMeta}>
                    <h4 className={styles.videoTitleSm}>
                      &ldquo;{v.title}&rdquo;
                    </h4>
                    <p className={styles.videoLocSm}>{v.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MOMENTS ===== */}
        <section className={styles.moments}>
          <div className={styles.headerRow}>
            <div>
              <h2 className={styles.h2}>Moments of Change</h2>
              <p className={styles.sectionSub}>
                Snapshots from the ground that tell powerful stories.
              </p>
            </div>
            <a href="#" className={styles.viewAll}>
              View All Photos <ArrowRight size={14} />
            </a>
          </div>

          <div className={styles.momentsGrid}>
            {MOMENTS.map((m, i) => (
              <figure key={i} className={styles.momentCard}>
                <div className={styles.momentImg}>
                  <img src={m.image} alt={m.title} />
                </div>
                <figcaption>
                  <div className={styles.momentTitle}>{m.title}</div>
                  <div className={styles.momentLoc}>{m.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <Quote
                size={28}
                className={styles.ctaQuote}
                fill="#c8102e"
                strokeWidth={0}
              />
              <div>
                <h3 className={styles.ctaTitle}>
                  These are not just stories. They are the foundation of a just
                  transition.
                </h3>
                <p className={styles.ctaSub}>
                  Real people. Real challenges. Real progress.
                </p>
              </div>
            </div>
            {/* <button className={styles.ctaBtn}>
              Share Your Story <ArrowRight size={16} />
            </button> */}
          </div>
        </section>
      </div>
    </div>
  );
}

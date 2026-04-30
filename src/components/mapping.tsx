import {
  MapPin,
  AlertCircle,
  Users,
  Shovel,
  Sprout,
  Star,
  Home,
  TreePine,
  Droplet,
  Trash2,
  CloudRain,
  Calendar,
  Waves,
  Check,
  Route,
} from "lucide-react";
import type { ReactNode } from "react";

/* ============================================================
   PAGE STYLES
   All CSS lives in this constant. Class names are prefixed
   (vui-) to keep the global namespace clean.
   ============================================================ */
const STYLES = `
:root {
  --color-primary: #d62828;
  --color-primary-dark: #a51d1d;
  --color-primary-soft: #fdecec;
  --color-primary-tint: #fef5f5;
  --color-bg: #fafaf7;
  --color-surface: #ffffff;
  --color-surface-alt: #f4f3ee;
  --color-text: #1a1a1a;
  --color-text-muted: #555;
  --color-text-soft: #777;
  --color-border: #ececec;
  --color-water: #4a9fd9;
  --color-leaf: #5cab5c;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.06);
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --font-display: "Bricolage Grotesque", "SF Pro Display", system-ui, sans-serif;
  --font-body: "Plus Jakarta Sans", "SF Pro Text", system-ui, sans-serif;
}

.vui-main * { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }
body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  background-image:
    radial-gradient(circle at 0% 0%, rgba(214,40,40,0.04) 0%, transparent 35%),
    radial-gradient(circle at 100% 100%, rgba(92,171,92,0.04) 0%, transparent 35%);
  background-attachment: fixed;
}
img, svg { display: block; max-width: 100%; }
ul, ol { list-style: none; }
h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}
:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; border-radius: 4px; }

/* Layout */
.vui-main { min-height: 100vh; padding: clamp(16px, 3vw, 40px); }
.vui-container { max-width: 1440px; margin: 0 auto; }
.vui-layout {
  display: grid;
  grid-template-columns: minmax(280px, 340px) 1fr;
  gap: 20px;
  align-items: start;
}
.vui-cardGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.vui-footer {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text-soft);
  font-size: 0.85rem;
}
.vui-footer strong { color: var(--color-primary); font-weight: 700; }

/* Sidebar */
.vui-sidebar {
  display: flex; flex-direction: column; gap: 24px;
  position: sticky; top: 24px; height: fit-content;
}
.vui-heroCard {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}
.vui-heroBanner {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: #fff;
  padding: 32px 24px 40px;
  position: relative; overflow: hidden;
}
.vui-heroBanner::before {
  content: ""; position: absolute; top: -40px; right: -40px;
  width: 140px; height: 140px; border-radius: 50%;
  background: rgba(255,255,255,0.08);
}
.vui-heroBanner::after {
  content: ""; position: absolute; bottom: -60px; left: -30px;
  width: 120px; height: 120px; border-radius: 50%;
  background: rgba(255,255,255,0.06);
}
.vui-heroEyebrow {
  font-size: 0.75rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.12em;
  opacity: 0.85; margin-bottom: 12px; position: relative; z-index: 1;
}
.vui-heroTitle {
  font-size: clamp(1.75rem, 2.4vw, 2.4rem);
  line-height: 1.05; font-weight: 800;
  letter-spacing: -0.03em; position: relative; z-index: 1;
}
.vui-heroBody { padding: 24px; }
.vui-heroSubtitle {
  font-size: 0.95rem; color: var(--color-text-muted);
  margin-bottom: 24px; line-height: 1.55;
}
.vui-stepList { display: flex; flex-direction: column; gap: 16px; }
.vui-stepItem {
  display: grid; grid-template-columns: 36px 1fr; gap: 12px;
  align-items: flex-start; padding: 8px;
  border-radius: 8px; transition: background-color 0.15s ease;
}
.vui-stepItem:hover { background: var(--color-primary-tint); }
.vui-stepNumber {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--color-primary); color: #fff;
  font-family: var(--font-display); font-weight: 700;
  font-size: 0.95rem; flex-shrink: 0;
}
.vui-stepContent { display: flex; flex-direction: column; gap: 2px; }
.vui-stepIconRow {
  display: flex; align-items: center; gap: 8px;
  color: var(--color-primary);
}
.vui-stepLabel {
  font-family: var(--font-display); font-weight: 700;
  font-size: 1rem; color: var(--color-primary);
  letter-spacing: -0.01em;
}
.vui-stepDesc { font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.45; }

/* Card */
.vui-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex; flex-direction: column; gap: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative; overflow: hidden;
}
.vui-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
.vui-cardHeader {
  display: grid; grid-template-columns: 48px 1fr; gap: 16px;
  align-items: flex-start;
}
.vui-numberBadge {
  display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--color-primary); color: #fff;
  font-family: var(--font-display); font-weight: 700;
  font-size: 1.25rem; flex-shrink: 0;
}
.vui-titleBlock { display: flex; flex-direction: column; gap: 4px; }
.vui-title {
  font-size: 1.35rem; font-weight: 700;
  color: var(--color-text); text-transform: uppercase;
  letter-spacing: -0.01em;
}
.vui-subtitle { font-size: 0.9rem; color: var(--color-text-muted); font-weight: 500; }
.vui-body { flex: 1; display: flex; flex-direction: column; gap: 16px; }
.vui-cardFooter {
  display: flex; flex-wrap: wrap; gap: 16px;
  padding-top: 16px;
  border-top: 1px dashed var(--color-border);
  justify-content: space-around;
}
.vui-footerItem {
  display: flex; flex-direction: column; align-items: center;
  gap: 8px; flex: 1; min-width: 60px;
}
.vui-footerIconCircle {
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 50%;
}
.vui-footerNeutral { background: var(--color-surface-alt); color: var(--color-text); }
.vui-footerPrimary { background: var(--color-primary-soft); color: var(--color-primary); }
.vui-footerWater { background: rgba(74,159,217,0.12); color: var(--color-water); }
.vui-footerLeaf { background: rgba(92,171,92,0.14); color: var(--color-leaf); }
.vui-footerCheck { background: var(--color-primary); color: #fff; }
.vui-footerLabel {
  font-size: 0.75rem; color: var(--color-text-muted);
  text-align: center; font-weight: 500; line-height: 1.3;
}

/* Priorities (step 2) */
.vui-priorityList { display: flex; flex-direction: column; gap: 12px; }
.vui-priorityItem {
  display: grid; grid-template-columns: 40px 1fr; gap: 12px;
  align-items: center; padding: 12px;
  background: var(--color-primary-tint);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-primary-soft);
}
.vui-priorityIcon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--color-primary); color: #fff; flex-shrink: 0;
}
.vui-priorityLabel { font-weight: 700; font-size: 0.95rem; color: var(--color-text); }
.vui-priorityDetail { font-size: 0.8rem; color: var(--color-text-muted); }

/* Plan (step 3) */
.vui-clipboardWrap {
  background: var(--color-primary-tint);
  border-radius: var(--radius-md);
  padding: 16px;
  display: grid; grid-template-columns: auto 1fr; gap: 16px;
  align-items: flex-start;
}
.vui-clipboardIcon {
  width: 56px; height: 64px;
  background: var(--color-surface);
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  position: relative;
  display: flex; flex-direction: column;
  padding: 12px 8px; gap: 4px; flex-shrink: 0;
}
.vui-clipboardIcon::before {
  content: ""; position: absolute; top: -8px; left: 50%;
  transform: translateX(-50%);
  width: 24px; height: 12px;
  background: var(--color-primary); border-radius: 4px;
}
.vui-clipCheck { width: 100%; height: 3px; background: var(--color-primary); border-radius: 2px; }
.vui-clipboardList { display: flex; flex-direction: column; gap: 8px; }
.vui-clipboardItem {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.9rem; font-weight: 600; color: var(--color-text);
}
.vui-clipboardItem svg { color: var(--color-primary); flex-shrink: 0; }
.vui-clipboardItem small {
  font-weight: 400; color: var(--color-text-muted);
  font-size: 0.78rem; margin-left: 4px;
}

/* Responsive */
@media (max-width: 1180px) {
  .vui-layout { grid-template-columns: minmax(260px, 320px) 1fr; }
  .vui-cardGrid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 960px) {
  .vui-layout { grid-template-columns: 1fr; }
  .vui-sidebar { position: static; }
}
@media (max-width: 640px) {
  .vui-cardGrid { grid-template-columns: 1fr; gap: 16px; }
  .vui-main { padding: 16px; }
  .vui-card { padding: 20px; }
  .vui-title { font-size: 1.15rem; }
  .vui-numberBadge { width: 40px; height: 40px; font-size: 1.1rem; }
  .vui-heroBanner { padding: 24px 20px 32px; }
  .vui-heroBody { padding: 20px; }
  .vui-cardFooter { gap: 8px; }
  .vui-footerItem { min-width: 52px; }
}
`;

/* ============================================================
   INLINE SVG ILLUSTRATIONS
   ============================================================ */

const VillageMap = () => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "100%", height: "auto" }}>
    <rect width="400" height="240" rx="12" fill="#faf7f0" />
    <path d="M 0 60 C 60 50, 80 90, 140 80 S 220 110, 280 90 S 360 130, 400 110" stroke="#4a9fd9" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.85" />
    <path d="M 0 60 C 60 50, 80 90, 140 80 S 220 110, 280 90 S 360 130, 400 110" stroke="#7ec3e8" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M 30 220 L 200 130 L 380 200" stroke="#e8e0d0" strokeWidth="14" strokeLinecap="round" fill="none" />
    <path d="M 30 220 L 200 130 L 380 200" stroke="#fff" strokeWidth="2" strokeDasharray="6 8" fill="none" />
    <g><circle cx="60" cy="40" r="10" fill="#5cab5c" /><rect x="58" y="44" width="4" height="6" fill="#7a4a2a" /></g>
    <g><circle cx="320" cy="40" r="12" fill="#4a8f4a" /><rect x="318" y="46" width="4" height="7" fill="#7a4a2a" /></g>
    <g><circle cx="100" cy="180" r="11" fill="#5cab5c" /><rect x="98" y="184" width="4" height="6" fill="#7a4a2a" /></g>
    <g><circle cx="350" cy="160" r="10" fill="#4a8f4a" /><rect x="348" y="164" width="4" height="6" fill="#7a4a2a" /></g>
    <g><circle cx="380" cy="60" r="9" fill="#5cab5c" /></g>
    <g transform="translate(140, 130)"><rect x="0" y="14" width="36" height="24" fill="#fff" stroke="#d4ccba" /><polygon points="-4,16 18,-2 40,16" fill="#d62828" /><rect x="14" y="22" width="8" height="16" fill="#a51d1d" /></g>
    <g transform="translate(220, 90)"><rect x="0" y="14" width="36" height="24" fill="#fff" stroke="#d4ccba" /><polygon points="-4,16 18,-2 40,16" fill="#d62828" /><rect x="14" y="22" width="8" height="16" fill="#a51d1d" /></g>
    <g transform="translate(280, 150)"><rect x="0" y="14" width="36" height="24" fill="#fff" stroke="#d4ccba" /><polygon points="-4,16 18,-2 40,16" fill="#d62828" /><rect x="14" y="22" width="8" height="16" fill="#a51d1d" /></g>
    <g transform="translate(195, 175)">
      <ellipse cx="0" cy="14" rx="22" ry="6" fill="#e89e4a" opacity="0.25" />
      <circle cx="-8" cy="8" r="4" fill="#666" />
      <circle cx="0" cy="6" r="5" fill="#888" />
      <circle cx="6" cy="9" r="4" fill="#777" />
      <circle cx="-2" cy="11" r="3" fill="#999" />
    </g>
    <g transform="translate(310, 50)">
      <circle cx="0" cy="0" r="5" fill="#4a9fd9" />
      <rect x="-2" y="-12" width="4" height="12" fill="#7a4a2a" />
      <polygon points="-8,-14 0,-22 8,-14" fill="#a51d1d" />
    </g>
  </svg>
);

const CommunityWork = () => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "100%", height: "auto" }}>
    <rect width="400" height="240" rx="12" fill="#f0f6f0" />
    <ellipse cx="80" cy="220" rx="120" ry="40" fill="#cde0cd" />
    <ellipse cx="320" cy="220" rx="140" ry="50" fill="#bdd5bd" />
    <g><circle cx="50" cy="160" r="14" fill="#5cab5c" /><rect x="48" y="166" width="4" height="10" fill="#7a4a2a" /></g>
    <g><circle cx="350" cy="150" r="16" fill="#4a8f4a" /><rect x="348" y="158" width="4" height="12" fill="#7a4a2a" /></g>
    <g><circle cx="380" cy="170" r="12" fill="#5cab5c" /></g>
    <g transform="translate(120, 150)">
      <circle cx="0" cy="0" r="10" fill="#e8b89a" />
      <rect x="-8" y="8" width="16" height="22" rx="4" fill="#d62828" />
      <rect x="-10" y="28" width="22" height="14" rx="3" fill="#3a3a3a" />
      <rect x="14" y="32" width="2" height="10" fill="#7a4a2a" />
      <circle cx="15" cy="30" r="4" fill="#5cab5c" />
    </g>
    <g transform="translate(180, 120)">
      <circle cx="0" cy="0" r="10" fill="#e8b89a" />
      <rect x="-8" y="8" width="16" height="28" rx="4" fill="#d62828" />
      <rect x="-10" y="34" width="20" height="22" rx="3" fill="#3a3a3a" />
      <line x1="14" y1="0" x2="22" y2="40" stroke="#7a4a2a" strokeWidth="2" />
      <polygon points="20,38 26,46 22,50 18,46" fill="#888" />
    </g>
    <g transform="translate(260, 130)">
      <circle cx="0" cy="0" r="10" fill="#e8b89a" />
      <rect x="-8" y="8" width="16" height="24" rx="4" fill="#d62828" />
      <rect x="-10" y="30" width="20" height="20" rx="3" fill="#3a3a3a" />
      <path d="M 10 38 L 50 38 L 46 52 L 14 52 Z" fill="#a8a8a8" stroke="#6a6a6a" strokeWidth="1" />
      <circle cx="30" cy="56" r="6" fill="#3a3a3a" />
    </g>
    <g transform="translate(70, 130)">
      <rect x="0" y="0" width="22" height="34" rx="3" fill="#666" />
      <rect x="-2" y="-4" width="26" height="6" rx="2" fill="#3a3a3a" />
      <line x1="6" y1="6" x2="6" y2="28" stroke="#3a3a3a" strokeWidth="1" />
      <line x1="11" y1="6" x2="11" y2="28" stroke="#3a3a3a" strokeWidth="1" />
      <line x1="16" y1="6" x2="16" y2="28" stroke="#3a3a3a" strokeWidth="1" />
    </g>
    <g transform="translate(230, 192)"><rect x="0" y="0" width="2" height="6" fill="#7a4a2a" /><circle cx="1" cy="-1" r="3" fill="#5cab5c" /></g>
    <g transform="translate(150, 200)"><rect x="0" y="0" width="2" height="6" fill="#7a4a2a" /><circle cx="1" cy="-1" r="3" fill="#5cab5c" /></g>
    <ellipse cx="80" cy="40" rx="22" ry="8" fill="#fff" opacity="0.7" />
    <ellipse cx="320" cy="50" rx="28" ry="10" fill="#fff" opacity="0.7" />
  </svg>
);

const CleanVillage = () => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "100%", height: "auto" }}>
    <rect width="400" height="240" rx="12" fill="#f0f6f0" />
    <ellipse cx="200" cy="220" rx="220" ry="40" fill="#cde0cd" />
    <path d="M 100 220 Q 200 180, 300 220" stroke="#e8e0d0" strokeWidth="14" fill="none" strokeLinecap="round" />
    <ellipse cx="270" cy="200" rx="32" ry="10" fill="#7ec3e8" />
    <ellipse cx="270" cy="200" rx="28" ry="7" fill="#a8d5ed" />
    <g transform="translate(140, 130)">
      <rect x="0" y="20" width="50" height="36" fill="#fff" stroke="#d4ccba" />
      <polygon points="-6,22 25,-4 56,22" fill="#d62828" />
      <rect x="20" y="32" width="10" height="24" fill="#a51d1d" />
      <rect x="6" y="28" width="8" height="8" fill="#a8d5ed" stroke="#7a4a2a" />
      <rect x="36" y="28" width="8" height="8" fill="#a8d5ed" stroke="#7a4a2a" />
    </g>
    <g><circle cx="50" cy="170" r="20" fill="#5cab5c" /><circle cx="55" cy="160" r="14" fill="#7ac17a" /><rect x="48" y="180" width="4" height="14" fill="#7a4a2a" /></g>
    <g><circle cx="350" cy="160" r="22" fill="#4a8f4a" /><circle cx="345" cy="150" r="14" fill="#6cba6c" /><rect x="348" y="170" width="4" height="16" fill="#7a4a2a" /></g>
    <g><circle cx="100" cy="180" r="14" fill="#5cab5c" /><rect x="98" y="186" width="4" height="10" fill="#7a4a2a" /></g>
    <g transform="translate(220, 170)">
      <rect x="0" y="0" width="3" height="40" fill="#3a3a3a" />
      <circle cx="1.5" cy="-2" r="5" fill="#f5d76e" />
      <line x1="1.5" y1="-7" x2="1.5" y2="-12" stroke="#3a3a3a" strokeWidth="1" />
    </g>
    <g transform="translate(70, 195)">
      <rect x="0" y="0" width="30" height="3" fill="#7a4a2a" />
      <rect x="2" y="3" width="2" height="8" fill="#7a4a2a" />
      <rect x="26" y="3" width="2" height="8" fill="#7a4a2a" />
    </g>
    <circle cx="350" cy="50" r="14" fill="#f5d76e" opacity="0.8" />
    <ellipse cx="120" cy="40" rx="22" ry="8" fill="#fff" opacity="0.7" />
  </svg>
);

const HealthyVillage = () => (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: "100%", height: "auto" }}>
    <rect width="400" height="240" rx="12" fill="#f0f6f0" />
    <circle cx="350" cy="40" r="16" fill="#f5d76e" />
    <g stroke="#f5d76e" strokeWidth="2" strokeLinecap="round">
      <line x1="350" y1="14" x2="350" y2="20" />
      <line x1="350" y1="60" x2="350" y2="66" />
      <line x1="324" y1="40" x2="330" y2="40" />
      <line x1="370" y1="40" x2="376" y2="40" />
    </g>
    <path d="M 80 50 Q 85 46, 90 50 Q 95 46, 100 50" stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
    <path d="M 130 70 Q 135 66, 140 70 Q 145 66, 150 70" stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
    <ellipse cx="100" cy="220" rx="160" ry="50" fill="#bdd5bd" />
    <ellipse cx="320" cy="220" rx="180" ry="60" fill="#cde0cd" />
    <path d="M 0 200 C 60 190, 100 220, 180 200 S 280 220, 400 195" stroke="#4a9fd9" strokeWidth="12" fill="none" strokeLinecap="round" />
    <path d="M 0 200 C 60 190, 100 220, 180 200 S 280 220, 400 195" stroke="#7ec3e8" strokeWidth="5" fill="none" strokeLinecap="round" />
    <g transform="translate(80, 130)">
      <rect x="0" y="20" width="44" height="32" fill="#fff" stroke="#d4ccba" />
      <polygon points="-5,22 22,-3 49,22" fill="#d62828" />
      <rect x="17" y="32" width="10" height="20" fill="#a51d1d" />
      <rect x="4" y="28" width="7" height="7" fill="#a8d5ed" stroke="#7a4a2a" />
    </g>
    <g transform="translate(170, 110)">
      <rect x="0" y="20" width="46" height="34" fill="#fff" stroke="#d4ccba" />
      <polygon points="-5,22 23,-4 51,22" fill="#d62828" />
      <rect x="18" y="34" width="10" height="20" fill="#a51d1d" />
    </g>
    <g transform="translate(260, 140)">
      <rect x="0" y="20" width="42" height="30" fill="#fff" stroke="#d4ccba" />
      <polygon points="-5,22 21,-2 47,22" fill="#d62828" />
      <rect x="16" y="32" width="10" height="18" fill="#a51d1d" />
    </g>
    <g><circle cx="40" cy="170" r="18" fill="#5cab5c" /><circle cx="44" cy="162" r="12" fill="#7ac17a" /><rect x="38" y="178" width="4" height="14" fill="#7a4a2a" /></g>
    <g><circle cx="140" cy="160" r="16" fill="#4a8f4a" /><rect x="138" y="170" width="4" height="14" fill="#7a4a2a" /></g>
    <g><circle cx="240" cy="150" r="14" fill="#5cab5c" /><rect x="238" y="160" width="4" height="12" fill="#7a4a2a" /></g>
    <g><circle cx="340" cy="170" r="20" fill="#4a8f4a" /><circle cx="345" cy="160" r="13" fill="#6cba6c" /><rect x="338" y="180" width="4" height="14" fill="#7a4a2a" /></g>
    <g><circle cx="380" cy="155" r="13" fill="#5cab5c" /></g>
  </svg>
);

/* ============================================================
   COMPONENTS
   ============================================================ */

type FooterVariant = "neutral" | "primary" | "water" | "leaf" | "check";

const FooterItem = ({
  icon,
  label,
  variant = "neutral",
}: {
  icon: ReactNode;
  label: string;
  variant?: FooterVariant;
}) => {
  const variantClass = {
    neutral: "vui-footerNeutral",
    primary: "vui-footerPrimary",
    water: "vui-footerWater",
    leaf: "vui-footerLeaf",
    check: "vui-footerCheck",
  }[variant];

  return (
    <div className="vui-footerItem">
      <div className={`vui-footerIconCircle ${variantClass}`}>{icon}</div>
      <span className="vui-footerLabel">{label}</span>
    </div>
  );
};

const StepCard = ({
  number,
  title,
  subtitle,
  children,
  footer,
}: {
  number: number;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) => (
  <article className="vui-card">
    <header className="vui-cardHeader">
      <div className="vui-numberBadge">{number}</div>
      <div className="vui-titleBlock">
        <h2 className="vui-title">{title}</h2>
        <p className="vui-subtitle">{subtitle}</p>
      </div>
    </header>
    <div className="vui-body">{children}</div>
    {footer && <div className="vui-cardFooter">{footer}</div>}
  </article>
);

const SIDEBAR_STEPS = [
  { n: 1, Icon: MapPin, label: "Map Our Village", desc: "Understand our village and what we face." },
  { n: 2, Icon: AlertCircle, label: "Identify Priorities", desc: "Focus on the issues that matter most." },
  { n: 3, Icon: Users, label: "Plan Together", desc: "Agree on actions, roles, and timeline." },
  { n: 4, Icon: Shovel, label: "Take Action", desc: "Work together to make improvements." },
  { n: 5, Icon: Sprout, label: "Care & Sustain", desc: "Keep our village clean, green, and well-maintained." },
  { n: 6, Icon: Star, label: "The Result", desc: "A healthier, greener, stronger village for everyone." },
];

const Sidebar = () => (
  <aside className="vui-sidebar">
    <div className="vui-heroCard">
      <div className="vui-heroBanner">
        <p className="vui-heroEyebrow">A Community Roadmap</p>
        <h1 className="vui-heroTitle">Building a Better Village Together</h1>
      </div>
      <div className="vui-heroBody">
        <p className="vui-heroSubtitle">
          Simple steps for a cleaner, greener, and stronger village.
        </p>
        <ol className="vui-stepList">
          {SIDEBAR_STEPS.map(({ n, Icon, label, desc }) => (
            <li key={n} className="vui-stepItem">
              <div className="vui-stepNumber">{n}</div>
              <div className="vui-stepContent">
                <div className="vui-stepIconRow">
                  <Icon size={16} strokeWidth={2.2} />
                  <span className="vui-stepLabel">{label}</span>
                </div>
                <p className="vui-stepDesc">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </aside>
);

/* ============================================================
   PAGE
   ============================================================ */

export const metadata = {
  title: "Building a Better Village Together",
  description: "Simple steps for a cleaner, greener, and stronger village.",
};

export default function Mapping() {
  return (
    <>
      {/* Inline Google Fonts and global styles */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <main className="vui-main">
        <div className="vui-container">
          <div className="vui-layout">
            <Sidebar />

            <div className="vui-cardGrid">
              {/* STEP 1 */}
              <StepCard
                number={1}
                title="Map Our Village"
                subtitle="What we have & what we face."
                footer={
                  <>
                    <FooterItem icon={<Home size={20} />} label="Homes" variant="primary" />
                    <FooterItem icon={<TreePine size={20} />} label="Trees" variant="leaf" />
                    <FooterItem icon={<Droplet size={20} />} label="Water" variant="water" />
                    <FooterItem icon={<Route size={20} />} label="Roads" variant="neutral" />
                    <FooterItem icon={<Trash2 size={20} />} label="Dumpsites" variant="neutral" />
                  </>
                }
              >
                <VillageMap />
              </StepCard>

              {/* STEP 2 */}
              <StepCard
                number={2}
                title="Identify Priorities"
                subtitle="What needs our attention first."
              >
                <ul className="vui-priorityList">
                  <li className="vui-priorityItem">
                    <div className="vui-priorityIcon"><AlertCircle size={18} /></div>
                    <div>
                      <div className="vui-priorityLabel">Dump sites</div>
                      <div className="vui-priorityDetail">health risk</div>
                    </div>
                  </li>
                  <li className="vui-priorityItem">
                    <div className="vui-priorityIcon"><CloudRain size={18} /></div>
                    <div>
                      <div className="vui-priorityLabel">Poor drainage</div>
                      <div className="vui-priorityDetail">flooding</div>
                    </div>
                  </li>
                  <li className="vui-priorityItem">
                    <div className="vui-priorityIcon"><Sprout size={18} /></div>
                    <div>
                      <div className="vui-priorityLabel">Few trees</div>
                      <div className="vui-priorityDetail">heat, erosion</div>
                    </div>
                  </li>
                  <li className="vui-priorityItem">
                    <div className="vui-priorityIcon"><Trash2 size={18} /></div>
                    <div>
                      <div className="vui-priorityLabel">Limited waste management</div>
                    </div>
                  </li>
                </ul>
              </StepCard>

              {/* STEP 3 */}
              <StepCard
                number={3}
                title="Plan Together"
                subtitle="Agree on actions, roles, and timeline."
              >
                <div className="vui-clipboardWrap">
                  <div className="vui-clipboardIcon">
                    <div className="vui-clipCheck" />
                    <div className="vui-clipCheck" />
                    <div className="vui-clipCheck" />
                    <div className="vui-clipCheck" />
                  </div>
                  <ul className="vui-clipboardList">
                    <li className="vui-clipboardItem"><Users size={16} /> Assign roles & set dates</li>
                    <li className="vui-clipboardItem"><Calendar size={16} /> Review & adjust plan</li>
                    <li className="vui-clipboardItem"><Sprout size={16} /> Plant trees <small>(shade & soil)</small></li>
                    <li className="vui-clipboardItem"><Droplet size={16} /> Improve drainage</li>
                    <li className="vui-clipboardItem"><Trash2 size={16} /> Clean dump sites</li>
                  </ul>
                </div>
              </StepCard>

              {/* STEP 4 */}
              <StepCard
                number={4}
                title="Take Action"
                subtitle="Working together for change."
                footer={
                  <>
                    <FooterItem icon={<Shovel size={20} />} label="Clean up" variant="neutral" />
                    <FooterItem icon={<Sprout size={20} />} label="Plant trees" variant="leaf" />
                    <FooterItem icon={<Waves size={20} />} label="Improve drainage" variant="water" />
                    <FooterItem icon={<Trash2 size={20} />} label="Manage waste" variant="primary" />
                  </>
                }
              >
                <CommunityWork />
              </StepCard>

              {/* STEP 5 */}
              <StepCard
                number={5}
                title="Care & Sustain"
                subtitle="Keep it clean, green, and strong."
                footer={
                  <>
                    <FooterItem icon={<Droplet size={20} />} label="Water trees" variant="leaf" />
                    <FooterItem icon={<Trash2 size={20} />} label="Keep areas clean" variant="primary" />
                    <FooterItem icon={<Users size={20} />} label="Community monitoring" variant="primary" />
                    <FooterItem icon={<Star size={20} />} label="Celebrate progress" variant="primary" />
                  </>
                }
              >
                <CleanVillage />
              </StepCard>

              {/* STEP 6 */}
              <StepCard
                number={6}
                title="The Result"
                subtitle="A healthier, greener, stronger village."
                footer={
                  <>
                    <FooterItem icon={<Check size={18} strokeWidth={3} />} label="Cleaner environment" variant="check" />
                    <FooterItem icon={<Check size={18} strokeWidth={3} />} label="More shade & less heat" variant="check" />
                    <FooterItem icon={<Check size={18} strokeWidth={3} />} label="Better drainage" variant="check" />
                    <FooterItem icon={<Check size={18} strokeWidth={3} />} label="Stronger together" variant="check" />
                    <FooterItem icon={<Check size={18} strokeWidth={3} />} label="Healthier community" variant="check" />
                  </>
                }
              >
                <HealthyVillage />
              </StepCard>
            </div>
          </div>

          <footer className="vui-footer">
            <p>
              <strong>Building a Better Village Together</strong> &middot; A community-led, step-by-step roadmap.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

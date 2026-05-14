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
import styles from "./mapping.module.css";

const s = styles;

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ============================================================
   INLINE SVG ILLUSTRATIONS
   ============================================================ */

const VillageMap = () => (
  <svg
    viewBox="0 0 400 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    style={{ width: "100%", height: "auto" }}
  >
    <rect width="400" height="240" rx="12" fill="#faf7f0" />
    <path
      d="M 0 60 C 60 50, 80 90, 140 80 S 220 110, 280 90 S 360 130, 400 110"
      stroke="#4a9fd9"
      strokeWidth="14"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    <path
      d="M 0 60 C 60 50, 80 90, 140 80 S 220 110, 280 90 S 360 130, 400 110"
      stroke="#7ec3e8"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 30 220 L 200 130 L 380 200"
      stroke="#e8e0d0"
      strokeWidth="14"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 30 220 L 200 130 L 380 200"
      stroke="#fff"
      strokeWidth="2"
      strokeDasharray="6 8"
      fill="none"
    />
    <g>
      <circle cx="60" cy="40" r="10" fill="#5cab5c" />
      <rect x="58" y="44" width="4" height="6" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="320" cy="40" r="12" fill="#4a8f4a" />
      <rect x="318" y="46" width="4" height="7" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="100" cy="180" r="11" fill="#5cab5c" />
      <rect x="98" y="184" width="4" height="6" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="350" cy="160" r="10" fill="#4a8f4a" />
      <rect x="348" y="164" width="4" height="6" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="380" cy="60" r="9" fill="#5cab5c" />
    </g>
    <g transform="translate(140, 130)">
      <rect x="0" y="14" width="36" height="24" fill="#fff" stroke="#d4ccba" />
      <polygon points="-4,16 18,-2 40,16" fill="#d62828" />
      <rect x="14" y="22" width="8" height="16" fill="#a51d1d" />
    </g>
    <g transform="translate(220, 90)">
      <rect x="0" y="14" width="36" height="24" fill="#fff" stroke="#d4ccba" />
      <polygon points="-4,16 18,-2 40,16" fill="#d62828" />
      <rect x="14" y="22" width="8" height="16" fill="#a51d1d" />
    </g>
    <g transform="translate(280, 150)">
      <rect x="0" y="14" width="36" height="24" fill="#fff" stroke="#d4ccba" />
      <polygon points="-4,16 18,-2 40,16" fill="#d62828" />
      <rect x="14" y="22" width="8" height="16" fill="#a51d1d" />
    </g>
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
  <svg
    viewBox="0 0 400 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    style={{ width: "100%", height: "auto" }}
  >
    <rect width="400" height="240" rx="12" fill="#f0f6f0" />
    <ellipse cx="80" cy="220" rx="120" ry="40" fill="#cde0cd" />
    <ellipse cx="320" cy="220" rx="140" ry="50" fill="#bdd5bd" />
    <g>
      <circle cx="50" cy="160" r="14" fill="#5cab5c" />
      <rect x="48" y="166" width="4" height="10" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="350" cy="150" r="16" fill="#4a8f4a" />
      <rect x="348" y="158" width="4" height="12" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="380" cy="170" r="12" fill="#5cab5c" />
    </g>
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
      <path
        d="M 10 38 L 50 38 L 46 52 L 14 52 Z"
        fill="#a8a8a8"
        stroke="#6a6a6a"
        strokeWidth="1"
      />
      <circle cx="30" cy="56" r="6" fill="#3a3a3a" />
    </g>
    <g transform="translate(70, 130)">
      <rect x="0" y="0" width="22" height="34" rx="3" fill="#666" />
      <rect x="-2" y="-4" width="26" height="6" rx="2" fill="#3a3a3a" />
      <line x1="6" y1="6" x2="6" y2="28" stroke="#3a3a3a" strokeWidth="1" />
      <line x1="11" y1="6" x2="11" y2="28" stroke="#3a3a3a" strokeWidth="1" />
      <line x1="16" y1="6" x2="16" y2="28" stroke="#3a3a3a" strokeWidth="1" />
    </g>
    <g transform="translate(230, 192)">
      <rect x="0" y="0" width="2" height="6" fill="#7a4a2a" />
      <circle cx="1" cy="-1" r="3" fill="#5cab5c" />
    </g>
    <g transform="translate(150, 200)">
      <rect x="0" y="0" width="2" height="6" fill="#7a4a2a" />
      <circle cx="1" cy="-1" r="3" fill="#5cab5c" />
    </g>
    <ellipse cx="80" cy="40" rx="22" ry="8" fill="#fff" opacity="0.7" />
    <ellipse cx="320" cy="50" rx="28" ry="10" fill="#fff" opacity="0.7" />
  </svg>
);

const CleanVillage = () => (
  <svg
    viewBox="0 0 400 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    style={{ width: "100%", height: "auto" }}
  >
    <rect width="400" height="240" rx="12" fill="#f0f6f0" />
    <ellipse cx="200" cy="220" rx="220" ry="40" fill="#cde0cd" />
    <path
      d="M 100 220 Q 200 180, 300 220"
      stroke="#e8e0d0"
      strokeWidth="14"
      fill="none"
      strokeLinecap="round"
    />
    <ellipse cx="270" cy="200" rx="32" ry="10" fill="#7ec3e8" />
    <ellipse cx="270" cy="200" rx="28" ry="7" fill="#a8d5ed" />
    <g transform="translate(140, 130)">
      <rect x="0" y="20" width="50" height="36" fill="#fff" stroke="#d4ccba" />
      <polygon points="-6,22 25,-4 56,22" fill="#d62828" />
      <rect x="20" y="32" width="10" height="24" fill="#a51d1d" />
      <rect x="6" y="28" width="8" height="8" fill="#a8d5ed" stroke="#7a4a2a" />
      <rect
        x="36"
        y="28"
        width="8"
        height="8"
        fill="#a8d5ed"
        stroke="#7a4a2a"
      />
    </g>
    <g>
      <circle cx="50" cy="170" r="20" fill="#5cab5c" />
      <circle cx="55" cy="160" r="14" fill="#7ac17a" />
      <rect x="48" y="180" width="4" height="14" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="350" cy="160" r="22" fill="#4a8f4a" />
      <circle cx="345" cy="150" r="14" fill="#6cba6c" />
      <rect x="348" y="170" width="4" height="16" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="100" cy="180" r="14" fill="#5cab5c" />
      <rect x="98" y="186" width="4" height="10" fill="#7a4a2a" />
    </g>
    <g transform="translate(220, 170)">
      <rect x="0" y="0" width="3" height="40" fill="#3a3a3a" />
      <circle cx="1.5" cy="-2" r="5" fill="#f5d76e" />
      <line
        x1="1.5"
        y1="-7"
        x2="1.5"
        y2="-12"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
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
  <svg
    viewBox="0 0 400 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    style={{ width: "100%", height: "auto" }}
  >
    <rect width="400" height="240" rx="12" fill="#f0f6f0" />
    <circle cx="350" cy="40" r="16" fill="#f5d76e" />
    <g stroke="#f5d76e" strokeWidth="2" strokeLinecap="round">
      <line x1="350" y1="14" x2="350" y2="20" />
      <line x1="350" y1="60" x2="350" y2="66" />
      <line x1="324" y1="40" x2="330" y2="40" />
      <line x1="370" y1="40" x2="376" y2="40" />
    </g>
    <path
      d="M 80 50 Q 85 46, 90 50 Q 95 46, 100 50"
      stroke="#3a3a3a"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M 130 70 Q 135 66, 140 70 Q 145 66, 150 70"
      stroke="#3a3a3a"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse cx="100" cy="220" rx="160" ry="50" fill="#bdd5bd" />
    <ellipse cx="320" cy="220" rx="180" ry="60" fill="#cde0cd" />
    <path
      d="M 0 200 C 60 190, 100 220, 180 200 S 280 220, 400 195"
      stroke="#4a9fd9"
      strokeWidth="12"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 0 200 C 60 190, 100 220, 180 200 S 280 220, 400 195"
      stroke="#7ec3e8"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
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
    <g>
      <circle cx="40" cy="170" r="18" fill="#5cab5c" />
      <circle cx="44" cy="162" r="12" fill="#7ac17a" />
      <rect x="38" y="178" width="4" height="14" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="140" cy="160" r="16" fill="#4a8f4a" />
      <rect x="138" y="170" width="4" height="14" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="240" cy="150" r="14" fill="#5cab5c" />
      <rect x="238" y="160" width="4" height="12" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="340" cy="170" r="20" fill="#4a8f4a" />
      <circle cx="345" cy="160" r="13" fill="#6cba6c" />
      <rect x="338" y="180" width="4" height="14" fill="#7a4a2a" />
    </g>
    <g>
      <circle cx="380" cy="155" r="13" fill="#5cab5c" />
    </g>
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
    neutral: s["vui-footerNeutral"],
    primary: s["vui-footerPrimary"],
    water: s["vui-footerWater"],
    leaf: s["vui-footerLeaf"],
    check: s["vui-footerCheck"],
  }[variant];

  return (
    <div className={s["vui-footerItem"]}>
      <div className={cx(s["vui-footerIconCircle"], variantClass)}>{icon}</div>
      <span className={s["vui-footerLabel"]}>{label}</span>
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
  <article className={s["vui-card"]}>
    <header className={s["vui-cardHeader"]}>
      <div className={s["vui-numberBadge"]}>{number}</div>
      <div className={s["vui-titleBlock"]}>
        <h2 className={s["vui-title"]}>{title}</h2>
        <p className={s["vui-subtitle"]}>{subtitle}</p>
      </div>
    </header>
    <div className={s["vui-body"]}>{children}</div>
    {footer && <div className={s["vui-cardFooter"]}>{footer}</div>}
  </article>
);

const SIDEBAR_STEPS = [
  {
    n: 1,
    Icon: MapPin,
    label: "Map Our Village",
    desc: "Understand our village and what we face.",
  },
  {
    n: 2,
    Icon: AlertCircle,
    label: "Identify Priorities",
    desc: "Focus on the issues that matter most.",
  },
  {
    n: 3,
    Icon: Users,
    label: "Plan Together",
    desc: "Agree on actions, roles, and timeline.",
  },
  {
    n: 4,
    Icon: Shovel,
    label: "Take Action",
    desc: "Work together to make improvements.",
  },
  {
    n: 5,
    Icon: Sprout,
    label: "Care & Sustain",
    desc: "Keep our village clean, green, and well-maintained.",
  },
  {
    n: 6,
    Icon: Star,
    label: "The Result",
    desc: "A healthier, greener, stronger village for everyone.",
  },
];

const Sidebar = () => (
  <aside className={s["vui-sidebar"]}>
    <div className={s["vui-heroCard"]}>
      <div className={s["vui-heroBanner"]}>
        <p className={s["vui-heroEyebrow"]}>A Community Roadmap</p>
        <h1 className={s["vui-heroTitle"]}>
          Building a Better Village Together
        </h1>
      </div>
      <div className={s["vui-heroBody"]}>
        <p className={s["vui-heroSubtitle"]}>
          Simple steps for a cleaner, greener, and stronger village.
        </p>
        <ol className={s["vui-stepList"]}>
          {SIDEBAR_STEPS.map(({ n, Icon, label, desc }) => (
            <li key={n} className={s["vui-stepItem"]}>
              <div className={s["vui-stepNumber"]}>{n}</div>
              <div className={s["vui-stepContent"]}>
                <div className={s["vui-stepIconRow"]}>
                  <Icon size={16} strokeWidth={2.2} />
                  <span className={s["vui-stepLabel"]}>{label}</span>
                </div>
                <p className={s["vui-stepDesc"]}>{desc}</p>
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <main className={s["vui-main"]}>
        <div className={s["vui-container"] + " center-content"}>
          <div className={s["vui-layout"]}>
            <Sidebar />

            <div className={s["vui-cardGrid"]}>
              {/* STEP 1 */}
              <StepCard
                number={1}
                title="Map Our Village"
                subtitle="What we have & what we face."
                footer={
                  <>
                    <FooterItem
                      icon={<Home size={20} />}
                      label="Homes"
                      variant="primary"
                    />
                    <FooterItem
                      icon={<TreePine size={20} />}
                      label="Trees"
                      variant="leaf"
                    />
                    <FooterItem
                      icon={<Droplet size={20} />}
                      label="Water"
                      variant="water"
                    />
                    <FooterItem
                      icon={<Route size={20} />}
                      label="Roads"
                      variant="neutral"
                    />
                    <FooterItem
                      icon={<Trash2 size={20} />}
                      label="Dumpsites"
                      variant="neutral"
                    />
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
                <ul className={s["vui-priorityList"]}>
                  <li className={s["vui-priorityItem"]}>
                    <div className={s["vui-priorityIcon"]}>
                      <AlertCircle size={18} />
                    </div>
                    <div>
                      <div className={s["vui-priorityLabel"]}>Dump sites</div>
                      <div className={s["vui-priorityDetail"]}>health risk</div>
                    </div>
                  </li>
                  <li className={s["vui-priorityItem"]}>
                    <div className={s["vui-priorityIcon"]}>
                      <CloudRain size={18} />
                    </div>
                    <div>
                      <div className={s["vui-priorityLabel"]}>
                        Poor drainage
                      </div>
                      <div className={s["vui-priorityDetail"]}>flooding</div>
                    </div>
                  </li>
                  <li className={s["vui-priorityItem"]}>
                    <div className={s["vui-priorityIcon"]}>
                      <Sprout size={18} />
                    </div>
                    <div>
                      <div className={s["vui-priorityLabel"]}>Few trees</div>
                      <div className={s["vui-priorityDetail"]}>
                        heat, erosion
                      </div>
                    </div>
                  </li>
                  <li className={s["vui-priorityItem"]}>
                    <div className={s["vui-priorityIcon"]}>
                      <Trash2 size={18} />
                    </div>
                    <div>
                      <div className={s["vui-priorityLabel"]}>
                        Limited waste management
                      </div>
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
                <div className={s["vui-clipboardWrap"]}>
                  <div className={s["vui-clipboardIcon"]}>
                    <div className={s["vui-clipCheck"]} />
                    <div className={s["vui-clipCheck"]} />
                    <div className={s["vui-clipCheck"]} />
                    <div className={s["vui-clipCheck"]} />
                  </div>
                  <ul className={s["vui-clipboardList"]}>
                    <li className={s["vui-clipboardItem"]}>
                      <Users size={16} /> Assign roles & set dates
                    </li>
                    <li className={s["vui-clipboardItem"]}>
                      <Calendar size={16} /> Review & adjust plan
                    </li>
                    <li className={s["vui-clipboardItem"]}>
                      <Sprout size={16} /> Plant trees{" "}
                      <small>(shade & soil)</small>
                    </li>
                    <li className={s["vui-clipboardItem"]}>
                      <Droplet size={16} /> Improve drainage
                    </li>
                    <li className={s["vui-clipboardItem"]}>
                      <Trash2 size={16} /> Clean dump sites
                    </li>
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
                    <FooterItem
                      icon={<Shovel size={20} />}
                      label="Clean up"
                      variant="neutral"
                    />
                    <FooterItem
                      icon={<Sprout size={20} />}
                      label="Plant trees"
                      variant="leaf"
                    />
                    <FooterItem
                      icon={<Waves size={20} />}
                      label="Improve drainage"
                      variant="water"
                    />
                    <FooterItem
                      icon={<Trash2 size={20} />}
                      label="Manage waste"
                      variant="primary"
                    />
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
                    <FooterItem
                      icon={<Droplet size={20} />}
                      label="Water trees"
                      variant="leaf"
                    />
                    <FooterItem
                      icon={<Trash2 size={20} />}
                      label="Keep areas clean"
                      variant="primary"
                    />
                    <FooterItem
                      icon={<Users size={20} />}
                      label="Community monitoring"
                      variant="primary"
                    />
                    <FooterItem
                      icon={<Star size={20} />}
                      label="Celebrate progress"
                      variant="primary"
                    />
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
                    <FooterItem
                      icon={<Check size={18} strokeWidth={3} />}
                      label="Cleaner environment"
                      variant="check"
                    />
                    <FooterItem
                      icon={<Check size={18} strokeWidth={3} />}
                      label="More shade & less heat"
                      variant="check"
                    />
                    <FooterItem
                      icon={<Check size={18} strokeWidth={3} />}
                      label="Better drainage"
                      variant="check"
                    />
                    <FooterItem
                      icon={<Check size={18} strokeWidth={3} />}
                      label="Stronger together"
                      variant="check"
                    />
                    <FooterItem
                      icon={<Check size={18} strokeWidth={3} />}
                      label="Healthier community"
                      variant="check"
                    />
                  </>
                }
              >
                <HealthyVillage />
              </StepCard>
            </div>
          </div>

          <footer className={s["vui-footer"]}>
            <p>
              <strong>Building a Better Village Together</strong> &middot; A
              community-led, step-by-step roadmap.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

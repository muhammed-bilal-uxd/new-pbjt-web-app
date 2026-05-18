import React from "react";
import {
  Building2,
  Factory,
  Store,
  Users,
  Leaf,
  Network,
  User,
  Truck,
  ShoppingBag,
  Shield,
  ShieldCheck,
  Wrench,
  ClipboardCheck,
  FileText,
  MessageCircle,
  Handshake,
  ArrowRight,
} from "lucide-react";

/* ----------------------------------------------------------------
   Content config. Kept as data so copy/structure changes never
   require touching layout JSX.
-----------------------------------------------------------------*/

// x / y are percentages inside the radial diagram (0,0 = top-left).
const STAKEHOLDERS = [
  { label: "Businesses", Icon: Building2, x: 50, y: 9 },
  { label: "Industry", Icon: Factory, x: 84, y: 26 },
  { label: "Vendors", Icon: Store, x: 91, y: 55 },
  { label: "Communities", Icon: Users, x: 74, y: 84 },
  { label: "Environment", Icon: Leaf, x: 36, y: 91 },
  { label: "MSMEs", Icon: Network, x: 11, y: 64 },
  { label: "Workers", Icon: User, x: 11, y: 35 },
];

const VALUE_CHAIN = [
  { label: "Brands", Icon: Building2 },
  { label: "Manufacturers", Icon: Factory },
  { label: "Suppliers", Icon: Truck },
  { label: "Distributors", Icon: Store },
  { label: "Retailers", Icon: ShoppingBag },
];

const PRINCIPLES = [
  {
    Icon: ShieldCheck,
    title: "Embedded in Business Responsibility",
    body: "A just transition must be part of everyday business responsibility. Businesses, workers, vendors, MSMEs and communities are part of the same ecosystem.",
  },
  {
    Icon: Users,
    title: "Collective Agency",
    body: "PBJT is built on collective strength. Worker groups, communities and local actors enable shared decision-making and accountability.",
  },
];

const TOOLS = [
  {
    num: "1",
    Icon: Network,
    title: "Value Chain Mapping Tools",
    body: "Identify informal and last-tier actors",
  },
  {
    num: "2",
    Icon: FileText,
    title: "Community Impact Reflection Guides",
    body: "Assess environmental and social change",
  },
  {
    num: "3",
    Icon: ClipboardCheck,
    title: "Worker-led Audit Formats",
    body: "Reflect lived labour conditions",
  },
  {
    num: "4",
    Icon: MessageCircle,
    title: "Collective Dialogue Templates",
    body: "Grievance redressal and negotiation",
  },
];

const VALUES = [
  {
    Icon: Users,
    title: "People First",
    body: "Centering workers and communities in every step.",
  },
  {
    Icon: Handshake,
    title: "Local Realities",
    body: "Solutions shaped by context, rooted in place.",
  },
  {
    Icon: Shield,
    title: "Accountability",
    body: "Shared responsibility with transparent action.",
  },
  {
    Icon: Leaf,
    title: "Sustainable Change",
    body: "Long-term impact through collaboration.",
  },
];

/* ----------------------------------------------------------------
   Small building blocks
-----------------------------------------------------------------*/

function IconBadge({ Icon, size = "md", tone = "soft" }) {
  const box =
    size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "lg" ? 26 : size === "sm" ? 18 : 22;
  const tones = {
    soft: "bg-red-50 text-red-600 ring-1 ring-red-100",
    solid: "bg-red-600 text-white",
  };
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${box} ${tones[tone]}`}
    >
      <Icon size={icon} strokeWidth={1.9} />
    </span>
  );
}

function NodeCard({ Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-red-100 bg-white px-3 py-2 shadow-[0_6px_20px_-8px_rgba(190,18,18,0.25)] transition-transform duration-300 hover:-translate-y-1">
      <Icon size={22} strokeWidth={1.9} className="text-red-600" />
      <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-slate-700">
        {label}
      </span>
    </div>
  );
}

/* ----------------------------------------------------------------
   Hub-and-spoke diagram
   - md+ : true radial layout with connecting lines
   - mobile : center disc + responsive grid (radial would be unreadable)
-----------------------------------------------------------------*/

function CenterDisc() {
  return (
    <div className="relative flex aspect-square w-full max-w-[200px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-center text-white shadow-[0_18px_50px_-12px_rgba(190,18,18,0.6)]">
      <Users size={34} strokeWidth={1.9} />
      <span className="mt-1 px-4 text-base font-bold leading-tight">
        Shared
        <br />
        Responsibility
      </span>
    </div>
  );
}

function RadialDiagram() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] md:block">
      {/* connecting lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {STAKEHOLDERS.map((s) => (
          <line
            key={s.label}
            x1="50"
            y1="50"
            x2={s.x}
            y2={s.y}
            stroke="#fca5a5"
            strokeWidth="0.6"
            strokeDasharray="2 2"
          />
        ))}
      </svg>

      {/* slow rotating decorative ring */}
      <div
        className="absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-red-200"
        style={{ animation: "spin 48s linear infinite" }}
      />

      {/* center */}
      <div className="absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2">
        <CenterDisc />
      </div>

      {/* nodes */}
      {STAKEHOLDERS.map((s, i) => (
        <div
          key={s.label}
          className="fade-up absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${0.15 * i}s`,
          }}
        >
          <NodeCard Icon={s.Icon} label={s.label} />
        </div>
      ))}
    </div>
  );
}

function StackedDiagram() {
  return (
    <div className="flex flex-col items-center gap-6 md:hidden">
      <CenterDisc />
      <div className="grid w-full grid-cols-2 gap-3 xs:grid-cols-3 sm:grid-cols-4">
        {STAKEHOLDERS.map((s) => (
          <NodeCard key={s.label} Icon={s.Icon} label={s.label} />
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   Sections
-----------------------------------------------------------------*/

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      {/* copy */}
      <div className="fade-up">
        <span className="inline-block rounded-md bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
          PBJT Framework
        </span>

        <h1 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.7rem]">
          A place-based framework for{" "}
          <span className="text-red-600">shared responsibility</span> and{" "}
          <span className="text-red-600">community-led change</span>
        </h1>

        <div className="mt-5 h-1 w-14 rounded-full bg-red-600" />

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600">
          PBJT is a collaborative framework designed to help businesses,
          workers, MSMEs, vendors and communities respond collectively to
          environmental and social challenges.
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
          Rather than treating sustainability as compliance, PBJT focuses on
          relationships, accountability and local realities.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("principles")}
            className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700"
          >
            Explore Framework
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollTo("tools")}
            className="group inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
          >
            View Methodology
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* diagram */}
      <div className="fade-up" style={{ animationDelay: "0.1s" }}>
        <RadialDiagram />
        <StackedDiagram />
      </div>
    </section>
  );
}

function LastTier() {
  return (
    <section className="mt-16 rounded-2xl border border-red-100 bg-red-50/60 p-6 sm:p-9">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_2px_minmax(0,1.6fr)] lg:items-center">
        <div className="flex gap-4">
          <IconBadge Icon={Users} size="lg" tone="solid" />
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Starting From Last Tier
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              PBJT begins with people and actors often invisible in traditional
              systems but essential to local economies and value chains.
            </p>
          </div>
        </div>

        <div className="hidden h-full w-px bg-red-200 lg:block" />

        <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:justify-between">
          {VALUE_CHAIN.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-2 text-center">
                <step.Icon
                  size={32}
                  strokeWidth={1.8}
                  className="text-red-600"
                />
                <span className="text-sm font-semibold text-slate-800">
                  {step.label}
                </span>
              </div>
              {i < VALUE_CHAIN.length - 1 && (
                <ArrowRight
                  size={18}
                  className="mx-auto rotate-90 text-red-300 md:rotate-0"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ Icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <IconBadge Icon={Icon} />
      <h2 className="text-xl font-bold text-slate-900">{children}</h2>
    </div>
  );
}

function Principles() {
  return (
    <div
      id="principles"
      className="scroll-mt-8 rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <SectionHeading Icon={Shield}>Foundational Principles</SectionHeading>
      <div className="mt-3 h-1 w-10 rounded-full bg-red-600" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-red-100 bg-red-50/50 p-5 transition hover:border-red-200 hover:bg-red-50"
          >
            <IconBadge Icon={p.Icon} />
            <h3 className="mt-4 text-base font-bold leading-snug text-slate-900">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tools() {
  return (
    <div
      id="tools"
      className="scroll-mt-8 rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <SectionHeading Icon={Wrench}>
        Tools and Engagement Methods
      </SectionHeading>
      <p className="mt-2 text-sm text-slate-500">
        Practical tools that make PBJT actionable for communities and
        practitioners.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {TOOLS.map((t) => (
          <div
            key={t.title}
            className="group flex gap-3 rounded-xl border border-red-100 bg-red-50/50 p-5 transition hover:border-red-200 hover:bg-red-50"
          >
            <IconBadge Icon={t.Icon} size="sm" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                <span className="text-red-600">{t.num}.</span> {t.title}
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                {t.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ValuesStrip() {
  return (
    <section className="mt-16 rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v, i) => (
          <div
            key={v.title}
            className={`flex flex-col gap-3 sm:px-2 lg:px-5 ${
              i !== 0 ? "lg:border-l lg:border-red-100" : ""
            }`}
          >
            <IconBadge Icon={v.Icon} size="sm" />
            <h3 className="text-sm font-bold text-slate-900">{v.title}</h3>
            <p className="text-[13px] leading-relaxed text-slate-600">
              {v.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="mt-16 rounded-2xl bg-red-600 px-6 py-10 text-center text-white sm:py-12">
      <div className="mx-auto flex max-w-3xl items-start justify-center gap-3">
        <span className="select-none font-serif text-5xl leading-none text-red-300">
          &ldquo;
        </span>
        <p className="font-serif text-lg italic leading-relaxed sm:text-2xl">
          Each tool is designed to support discussion, not compliance.
        </p>
        <span className="select-none font-serif text-5xl leading-none text-red-300">
          &rdquo;
        </span>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Page
-----------------------------------------------------------------*/

export default function PBJTFramework() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-red-50/40 text-slate-800">
      {/* local styles: entrance + xs breakpoint helper */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp .7s ease-out both; }
        @media (min-width: 420px) {
          .xs\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up { animation: none; }
          [style*="spin"] { animation: none !important; }
        }
      `}</style>

      <div className="h-1.5 w-full bg-red-600" />

      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Hero />
        <LastTier />

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <Principles />
          <Tools />
        </section>

        <ValuesStrip />
        <QuoteBanner />
      </main>
    </div>
  );
}

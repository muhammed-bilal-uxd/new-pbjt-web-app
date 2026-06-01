import React from "react";

const primary = "#BA151D";

const themes = [
  {
    title: "Reimagining Waste Systems",
    impact:
      "Transition from irregular waste disposal to a cleaner environment supported by community participation.",
    steps: [
      "Waste issues identified; initial engagement with households and vendors.",
      "Awareness walks conducted to mobilize community participation.",
      "Mass cleaning drive removed garbage and built awareness.",
      "Cleaner public spaces with improved household waste practices and community ownership.",
    ],
  },
  {
    title: "From Use to Responsibility",
    impact:
      "Movement from open burning and pollution to circular waste management and responsible retail behaviour.",
    steps: [
      "Discussions initiated to form an Environmental Protection Committee.",
      "Committee formed with 8 volunteers focusing on awareness and plastic reduction.",
      "The Environmental Protection Committee expanded with strong community participation.",
      "WhatsApp group with 242 members driving coordinated environmental action.",
    ],
  },
  {
    title: "Business with Purpose",
    impact:
      "Increased accountability among vendors and households has reduced plastic pollution and strengthened responsible waste handling.",
    steps: [
      "Awareness sessions on the harmful impacts of polythene bags.",
      "Vendors and households encouraged to reduce single-use plastics.",
      "Improved segregation; polythene waste now systematically collected.",
      "18 kg plastic waste collected weekly and responsibly managed.",
    ],
  },
  {
    title: "Protecting Workers, Respecting Labour",
    impact:
      "Increased awareness and facilitation have improved access to social security for unorganised workers.",
    steps: [
      "Awareness raised on Welfare Scheme; low awareness identified.",
      "Labourers supported with Welfare Board registration.",
      "39 workers received ID cards and now access social protection benefits.",
    ],
  },
];

const outcomes = [
  {
    title: "Environmental Outcomes",
    items: [
      "Cleaner public spaces",
      "Improved waste segregation practices",
      "Reduction in single-use plastic consumption",
      "Community-led waste management initiatives",
      "Regular plastic waste collection and responsible disposal",
    ],
  },
  {
    title: "Community Outcomes",
    items: [
      "Stronger citizen participation",
      "Formation of Environmental Protection Committees",
      "Large-scale engagement through WhatsApp community groups",
      "Increased ownership of local environmental issues",
    ],
  },
  {
    title: "Labour Outcomes",
    items: [
      "Improved awareness of welfare schemes",
      "Increased access to Welfare Board registration",
      "Enhanced social security coverage for unorganised workers",
      "Better recognition and protection of labour rights",
    ],
  },
];

export default function VirudhunagarPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-700">
            Before & Beyond
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Virudhunagar Journey of Transformation
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
                Virudhunagar is an industrial and agricultural district facing
                waste, climate, livelihood, and labour challenges. This journey
                captures how community participation, responsible business, and
                worker protection are becoming part of local development.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["18kg", "plastic collected weekly"],
                ["242", "WhatsApp members"],
                ["39", "worker ID cards"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl bg-[#fff5f5] p-4">
                  <h3
                    className="text-3xl font-black"
                    style={{ color: primary }}
                  >
                    {value}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-neutral-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {themes.map((theme, index) => (
            <article
              key={theme.title}
              className="rounded-[28px] bg-white p-6 shadow-sm"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black text-white"
                style={{ backgroundColor: primary }}
              >
                {index + 1}
              </div>
              <h2 className="mt-5 text-xl font-black">{theme.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {theme.impact}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-4 pb-10 sm:px-6 lg:px-8">
        {themes.map((theme, index) => (
          <article
            key={theme.title}
            className="overflow-hidden rounded-[32px] bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="border-b border-neutral-100 p-6 md:p-8 lg:border-b-0 lg:border-r">
                <p className="text-sm font-bold text-red-700">
                  Theme {index + 1}
                </p>
                <h2 className="mt-3 text-2xl font-black md:text-3xl">
                  {theme.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {theme.impact}
                </p>
              </div>

              <div className="grid sm:grid-cols-2">
                {theme.steps.map((step, stepIndex) => (
                  <div
                    key={step}
                    className="border-b border-neutral-100 p-6 sm:border-r"
                  >
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white"
                      style={{ backgroundColor: primary }}
                    >
                      {stepIndex + 1}
                    </span>
                    <h3 className="mt-4 font-black">Step {stepIndex + 1}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-neutral-950 p-6 text-white md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">Key Outcomes</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"
              >
                <h3 className="text-lg font-black">{outcome.title}</h3>
                <ul className="mt-5 space-y-3">
                  {outcome.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-neutral-300"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-700">
            Long-Term Vision
          </p>
          <h2 className="mt-5 max-w-5xl text-3xl font-black leading-tight md:text-5xl">
            A resilient Virudhunagar where environmental sustainability,
            responsible business practices, community participation, and worker
            well-being are integrated into local development pathways.
          </h2>
        </div>
      </section>
    </main>
  );
}

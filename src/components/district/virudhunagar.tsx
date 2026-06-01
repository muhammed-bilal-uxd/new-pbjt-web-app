import React from "react";

import styles from "./virudunagar.module.css";

const imgUrl = "/images/virudunagar/virudunagar-01.png";
const imgUrlBase = "/images/virudunagar/";

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

interface TransformationTheme {
  title: string;
  image: string;
}

const transformationThemes: TransformationTheme[] = [
  {
    title: "Reimagining Waste Systems",
    image: imgUrlBase + "before-beyond-1a.png",
  },
  {
    title: "From Use to Responsibility",
    image: imgUrlBase + "before-beyond-2a.png",
  },
  {
    title: "Business with Purpose",
    image: imgUrlBase + "before-beyond-3a.png",
  },
  {
    title: "Protecting Workers, Respecting Labour",
    image: imgUrlBase + "before-beyond-4a.png",
  },
];

function VirudhunagarTransformationSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[32px] p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Before & Beyond
          </h1>

          <div className="mt-6 h-1.5 w-24 rounded-full bg-[#ba151d]" />
        </div>

        {/* Right Image Items */}
        <div className="grid grid-cols-2 gap-5 sm:gap-6">
          {transformationThemes.map((item, index) => (
            <article
              key={item.title}
              className={
                "group relative overflow-hidden rounded-[28px] bg-neutral-100 shadow-md"
              }
            >
              <div className="aspect-[1.05/1] overflow-hidden">
                <img
                  src={item.image}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black leading-tight text-[#ba151d] shadow-md sm:text-sm">
                  {item.title}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// return "here one";
export default function VirudhunagarPage({
  districtName,
}: {
  districtName: string;
}) {
  return (
    <main className="min-h-screen bg-[#f8f5f2] text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-10">
          {/* <p
            className={
              styles.bannerTitle + " text-sm font-bold tracking-[0.25em]"
            }
          >
            Before & Beyond
          </p> */}

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1
                className={
                  " text-[2rem] font-black uppercase leading-tight tracking-tight text-neutral-950 sm:text-5xl"
                }
              >
                Virudhunagar Journey of Transformation
              </h1>
              <span className={styles.rule}></span>
              <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
                Virudhunagar is an industrial and agricultural district facing
                waste, climate, livelihood, and labour challenges. This journey
                captures how community participation, responsible business, and
                worker protection are becoming part of local development.
              </p>
            </div>

            <div>
              <img
                src={"/images/in-practice/location-2d.png"}
                className="rounded-xl"
              />
              <div className="grid grid-cols-3 gap-3 mt-3">
                {[
                  ["18kg", "plastic collected weekly"],
                  ["242", "WhatsApp members"],
                  ["39", "worker ID cards"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-2xl bg-[#fff5f5] p-4 text-center"
                  >
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
        </div>
      </section>
      {/* <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
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
      </section> */}

      <VirudhunagarTransformationSection />

      <section className="mx-auto max-w-7xl space-y-6 px-4 pb-10 sm:px-6 lg:px-8 mt-15">
        {themes.map((theme, index) => (
          <article
            key={theme.title}
            className="overflow-hidden rounded-[32px] bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="border-b border-neutral-100 p-6 md:p-8 lg:border-b-0 lg:border-r">
                {/* <p className="text-sm font-bold text-red-700">
                  Theme {index + 1}
                </p> */}
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
                    {/* <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white"
                      style={{ backgroundColor: primary }}
                    >
                      {stepIndex + 1}
                    </span>
                    <h3 className="mt-4 font-black">Step {stepIndex + 1}</h3> */}

                    <img
                      src={imgUrl}
                      className="w-[300px] h-[200px] object-cover overflow-hidden rounded-md"
                    />

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
        <div className="rounded-[32px] bg-white p-6 text-neutral-950 shadow-sm ring-1 ring-neutral-200 md:p-10">
          <div className="flex items-center gap-3">
            <span className="h-10 w-1.5 rounded-full bg-[#ba151d]" />
            <h2 className="text-3xl font-black md:text-4xl">Key Outcomes</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-3xl bg-[#ba151d]/[0.03] p-6 ring-1 ring-[#ba151d]/20 transition hover:-translate-y-1 hover:bg-[#ba151d]/[0.05] hover:shadow-lg"
              >
                <h3 className="text-lg font-black text-[#ba151d]">
                  {outcome.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {outcome.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-neutral-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ba151d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-[#ba151d]/20 md:p-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ba151d]/10 blur-3xl" />
          <div className="absolute left-0 top-0 h-full w-2 bg-[#ba151d]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ba151d]">
              Long-Term Vision
            </p>

            <h2 className="mt-5 max-w-5xl text-3xl font-black leading-tight text-neutral-950 md:text-5xl">
              A resilient Virudhunagar where environmental sustainability,
              responsible business practices, community participation, and
              worker well-being are integrated into local development pathways.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}

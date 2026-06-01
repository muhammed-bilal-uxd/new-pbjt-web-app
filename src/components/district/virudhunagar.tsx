import React from "react";

import styles from "./virudunagar.module.css";

const imgUrl = "/images/virudunagar/virudunagar-01.png";
const imgUrlBase = "/images/virudunagar/";

const primary = "#BA151D";

interface IThemeStep {
  text: string;
  image: string;
  imageClass: string;
}

interface ITheme {
  title: string;
  impact: string;
  steps: IThemeStep[];
}

const themes: ITheme[] = [
  {
    title: "Reimagining Waste Systems",
    impact:
      "Transition from irregular waste disposal to a cleaner environment supported by community participation.",
    steps: [
      {
        text: "Waste issues identified; initial engagement with households and vendors.",
        image: imgUrlBase + "reimagining-waste-systems-1a.png",
        imageClass: "object-cover",
      },
      {
        text: "Awareness walks conducted to mobilize community participation.",
        image: imgUrlBase + "reimagining-waste-systems-2a.png",
        imageClass: "object-cover",
      },
      {
        text: "Mass cleaning drive removed garbage and built awareness.",
        image: imgUrlBase + "reimagining-waste-systems-3a.png",
        imageClass: "object-cover",
      },
      {
        text: "Cleaner public spaces with improved household waste practices and community ownership.",
        image: imgUrlBase + "reimagining-waste-systems-4a.png",
        imageClass: "object-cover",
      },
    ],
  },
  {
    title: "From Use to Responsibility",
    impact:
      "Movement from open burning and pollution to circular waste management and responsible retail behaviour.",
    steps: [
      {
        text: "Discussions initiated to form an Environmental Protection Committee.",
        image: imgUrlBase + "responsibility-1a.png",
        imageClass: "object-cover",
      },
      {
        text: "Committee formed with 8 volunteers focusing on awareness and plastic reduction.",
        image: imgUrlBase + "responsibility-2a.png",
        imageClass: "object-cover",
      },
      {
        text: "The Environmental Protection Committee expanded with strong community participation.",
        image: imgUrlBase + "responsibility-3a.png",
        imageClass: "object-cover",
      },
      {
        text: "WhatsApp group with 242 members driving coordinated environmental action.",
        image: imgUrlBase + "responsibility-4a.png",
        imageClass: "object-contain",
      },
    ],
  },
  {
    title: "Business with Purpose",
    impact:
      "Increased accountability among vendors and households has reduced plastic pollution and strengthened responsible waste handling.",
    steps: [
      {
        text: "Awareness sessions on the harmful impacts of polythene bags.",
        image: imgUrlBase + "purpose-1a.png",
        imageClass: "object-cover",
      },
      {
        text: "Vendors and households encouraged to reduce single-use plastics.",
        image: imgUrlBase + "purpose-2a.png",
        imageClass: "object-cover",
      },
      {
        text: "Improved segregation; polythene waste now systematically collected.",
        image: imgUrlBase + "purpose-3a.png",
        imageClass: "object-cover",
      },
      {
        text: "18 kg plastic waste collected weekly and responsibly managed.",
        image: imgUrlBase + "purpose-4a.png",
        imageClass: "object-cover",
      },
    ],
  },
  {
    title: "Protecting Workers, Respecting Labour",
    impact:
      "Increased awareness and facilitation have improved access to social security for unorganised workers.",
    steps: [
      {
        text: "Awareness raised on Welfare Scheme; low awareness identified.",
        image: imgUrlBase + "protect-1a.png",
        imageClass: "object-cover",
      },
      {
        text: "Labourers supported with Welfare Board registration.",
        image: imgUrlBase + "protect-2a.png",
        imageClass: "object-cover",
      },
      {
        text: "39 workers received ID cards and now access social protection benefits.",
        image: imgUrlBase + "protect-3a.png",
        imageClass: "object-cover",
      },
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
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-[24px] bg-white px-0 sm:rounded-[32px] sm:px-6 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left Content */}
          <div className="max-w-2xl text-left">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ba151d] sm:text-sm">
              Virudhunagar Transformation
            </p>

            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Before & Beyond
            </h1>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#ba151d] sm:w-24" />

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              A visual journey of how local participation, responsible business,
              and worker protection are shaping community-led transformation.
            </p>
          </div>

          {/* Right Image Items */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {transformationThemes.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[22px] bg-neutral-100 shadow-sm ring-1 ring-neutral-200 sm:rounded-[28px]"
              >
                <div className="aspect-[16/11] overflow-hidden sm:aspect-[1.05/1]">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="inline-flex max-w-full rounded-full bg-white px-3 py-2 text-[11px] font-black leading-tight text-[#ba151d] shadow-md sm:px-4 sm:text-sm">
                    {item.title}
                  </span>
                </div>
              </article>
            ))}
          </div>
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
                    key={step?.text}
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
                      src={step?.image || imgUrl}
                      className={
                        "w-[300px] h-[200px] overflow-hidden rounded-md " +
                        step.imageClass
                      }
                    />

                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {step?.text}
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

            <h2 className="mt-5 max-w-5xl text-3xl font-black leading-tight text-neutral-950">
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

import {
  Users,
  Home,
  GraduationCap,
  HeartPulse,
  Droplet,
  Leaf,
  Briefcase,
  Road,
  ArrowRight,
  PlayCircle,
  FileCheck,
  Vote,
  Award,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { scrollToElement } from "@/utils/scroll";

const red = "#ba151d";
const imgUrl = "/images/krishnagiri/";

const stats = [
  { icon: Users, value: "86+", label: "Field Activities" },
  { icon: Home, value: "2,201+", label: "Households Covered" },
  { icon: Users, value: "2,201", label: "Members Engaged" },
  { icon: GraduationCap, value: "387", label: "Students Supported" },
  { icon: HeartPulse, value: "59", label: "Health Insurance Beneficiaries" },
  { icon: FileCheck, value: "120", label: "Aadhaar Cards Issued" },
  { icon: Vote, value: "10", label: "Voter IDs Issued" },
  { icon: Award, value: "64", label: "Community Certificates" },
  { icon: FileCheck, value: "100", label: "Land Pattas Received" },
];

const focusAreas = [
  {
    icon: Users,
    title: "Community Empowerment",
    text: "Building strong communities through participation and inclusion.",
  },
  {
    icon: Briefcase,
    title: "Livelihood & Enterprise",
    text: "Creating opportunities and supporting local entrepreneurs.",
  },
  {
    icon: Road,
    title: "Infrastructure Development",
    text: "Building better infrastructure for connectivity and growth.",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills",
    text: "Empowering minds and building skills for tomorrow.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    text: "Improving access to healthcare and wellness for all.",
  },
  {
    icon: Droplet,
    title: "Water & Sanitation",
    text: "Ensuring clean water and sanitation for healthy communities.",
  },
  {
    icon: Leaf,
    title: "Sustainable Environment",
    text: "Protecting nature and promoting sustainable living.",
  },
];

interface IInitiativeStep {
  text: string;
  image: string;
}

interface IInitiative {
  color: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  steps: IInitiativeStep[];
}

const initiatives: IInitiative[] = [
  {
    color: "red",
    icon: TrendingUp,
    title: "Business with Purpose",
    desc: "Empowering local businesses for sustainable growth.",
    steps: [
      {
        text: "30 vendors committed to proper waste segregation and disposal.",
        image: imgUrl + "business-with-purpose-1a.jpeg",
      },
      {
        text: "Discussions held with sanitation workers on regular waste collection.",
        image: imgUrl + "business-with-purpose-2a.jpeg",
      },
      {
        text: "Market waste collection systems strengthened.",
        image: imgUrl + "business-with-purpose-3a.jpeg",
      },
      {
        text: "Market areas cleaned; vendors stopped dumping waste in public spaces.",
        image: imgUrl + "business-with-purpose-4a.jpeg",
      },
    ],
  },
  {
    color: "green",
    icon: Leaf,
    title: "Kitchen Garden",
    desc: "Promoting kitchen gardens for nutrition and self-reliance.",
    steps: [
      {
        text: "Discussions initiated on promoting kitchen gardens.",
        image: imgUrl + "kitchen-garden-1a.jpeg",
      },
      {
        text: "Seeds distributed; guidance provided on plant care.",
        image: imgUrl + "kitchen-garden-2a.jpeg",
      },
      {
        text: "Households started kitchen gardens.",
        image: imgUrl + "kitchen-garden-3a.jpeg",
      },
      {
        text: "Community members are sharing surplus vegetables.",
        image: imgUrl + "kitchen-garden-4a.jpeg",
      },
    ],
  },
  {
    color: "purple",
    icon: GraduationCap,
    title: "Education",
    desc: "Improving education access, quality and opportunities.",
    steps: [
      {
        text: "Subject-wise mentoring classes conducted.",
        image: imgUrl + "education-1a.jpeg",
      },
      {
        text: "Monthly parent meetings promoted education.",
        image: imgUrl + "education-2a.jpeg",
      },
      {
        text: "Auto escort facility enabled regular school attendance.",
        image: imgUrl + "education-3a.jpeg",
      },
      {
        text: "Career guidance increased higher education enrolment.",
        image: imgUrl + "education-4a.png",
      },
    ],
  },
];

interface ITransformationImage {
  label: string;
  image: string;
}

const transformationData: ITransformationImage[] = [
  {
    label: "Before",
    image: imgUrl + "before-1a.png",
  },
  {
    label: "Beyond",
    image: imgUrl + "before-2a.png",
  },
  {
    label: "Transformation",
    image: imgUrl + "before-3a.png",
  },
];

export default function KrishnagiriPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 0%, rgba(255,255,255,.92) 36%, rgba(255,255,255,.4) 70%), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 font-bold uppercase tracking-wide text-[#ba151d]">
              Krishnagiri
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
              Journey of Transformation – Before & Beyond
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
              From challenges to change, from vision to reality — exploring the
              inspiring transformation of Krishnagiri through people, purpose
              and collective action.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="flex items-center gap-3 rounded-xl bg-[#ba151d] px-6 py-4 font-semibold text-white shadow-lg shadow-red-200 cursor-pointer"
                onClick={() => {
                  scrollToElement("krishnagiri-journey", 150);
                }}
              >
                Explore the Journey <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-3">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="border border-slate-100 p-6 text-center"
                >
                  <Icon className="mx-auto mb-3 text-[#ba151d]" size={34} />
                  <h3 className="text-2xl font-extrabold">{item.value}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-4 rounded-3xl bg-white p-5 shadow-xl md:grid-cols-3 lg:grid-cols-7">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-100 p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <Icon className="text-[#ba151d]" size={32} />
                </div>
                <h3 className="text-sm font-extrabold">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-10 rounded-3xl bg-gradient-to-br from-red-50 to-white p-6 shadow-sm lg:grid-cols-2 lg:p-10">
          <div className="grid grid-cols-2 gap-4">
            {transformationData.map((data, index) => (
              <div
                key={data?.label}
                className={`relative overflow-hidden rounded-[2rem] ${
                  index === 2 ? "col-span-2 mx-auto w-2/3" : ""
                }`}
              >
                <img src={data?.image} className="h-48 w-full object-cover" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#ba151d] shadow">
                  {data?.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col justify-center"
            id="krishnagiri-journey"
          >
            <p className="font-bold uppercase text-[#ba151d]">
              About Krishnagiri
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              A Journey of Transformation – Before & Beyond
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-700">
              A story of resilience, collective effort and sustainable progress
              that continues to shape a better tomorrow.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["86+", "Field Activities"],
                ["2,201+", "Households Impacted"],
                ["387+", "Students Supported"],
                ["Countless", "Lives Transformed"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white p-4 shadow">
                  <h4 className="text-xl font-extrabold">{value}</h4>
                  <p className="mt-1 text-xs text-slate-600">{label}</p>
                </div>
              ))}
            </div>

            {/* <button className="mt-8 flex w-fit items-center gap-3 rounded-xl bg-[#ba151d] px-6 py-4 font-semibold text-white">
              Know More About Us <ArrowRight size={18} />
            </button> */}
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="mx-auto max-w-7xl px-5 py-8 pb-16 lg:px-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Our Initiatives</h2>
          {/* <button className="flex items-center gap-2 font-bold text-[#ba151d]">
            View All Initiatives <ArrowRight size={18} />
          </button> */}
        </div>

        <div className="space-y-5">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            const colorClass =
              item.color === "green"
                ? "text-green-700 bg-green-50"
                : item.color === "purple"
                  ? "text-purple-700 bg-purple-50"
                  : "text-[#ba151d] bg-red-50";

            return (
              <div
                key={index}
                className="grid overflow-hidden rounded-3xl bg-white shadow-lg lg:grid-cols-[260px_1fr]"
              >
                <div className={`p-6 ${colorClass}`}>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                    <Icon size={34} />
                  </div>
                  <h3 className="text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.desc}
                  </p>
                  {/* <button className="mt-5 flex items-center gap-2 text-sm font-bold">
                    Learn More <ArrowRight size={16} />
                  </button> */}
                </div>

                <div className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-4">
                  {item.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="relative">
                      <img
                        src={step?.image}
                        className="mb-3 h-32 w-full rounded-xl object-cover"
                      />
                      <span className="absolute left-2 top-22 flex h-8 w-8 items-center justify-center rounded-full bg-[#ba151d] text-sm font-bold text-white">
                        {stepIndex + 1}
                      </span>
                      <p className="text-sm font-medium leading-6">
                        {step?.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

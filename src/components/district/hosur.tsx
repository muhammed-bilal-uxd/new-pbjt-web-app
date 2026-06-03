import React from "react";
import {
  MapPin,
  Factory,
  Users,
  HeartHandshake,
  ArrowRight,
  Building2,
  MessageCircle,
  BriefcaseBusiness,
  FileSearch,
  Stethoscope,
  Network,
  BookOpen,
  Home,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { scrollToElement } from "@/utils/scroll";

import BannerTag from "@/components/banner-tag/banner-tag";

const primary = "#ba151d";

const insights = [
  {
    icon: MapPin,
    title: "Geography & Connectivity",
    text: "Located in Krishnagiri district along the NH-44 corridor, Hosur is one of India’s fastest-growing industrial hubs.",
  },
  {
    icon: Factory,
    title: "Industrial Growth",
    text: "A major manufacturing centre across automobiles, EVs, electronics, textiles, leather, food processing and agro-processing.",
  },
  {
    icon: Users,
    title: "Livelihoods",
    text: "Attracts migrant workers from Odisha, Bihar, Assam, Jharkhand, Chhattisgarh, Uttar Pradesh and other states.",
  },
  {
    icon: HeartHandshake,
    title: "Care Economy",
    text: "Industrial growth creates employment while exposing gaps in childcare, healthcare, housing, education and social protection.",
  },
];

const stats = [
  ["5.38%", "Annual Population Growth Rate"],
  ["13th", "Global Rank for Urban Growth"],
  ["2.1 lakh", "Working Population"],
  ["28%", "Female Workers"],
];

const journey = [
  {
    icon: Users,
    title: "Understanding Workers’ Needs",
    text: "Engaged with migrant workers and families to understand challenges related to health, housing, education, livelihoods and social protection.",
  },
  {
    icon: MessageCircle,
    title: "Facilitating Community Voices",
    text: "Conducted worker group discussions and participatory exercises to identify priorities, aspirations and pathways for support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Engaging MSMEs & Business Ecosystems",
    text: "Worked with MSMEs, vendors, associations and businesses to understand workforce challenges and emerging good practices.",
  },
  {
    icon: FileSearch,
    title: "Generating Evidence For Change",
    text: "Undertook studies with workers, MSMEs and businesses to understand worker wellbeing, productivity and industrial resilience.",
  },
  {
    icon: Stethoscope,
    title: "Demonstrating Practical Solutions",
    text: "Organised workshops, medical camps and stakeholder consultations to address immediate challenges and build trust.",
  },
  {
    icon: Network,
    title: "Building An Ecosystem Of Change",
    text: "Brought together businesses, associations, government and communities to co-create sustainable industrial solutions.",
  },
];

const priorities = [
  {
    icon: BookOpen,
    title: "Education & Child Welfare",
    text: "Language barriers, school access, learning continuity and childcare support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Livelihoods & Wage Security",
    text: "Fair wages, timely payments, safe working conditions and job security.",
  },
  {
    icon: Home,
    title: "Housing & Living Conditions",
    text: "Affordable housing, reduced overcrowding, sanitation and basic amenities.",
  },
  {
    icon: HeartHandshake,
    title: "Healthcare & Social Protection",
    text: "Access to healthcare, PF/ESI, insurance and welfare schemes.",
  },
  {
    icon: Users,
    title: "Care Economy",
    text: "Recognising unpaid care work and strengthening care services for families.",
  },
  {
    icon: Handshake,
    title: "Responsible Business",
    text: "Stronger collaboration between businesses, workers, MSMEs and institutions.",
  },
];

export default function HosurPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 0%, rgba(255,255,255,.94) 42%, rgba(255,255,255,.5) 78%), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="relative mx-auto grid center-content gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:py-20">
          <div>
            <BannerTag name={"Hosur"} />

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Building a Care-Supportive Industrial Ecosystem
            </h1>

            <p className="mt-6 max-w-2xl  leading-8 text-slate-700 md:text-lg">
              One of India’s fastest-growing industrial hubs, where migration,
              manufacturing and the care economy intersect.
            </p>

            <button
              className="mt-8 flex items-center gap-3 rounded-xl bg-[#ba151d] px-6 py-4 font-semibold text-white shadow-lg shadow-red-200 cursor-pointer"
              onClick={() => {
                scrollToElement("hosur-journey", 50);
              }}
            >
              Explore Hosur <ArrowRight size={18} />
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl">
              {stats.map(([value, label]) => (
                <div key={label} className="border border-slate-100 p-7">
                  <h3 className="text-3xl font-extrabold text-[#ba151d]">
                    {value}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="mx-auto center-content py-10">
        <div className="mb-6">
          <p className="font-bold uppercase text-[#ba151d]">Key Insights</p>
          <h2 className="mt-2 text-3xl font-extrabold">At A Glance</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {insights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                  <Icon className="text-[#ba151d]" size={28} />
                </div>
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* JOURNEY FLOW */}
      <section className="mx-auto center-content py-10" id="hosur-journey">
        <div className="mb-8 text-center">
          <p className="font-bold uppercase text-[#ba151d]">
            Our Journey In Hosur
          </p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            From Worker Needs To Ecosystem Change
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {journey.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="relative rounded-3xl border-2 border-[#ba151d]/20 bg-white p-5 text-center shadow-sm"
              >
                {/* <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                  <Icon className="text-[#ba151d]" size={26} />
                </div> */}

                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ba151d] text-sm font-bold text-white">
                  {index + 1}
                </span>

                <h3 className="text-sm font-extrabold uppercase leading-5">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {item.text}
                </p>

                {index !== journey.length - 1 && (
                  <ArrowRight className="absolute -right-6 top-1/2 z-10 hidden -translate-y-1/2 rounded-full p-1 text-[#ba151d] xl:block" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* STAKEHOLDER + PRIORITIES */}
      <section className="mx-auto grid center-content gap-6 py-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <div className="text-center">
            <p className="font-bold uppercase text-[#ba151d]">
              Stakeholder Mapping
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Key Actors In The Hosur Care Economy
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Government Institutions",
                "Departments, local administration and public systems.",
              ],
              [
                "Business Associations",
                "HIA, HOSMIA and other industry associations.",
              ],
              [
                "MSMEs & Businesses",
                "Industries, vendors, employers and businesses.",
              ],
              [
                "Schools & Healthcare Providers",
                "Schools, Anganwadis, healthcare services and institutions.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-red-50 p-5 text-center ring-1 ring-red-100"
              >
                <Building2 className="mx-auto mb-3 text-[#ba151d]" />
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-[#ba151d] p-5 text-center text-white">
            <Users className="mx-auto mb-2" />
            <h3 className="font-extrabold">Primary Rights Holders</h3>
            <p className="text-sm">Migrant workers and families</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
          <div className="text-center">
            <p className="font-bold uppercase text-[#ba151d]">
              Emerging Priorities In Hosur
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Ground-Up Voices From Workers & Stakeholders
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {priorities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl bg-red-50 p-4 ring-1 ring-red-100"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ba151d] text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-extrabold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIMPLE END IMAGE SECTION */}
      <section className="mx-auto center-content pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-red-50 to-white p-6 text-center shadow-sm">
          <ShieldCheck className="mx-auto mb-4 text-[#ba151d]" size={44} />
          <h2 className="text-2xl font-extrabold">
            Responsible Growth Starts With Worker Wellbeing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Hosur’s transformation depends on stronger collaboration between
            workers, businesses, institutions and communities.
          </p>
        </div>
      </section>
    </main>
  );
}

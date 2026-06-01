import React from "react";
import {
  MapPin,
  Search,
  UsersRound,
  TrendingUp,
  Sprout,
  Star,
} from "lucide-react";

import styles from "./community-map.module.css";

const steps = [
  {
    title: "Map Our Village",
    description: "Understand our village and what we face.",
    icon: MapPin,
  },
  {
    title: "Identify Priorities",
    description: "Focus on the issues that matter most.",
    icon: Search,
  },
  {
    title: "Plan Together",
    description: "Agree on actions, roles, and timeline.",
    icon: UsersRound,
  },
  {
    title: "Take Action",
    description: "Work together to make improvements.",
    icon: TrendingUp,
  },
  {
    title: "Care & Sustain",
    description: "Keep our village clean, green, and well-maintained.",
    icon: Sprout,
  },
  {
    title: "The Result",
    description: "A healthier, greener, stronger village for everyone.",
    icon: Star,
  },
];

export default function CommunityMap() {
  return (
    <section className="min-h-screen bg-slate-100 py-4 sm:py-6 lg:py-10 flex items-center justify-center">
      <div className="center-content">
        <div className="w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="relative overflow-hidden bg-gradient-to-br from-[color:var(--pbjt-primary-color)] via-[color:var(--pbjt-primary-color)] to-[color:var(--pbjt-primary-color)] p-7">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute right-48 bottom-6 h-28 w-28 rounded-full bg-white/5" />

            <p className="relative text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
              A Community Roadmap
            </p>
            <h1 className="relative mt-1 max-w-4xl text-3xl font-extrabold tracking-tight text-white">
              Building a Better Village Together
            </h1>
          </div>

          <div className="p-7">
            <p className="max-w-3xl text-1xl font-medium leading-relaxed text-slate-600">
              Simple steps for a cleaner, greener, and stronger village.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    {index !== steps.length - 1 && (
                      <div className="absolute left-[62%] top-16 hidden h-px w-[76%] bg-slate-200 xl:block" />
                    )}

                    <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-[2px] border-[color:var(--pbjt-primary-color)] ring-8 ring-white">
                      <Icon className="h-12 w-12 stroke-[1.8] text-[color:var(--pbjt-primary-color)]" />
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-[color:var(--pbjt-primary-color)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[14rem] text-base leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

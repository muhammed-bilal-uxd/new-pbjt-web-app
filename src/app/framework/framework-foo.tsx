import React from "react";
import {
  ShieldCheck,
  Users,
  GitBranch,
  ClipboardCheck,
  MessageCircle,
  Handshake,
  MapPin,
  Scale,
} from "lucide-react";

const RED = "#ba151d";

const tools = [
  {
    icon: GitBranch,
    title: "Value Chain Mapping Tools",
    text: "Identify informal and last-tier actors",
  },
  {
    icon: ClipboardCheck,
    title: "Community Impact Reflection Guides",
    text: "Assess environmental and social change",
  },
  {
    icon: ClipboardCheck,
    title: "Worker-Led Audit Formats",
    text: "Reflect lived labour conditions",
  },
  {
    icon: MessageCircle,
    title: "Collective Dialogue Templates",
    text: "For grievance redressal and negotiation",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Embedded in Business Responsibility",
    text: "A just transition must be part of everyday business responsibility. Workers, vendors, MSMEs, and communities are part of the business ecosystem, not just large firms. Responsibility moves beyond compliance to active participation in community wellbeing.",
  },
  {
    icon: Users,
    title: "Collectivisation and Collective Agency",
    text: "PBJT is built on collective strength. Worker groups, community collectives, and local associations enable shared decision-making, collective bargaining, and problem-solving.",
  },
  {
    icon: Users,
    title: "Starting from the Last Tier",
    text: "PBJT prioritises informal workers, small vendors, marginalised groups, and vulnerable communities by starting with local realities and strengthening community capacity.",
  },
  {
    icon: MapPin,
    title: "Place-Based and Context-Driven",
    text: "Every place is different. PBJT builds on local knowledge, networks, and strengths to co-create relevant and dignified transition strategies.",
  },
  {
    icon: Scale,
    title: "Equity and Redistribution of Power",
    text: "PBJT shifts decision-making power toward historically excluded workers, women, informal sector actors, and marginalised communities.",
  },
];

export default function PBJTPrinciples() {
  return (
    <section className="min-h-screen bg-white px-5 py-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 max-w-4xl text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-black md:text-6xl">
            Principles of
            <span className="block" style={{ color: RED }}>
              Place-Based Just Transition
            </span>
          </h1>

          <div
            className="mt-5 h-1 w-20 rounded-full"
            style={{ backgroundColor: RED }}
          />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            To make Place-Based Transition actionable, PBJT develops and uses
            simple, practical tools that communities and practitioners can
            actually use.
          </p>
        </div>

        {/* Tools */}
        <div className="relative mb-8 rounded-2xl border border-red-200 bg-white p-5 md:p-8">
          <div
            className="absolute -top-5 left-5 rounded-md px-5 py-2 text-sm font-bold text-white md:left-8"
            style={{ backgroundColor: RED }}
          >
            OUR PRACTICAL TOOLS
          </div>

          <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="border-red-100 text-left lg:border-r last:border-r-0"
                >
                  <div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${RED}12` }}
                  >
                    <Icon size={32} style={{ color: RED }} strokeWidth={2.2} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold" style={{ color: RED }}>
                    {item.title}
                  </h3>

                  <p className="text-base leading-7 text-gray-700">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="mb-10 rounded-2xl border border-red-200 bg-red-50/40 p-6">
          <div className="grid gap-6 md:grid-cols-[80px_1fr]">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: `${RED}10` }}
            >
              <Users size={32} style={{ color: RED }} />
            </div>

            <div className="space-y-5 text-lg leading-8 text-gray-800">
              <p>
                Each tool is designed to{" "}
                <strong style={{ color: RED }}>
                  support discussion, not compliance.
                </strong>{" "}
                They help communities ask better questions, and help businesses
                see what is usually invisible.
              </p>

              <hr className="border-red-100" />

              <p>
                Our approach prioritises{" "}
                <strong style={{ color: RED }}>
                  strengthening existing groups and practices
                </strong>{" "}
                rather than introducing external systems that fade once a project
                ends.
              </p>
            </div>
          </div>
        </div>

        {/* Principles List */}
        <div className="space-y-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={index}
                className="grid gap-5 md:grid-cols-[90px_1fr]"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${RED}10` }}
                >
                  <Icon size={40} style={{ color: RED }} strokeWidth={2.2} />
                </div>

                <div
                  className="border-l-2 pl-6"
                  style={{ borderColor: RED }}
                >
                  <h2 className="mb-2 text-2xl font-bold" style={{ color: RED }}>
                    {item.title}
                  </h2>

                  <p className="max-w-5xl text-lg leading-8 text-gray-800">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
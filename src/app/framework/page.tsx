import {
  Building2,
  Factory,
  Store,
  Users,
  Leaf,
  Network,
  Truck,
  ShoppingBag,
  ShieldCheck,
  Wrench,
  ClipboardCheck,
  MessageCircle,
  Handshake,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

import styles from "./framework.module.css";
import CustomTitle from "@/components/custom-title/custom-title";
import Banner from "@/components/banner";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.framework;

type IconItem = {
  label: string;
  icon: LucideIcon;
};

type IconTuple = [title: string, desc: string, Icon: LucideIcon];

const actors: IconItem[] = [
  { label: "Businesses", icon: Building2 },
  { label: "Industry", icon: Factory },
  { label: "Vendors", icon: Store },
  { label: "Communities", icon: Users },
  { label: "Environment", icon: Leaf },
  { label: "MSMEs", icon: Network },
  { label: "Workers", icon: Users },
];

const chain: IconItem[] = [
  { label: "Brands", icon: Building2 },
  { label: "Manufacturers", icon: Factory },
  { label: "Suppliers", icon: Truck },
  { label: "Distributors", icon: Store },
  { label: "Retailers", icon: ShoppingBag },
];

const tools: IconTuple[] = [
  [
    "Value Chain Mapping Tools",
    "Identify informal and last-tier actors",
    Network,
  ],
  [
    "Community Impact Reflection Guides",
    "Assess environmental and social change",
    ClipboardCheck,
  ],
  [
    "Worker-led Audit Formats",
    "Reflect lived labour conditions",
    ClipboardCheck,
  ],
  [
    "Collective Dialogue Templates",
    "Grievance redressal and negotiation",
    MessageCircle,
  ],
];

const values: IconTuple[] = [
  ["People First", "Centering workers and communities.", Users],
  ["Local Realities", "Solutions shaped by context.", Handshake],
  ["Accountability", "Shared responsibility with action.", ShieldCheck],
  ["Sustainable Change", "Long-term impact through collaboration.", Leaf],
];

export default function PbjtMockup() {
  return (
    <>
      <Banner>
        <img
          className="single-cover-banner"
          src="/images/banner/framework-banner-01.jpg"
        />

        <div
          className={`relative d-flex flex-col items-center justify-center h-full ${styles.frameworkBannerContainer}`}
        >
          <h3 className={styles.heroText1 + " text-center"}>
            <span className="ml-2">PBJT - Framework:</span>{" "}
          </h3>
          <p className={styles.heroText2}>Principles</p>
          <p className={styles.heroText3}>
            <span className={`mt-[-50px] ${styles.heroText3Content}`}>
              of Place-Based Just Transition
            </span>
          </p>
        </div>
      </Banner>

      <div className={`${styles.hero} center-content`}>
        <div className={styles.heroText + " mt-5"}>
          <CustomTitle>
            <div className="text-4xl font-extrabold">
              A place-based framework for <strong>shared responsibility</strong>{" "}
              and <strong>community-led change.</strong>
            </div>
          </CustomTitle>

          <p className="mt-8">
            PBJT is a collaborative framework designed to help businesses,
            workers, MSMEs, vendors and communities respond collectively to
            environmental and social challenges.
          </p>

          <p>
            Rather than treating sustainability as compliance, PBJT focuses on
            relationships, accountability and local realities.
          </p>

          {/* <div className={styles.actions}>
            <button>
              Explore Framework <ArrowRight size={18} />
            </button>
            <button className={styles.secondary}>
              View Methodology <ArrowRight size={18} />
            </button>
          </div> */}
        </div>

        <div className={styles.orbitWrap}>
          {/* <div className={styles.centerCircle}>
            <Users size={42} />
            <span>Shared Responsibility</span>
          </div>

          {actors.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`${styles.actorCard} ${styles[`actor${index}`]}`}
              >
                <Icon size={30} />
                <span>{item.label}</span>
              </div>
            );
          })} */}

          <img src="/images/framework/shared-responsibility.png" />
        </div>
      </div>

      <div className={`${styles.tier} center-content`}>
        <div className={styles.tierIntro}>
          <div className={styles.circleIcon}>
            <Users size={34} />
          </div>
          <div>
            <h2>Starting From Last Tier</h2>
            <p>
              PBJT begins with people and actors often invisible in traditional
              systems but essential to local economies and value chains.
            </p>
          </div>
        </div>

        <div className={styles.chain}>
          {chain.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className={styles.chainItem} key={item.label}>
                <Icon size={38} />
                <span>{item.label}</span>
                {index !== chain.length - 1 && (
                  <ArrowRight className={styles.chainArrow} size={26} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles.grid} center-content`}>
        <div className={styles.cardLarge}>
          <div className={styles.sectionHead}>
            <ShieldCheck size={32} />
            <h2>Foundational Principles</h2>
          </div>

          <div className={styles.principleGrid}>
            <div className={styles.principle}>
              <ShieldCheck size={34} />
              <h3>Embedded in Business Responsibility</h3>
              <p>
                A just transition must be part of everyday business
                responsibility across workers, vendors, MSMEs and communities.
              </p>
            </div>

            <div className={styles.principle}>
              <Users size={34} />
              <h3>Collective Agency</h3>
              <p>
                PBJT is built on collective strength, shared decision-making and
                accountability.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cardLarge}>
          <div className={styles.sectionHead}>
            <Wrench size={32} />
            <div>
              <h2>Tools and Engagement Methods</h2>
              <p>
                Practical tools that make PBJT actionable for communities and
                practitioners.
              </p>
            </div>
          </div>

          <div className={styles.toolGrid}>
            {tools.map(([title, desc, Icon], index) => (
              <div className={styles.toolCard} key={title}>
                <div className={styles.svgContainer}>
                  <Icon size={30} />
                </div>
                <div>
                  <h3>
                    {index + 1}. {title}
                  </h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.values} center-content`}>
        {values.map(([title, desc, Icon]) => (
          <div className={styles.valueItem} key={title}>
            <Icon size={30} />
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.quote} `}>
        <div className={`${styles.quoteText} center-content`}>
          “ Each tool is designed to support discussion, not compliance. ”
        </div>
      </div>
    </>
  );
}

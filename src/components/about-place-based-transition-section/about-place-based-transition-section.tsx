"use client";

import { MoveDown } from "lucide-react";
import CustomTitle from "../custom-title/custom-title";
import styles from "./about-place-based-transition.module.css";

const riskLevels = [
  {
    icon: "🌐",
    imageUrl: "/images/about/b1.png",
    title: "Global Goals & Policies",
    subtitle: "Climate goals, international frameworks",
    tier: 1,
  },
  {
    icon: "🏭",
    imageUrl: "/images/about/b2.png",
    title: "Industries & Value Chains",
    subtitle: "Corporate strategies, market forces",
    tier: 2,
  },
  {
    icon: "🏪",
    imageUrl: "/images/about/b3.png",
    title: "Suppliers & MSMEs",
    subtitle: "Small businesses, local enterprises",
    tier: 3,
  },
  {
    icon: "👥",
    imageUrl: "/images/about/b4.png",
    title: "Last Tier: Informal Workers, Vendors & Marginalised Communities",
    subtitle: "Most vulnerable, least visible",
    tier: 4,
    highlight: true,
  },
  {
    icon: "⚠️",
    imageUrl: "/images/about/b5.png",
    title: "Concentrated Risk & Vulnerable Livelihoods",
    subtitle: "Environmental damage, income loss, insecure work, displacement",
    tier: 5,
    danger: true,
  },
];

export default function AboutPlaceBasedTransitionSection() {
  return (
    <section className={styles.section}>
      {/* Left Column */}
      <div className={styles.left}>
        <CustomTitle>
          Transition is not a
          <br />
          <em>one size fits all</em> approach.
        </CustomTitle>

        <p className={styles.intro}>
          A Place-Based Just Transition begins with a simple but critical
          question.
        </p>

        <blockquote className={styles.blockquote}>
          <span className={styles.quoteOpen} aria-hidden="true">
            “
          </span>
          <p className="px-[30px]">
            How can the costs of transition be shared equitably, and how can
            decision-making be made more inclusive?
          </p>
          <span className={styles.quoteClose} aria-hidden="true">
            ”
          </span>
        </blockquote>

        <div className={styles.bodyColumns}>
          <p>
            Just Transition is often discussed as a global policy idea related
            to climate targets, energy shifts, or green investments. But for
            workers and communities, transition is experienced differently. It
            appears in changes to income, working conditions, access to
            resources, and dignity.
          </p>
          <span className={"h-full w-[2px] " + styles.bodyColumnsLine}></span>
          <p>
            Across most value chains, the most significant risks are
            concentrated at the last tier — informal workers, MSMEs, vendors,
            and marginalised communities. These are the groups that are severely
            impacted by environmental damage, have vulnerable livelihoods, and
            experience the most disruptive transitions in the value chain.
          </p>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerBar} aria-hidden="true" />
          <p className={styles.footerText}>
            PBJT emphasizes the central role of these actors in sustainability.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.right}>
        <h2 className={styles.rightHeading}>Where Risk Concentrates</h2>
        <div className="flex items-end gap-3">
          <div className="">
            <div className={styles.riskList}>
              {riskLevels.map((item, index) => (
                <div key={index}>
                  <div className={styles.riskItem}>
                    <div
                      className={`${styles.iconWrap} ${item.highlight ? styles.iconHighlight : ""} ${item.danger ? styles.iconDanger : ""}`}
                      aria-hidden="true"
                    >
                      <img
                        className={styles.iconImage}
                        src={item.imageUrl}
                        alt=""
                      />
                    </div>

                    <div className={styles.riskContent}>
                      <p
                        className={`${styles.riskTitle} ${item.highlight ? styles.riskTitleHighlight : ""} ${item.danger ? styles.riskTitleDanger : ""}`}
                      >
                        {item.title}
                      </p>
                      <p className={styles.riskSubtitle}>{item.subtitle}</p>
                    </div>
                  </div>
                  {riskLevels.length - 1 !== index && (
                    <div className="w-full flex justify-center">
                      <MoveDown className={styles.arrowIcon} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 h-[65%] width-[45%]">
            <div className={styles.rectShape}></div>
            <div className={styles.rectText}>
              Risks concentrate at the last tier of the value chain.
            </div>
          </div>
        </div>

        {/* Connector arrows between items */}
        <div className={styles.connectorTrack} aria-hidden="true">
          {[...Array(4)].map((_, i) => (
            <span key={i} className={styles.connector}>
              ↓
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

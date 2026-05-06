import {
  Sprout,
  Users,
  Share2,
  UsersRound,
  Building2,
  Briefcase,
  TrendingUp,
  Leaf,
} from "lucide-react";
import styles from "./methodology.module.css";
import Banner from "@/components/banner";

const KEY_ELEMENTS = [
  {
    icon: Sprout,
    text: "Supporting MSMEs to adopt green practices such as solarisation and waste reduction",
  },
  {
    icon: Users,
    text: "Worker think tanks that define green job standards based on lived realities",
  },
  {
    icon: Share2,
    text: "Collective platforms that connect workers to green employment",
  },
  {
    icon: UsersRound,
    text: "Community task groups addressing waste, water, climate adaptation, and stewardship",
  },
  {
    icon: Building2,
    text: "A convener role that connects communities, businesses, institutions, and government schemes",
  },
];

const EXPECTED_CHANGES = [
  {
    icon: Users,
    title: "For Communities and Workers",
    desc: "Improved livelihoods, stronger collective power, increased participation in sustainability decisions, and access to green jobs.",
  },
  {
    icon: Briefcase,
    title: "For MSMEs",
    desc: "Support for sustainable production, access to finance and markets, and reduced transition risks.",
  },
  {
    icon: TrendingUp,
    title: "For Businesses and Brands",
    desc: "Stronger value chains, improved ESG outcomes, deeper risk understanding, and more credible sustainability action.",
  },
  {
    icon: Leaf,
    title: "For Local Ecosystems",
    desc: "Better environmental outcomes, stronger local governance, and more equitable economic systems.",
  },
];

const ARCHITECTURE_PRINCIPLES = [
  "Local realities shape sustainability action",
  "Businesses become accountable to communities",
  "Workers become agents of transition",
  "MSMEs become sustainability partners",
  "Communities co-create their environmental and economic futures",
];

const PILLARS = [
  {
    img: "/images/methodology/methodology-02.jpg",
    alt: "Workers in green value chains",
    title: "Workers",
    desc: "From labour to leadership in green value chains.",
  },
  {
    img: "/images/methodology/methodology-03.jpg",
    alt: "MSME shop owner",
    title: "Businesses & MSMEs",
    desc: "From extraction to sustainable value creation.",
  },
  {
    img: "/images/methodology/methodology-04.jpg",
    alt: "Local community storefront",
    title: "Communities",
    desc: "From vulnerability to voice, ownership, and resilience.",
  },
];

export default function Methodology() {
  return (
    <div className={styles.page}>
      <Banner>
        <img
          className="single-cover-banner"
          src="/images/banner/methodology-banner-01.jpg"
        />

        <div
          className={
            "relative flex gap-2 items-center" + styles.focusBannerContainer
          }
        >
          <div className="flex flex-col">
            <p className={styles.heroTextOne}>Methodology:</p>
            <span className={styles.heroTextTwo}>How</span>
            <span className={styles.heroTextThree}>PBJT works</span>
          </div>
          <div className={styles.heroTextFour}>?</div>
        </div>
      </Banner>

      {/* Intro + Key Elements */}
      <section className={styles.keyElementsSection + " center-content"}>
        <div className={styles.intro}>
          <p className={styles.introMain}>
            PBJT follows a participatory action study approach that integrates
            social realities, environmental conditions, market systems, village
            governance, and business value chains.
          </p>
          <p className={styles.introSecondary}>
            The focus is on strengthening existing groups rather than creating
            parallel structures, ensuring long-term ownership and
            sustainability.
          </p>
        </div>

        <div className={styles.keyElements}>
          <h2 className={styles.sectionHeading}>Key elements include:</h2>
          <div className={styles.elementsGrid}>
            {KEY_ELEMENTS.map((el, i) => {
              const Icon = el.icon;
              return (
                <div className={styles.elementCard} key={i}>
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                  </div>
                  <p>{el.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Change */}
      <section className={styles.expectedChange}>
        <div className={styles.expectedChangeContent + " center-content"}>
          <div className={styles.changeContent}>
            <h2 className={styles.changeHeading}>
              Expected Change <br />
              <span className={styles.changeSubheading}>
                Of Place-Based Just Transition
              </span>
            </h2>
            <div className={styles.changeList}>
              {EXPECTED_CHANGES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div className={styles.changeItem} key={i}>
                    <div className={styles.changeIcon}>
                      <Icon />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.changeImageWrapper}>
            <img
              src="/images/methodology/methodology-01.jpg"
              alt="Worker in dramatic light"
              className={styles.changeImage}
            />
            <div className={styles.quoteBox}>
              <span className={styles.quoteMark}>&#8220;</span>
              <p>From local realities to systemic change, together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Architecture */}
      <section className={styles.architecture + " center-content"}>
        <div className={styles.architectureContent}>
          <h2 className={styles.architectureTitle}>
            <span className={styles.titleRed}>PBJT:</span>
            <br />A New Architecture{" "}
            <span className={styles.titleRed}>for Responsible Business</span>
          </h2>
          <p className={styles.architectureDesc}>
            Place-Based Just Transition offers a model where sustainability is
            co-created by workers, communities, MSMEs, and businesses.
          </p>

          <div className={styles.checklist}>
            <h3>In this architecture:</h3>
            <ul>
              {ARCHITECTURE_PRINCIPLES.map((principle, i) => (
                <li key={i}>{principle}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.pillars}>
          {PILLARS.map((p, i) => (
            <div className={styles.pillarCard} key={i}>
              <div className={styles.pillarImage}>
                <img src={p.img} alt={p.alt} />
              </div>
              <div className={styles.pillarText}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

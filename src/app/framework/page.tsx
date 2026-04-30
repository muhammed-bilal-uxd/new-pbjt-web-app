import Image from "next/image";
import styles from "./framework.module.css";

export const metadata = {
    title: "PBJT – Framework",
    description: "Principles of Place-Based Just Transition",
};

export default function FrameworkPage() {
    return (
        <main className={styles.wrap}>
            <section className={styles.hero}>
                <div className={`${styles.container} ${styles.heroInner}`}>
                    <p className={styles.heroKicker}>PBJT - Framework</p>
                    <h1 className={styles.heroTitle}>Principles</h1>
                    <p className={styles.heroSub}>of Place-Based Just Transition</p>
                </div>
            </section>

            <section className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.topGrid}>
                        <div className={styles.copy}>
                            <p>
                                To Make Place-Based Transition actionable, PBJT develops and
                                uses simple, practical tools that communities and practitioners
                                can actually use.
                            </p>

                            <p>
                                <strong>These include:</strong> Value Chain Mapping Tools that
                                identify informal and last-tier actors, Community Impact
                                Reflection Guides to assess environmental and social change,
                                Worker-Led Audit Formats that reflect lived labour conditions
                                and Collective Dialogue Templates for grievance redressal and
                                negotiation.
                            </p>

                            <p>
                                <strong>
                                    Each tool is designed to support discussion, not compliance.
                                </strong>{" "}
                                They help communities ask better questions, and help businesses
                                see what is usually invisible.
                                <br />
                                <br />
                                Our approach prioritises strengthening existing structures.
                            </p>
                        </div>

                        <div className={styles.topImage}>
                            <img
                                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
                                alt="PBJT field work"
                                width={900}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.stage}>
                <div className={`${styles.container} ${styles.stageInner}`}>
                    <div className={styles.gapFill}></div>

                    <div className={`${styles.card} ${styles.cardLeft}`}>
                        <p>
                            <strong>Embedded in Business Responsibility:</strong>
                            <br />
                            A just transition must be part of everyday business
                            responsibility. All economic actors workers, vendors, MSMEs, and
                            communities are part of the business ecosystem, not just large
                            firms. Businesses have responsibilities toward the social and
                            environmental wellbeing of the places they operate in. Transition
                            efforts must strengthen existing livelihoods rather than
                            displacing or marginalising them. Responsibility moves beyond
                            compliance to active participation in community wellbeing.
                        </p>

                        <p>
                            <strong>Collectivisation and Collective Agency:</strong>
                        </p>

                        <p>
                            PBJT is built on collective strength. Transition processes are
                            more democratic, inclusive, and sustainable when communities act
                            together rather than as isolated individuals. Worker groups,
                            community collectives, and local associations enable shared
                            decision-making, collective bargaining, and problem-solving,
                            reducing vulnerability and increasing agency.
                        </p>
                    </div>

                    <div className={`${styles.card} ${styles.cardRight}`}>
                        <p>
                            <strong>Starting from the Last Tier:</strong>
                        </p>

                        <p>
                            PBJT prioritises those most affected - informal workers, small
                            vendors, marginalised groups, and vulnerable communities.
                            Solutions are designed by starting with local realities,
                            addressing unequal power relations, and strengthening community
                            capacity to shape their own transition pathways.
                        </p>

                        <p>
                            <strong>Place-Based and Context-Driven:</strong>
                        </p>

                        <p>
                            Every place is different. PBJT is rooted in local social,
                            economic, cultural, and environmental contexts. Instead of
                            one-size-fits-all solutions, PBJT builds on local knowledge,
                            networks, and strengths to co-create relevant and dignified
                            transition strategies.
                        </p>

                        <p>
                            <strong>Equity and Redistribution of Power:</strong>
                        </p>

                        <p>
                            A just transition requires shifting decision-making power toward
                            those historically excluded. PBJT ensures meaningful participation
                            of workers, women, informal sector actors, and marginalised
                            communities in decisions that affect their livelihoods and
                            environment.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
import Image from "next/image";
import styles from "./methodology.module.css";

export const metadata = {
    title: "PBJT – Methodology",
    description: "Methodology and expected changes of PBJT",
};

export default function MethodologyPage() {
    return (
        <main className={styles.wrap}>
            <section className={styles.hero}>
                <div className={`${styles.container} ${styles.heroInner}`}>
                    <h2 className={styles.heroSmallTop}>Methodology:</h2>
                    <h1 className={styles.heroBig}>How?</h1>
                    <h2 className={styles.heroSmallBottom}>PBJT works</h2>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.gridTwo}>
                        <div>
                            <p className={styles.copyLarge}>
                                PBJT follows a participatory action study approach that
                                integrates social realities, environmental conditions, market
                                systems, village governance, and business value chains. The
                                focus is on strengthening existing groups rather than creating
                                parallel structures, ensuring long-term ownership and
                                sustainability.
                            </p>
                        </div>

                        <div className={styles.card}>
                            <h3>Key elements include:</h3>
                            <ul className={styles.keyList}>
                                <li>Supporting MSMEs to adopt green practices such as solarisation and waste reduction</li>
                                <li>Worker think tanks that define green job standards based on lived realities</li>
                                <li>Collective platforms that connect workers to green employment</li>
                                <li>Community task groups addressing waste, water, climate adaptation, and stewardship</li>
                                <li>A convener role that connects communities, businesses, institutions, and government schemes</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.gridTwo} ${styles.expectedGrid}`}>
                        <div className={styles.expected}>
                            <h4>Expected Change - Of Place-Based Just Transition</h4>

                            <h5>For Communities and Workers</h5>
                            <p>Improved livelihoods, stronger collective power, increased participation in sustainability decisions, and access to green jobs.</p>

                            <h5>For MSMEs</h5>
                            <p>Support for sustainable production, access to finance and markets, and reduced transition risks.</p>

                            <h5>For Businesses and Brands</h5>
                            <p>Stronger value chains, improved ESG outcomes, deeper risk understanding, and more credible sustainability action.</p>

                            <h5>For Local Ecosystems</h5>
                            <p>Better environmental outcomes, stronger local governance, and more equitable economic systems.</p>
                        </div>

                        <div className={styles.imageBox}>
                            <img
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                                alt="Community action"
                                width={900}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.banner}>
                <div className={styles.container}>
                    <span>PBJT:</span>
                    <strong>A New Architecture</strong>
                    <em>for Responsible Business</em>
                </div>
            </section>

            <section className={`${styles.section} ${styles.architectureSection}`}>
                <div className={styles.container}>
                    <div className={`${styles.gridTwo} ${styles.reverse}`}>
                        <div className={styles.archCopy}>
                            <p className={styles.boldCopy}>
                                Place-Based Just Transition offers a model where sustainability
                                is co-created by workers, communities, MSMEs, and businesses.
                            </p>

                            <p className={styles.boldCopy}>In this architecture:</p>

                            <ul className={styles.bullets}>
                                <li>Local realities shape sustainability action</li>
                                <li>Businesses become accountable to communities</li>
                                <li>Workers become agents of transition</li>
                                <li>MSMEs become sustainability partners</li>
                                <li>Communities co-create their environmental and economic futures</li>
                            </ul>

                            <p>
                                This process does not aim to audit companies, but to democratise
                                sustainability language. When communities understand what
                                companies promise, they are better positioned to engage,
                                negotiate, and hold systems accountable. Our work aligns with
                                emerging global conversations on responsible value chains,
                                including perspectives from organisations like the Institute for
                                Human Rights and Business and investor-led frameworks that
                                emphasise last-mile accountability.
                            </p>
                        </div>

                        <div className={styles.stackImages}>
                            <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80" alt="Workers" width={900} height={600} />
                            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80" alt="Retail ecosystem" width={900} height={600} />
                            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80" alt="Community storefront" width={900} height={600} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
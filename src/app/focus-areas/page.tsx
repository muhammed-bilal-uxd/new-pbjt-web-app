import Image from "next/image";
import styles from "./focus-areas.module.css";

export const metadata = {
    title: "PBJT – Focus Areas",
    description: "Where PBJT works",
};

export default function FocusAreasPage() {
    return (
        <main className={styles.focusAreas}>
            <section className={styles.hero}>
                <div className={`${styles.heroPanel} ${styles.heroPanelColor}`}></div>
                <div className={styles.heroPanel}></div>
                <div className={styles.heroPanel}></div>

                <div className={styles.heroText}>
                    <span className={styles.kicker}>Focus Areas:</span>
                    <h1>
                        Where<span>?</span>
                    </h1>
                    <h2>PBJT works</h2>
                </div>
            </section>

            <section className={styles.main}>
                <div className={styles.content}>
                    <h2>Strengthening Local Groups and Collectives</h2>

                    <p className={styles.lead}>
                        PBJT works through existing collectives worker groups, vendor
                        associations, MSMEs, women&apos;s collectives and SHGs, youth and
                        farmer groups, recognising them as the foundation of democratic
                        participation and accountability.
                    </p>

                    <p>
                        <strong>Understanding Corporate Footprints on Local Lives:</strong>
                        We examine how business operations shape livelihoods, resource use,
                        labour relations, informal economies, and everyday life along with
                        consumption shifts within communities.
                    </p>

                    <p>
                        <strong>Brand-Level Value Chain Analysis:</strong>
                        PBJT looks beyond the final product to examine sourcing, production,
                        labour practices, vendor relationships, and waste generation and
                        disposal.
                    </p>

                    <p>
                        <strong>Corporate Accountability at the Village Level:</strong>
                        Accountability goes beyond compliance. It includes transparent
                        engagement, grievance mechanisms, ethical sourcing, fair labour
                        conditions, and continuous dialogue with local collectives.
                    </p>

                    <p>
                        <strong>Ground-Level Reflection on BRSR Disclosures:</strong>
                        Global markets, climate policies, and sustainability standards
                        reshape local work and wages. PBJT anticipates these pressures while
                        protecting local resilience.
                    </p>
                </div>

                <div className={styles.images}>
                    <img
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                        alt="Community meeting"
                        width={900}
                        height={660}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80"
                        alt="Production workplace"
                        width={900}
                        height={660}
                    />
                </div>
            </section>
        </main>
    );
}
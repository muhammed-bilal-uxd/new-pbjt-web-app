// components/Banner.jsx
import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner({ title, imgUrl, textColor }: any) {
    return (
        <section className={styles.banner}>
            <Image
                src={imgUrl}
                alt={title}
                fill
                priority
                className={styles.bgImage}
            />

            {/* <div className={styles.overlay}></div> */}

            <div className={styles.content}>
                <h1 style={{ color: textColor || "#000000" }}>{title}</h1>
            </div>
        </section>
    );
}
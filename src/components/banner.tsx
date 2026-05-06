// components/Banner.jsx
import styles from "./banner.module.css";

export default function Banner({ title, imgUrl, children }: any) {
  return (
    <section className={styles.banner + " flex items-center justify-center"}>
      {imgUrl && <img src={imgUrl} alt={title} className={styles.bgImage} />}

      <div className={styles.content}>{children}</div>
    </section>
  );
}

// components/Banner.jsx
import styles from "./banner.module.css";

export default function Banner({ children }: any) {
  return (
    <section
      className={styles.banner + " flex items-center justify-center relative"}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
}

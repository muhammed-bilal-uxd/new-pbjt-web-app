import styles from "./custom-title.module.css";

export default function CustomTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.headingWrap}>
      <h1 className={styles.heading}>{children}</h1>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  );
}

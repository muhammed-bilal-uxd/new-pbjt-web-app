import styles from "./custom-title.module.css";

export default function CustomTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.headingWrap} ${className}`}>
      <h1 className={styles.heading}>{children}</h1>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  );
}

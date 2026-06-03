import styles from "./member.module.css";

type BranchStorySectionProps = {
  branchHistory?: string;
  pastorBiography?: string;
  pastorName?: string;
  churchTitle?: string;
  pastorTitle?: string;
};

export default function BranchStorySection({
  branchHistory,
  pastorBiography,
  pastorName,
  churchTitle = "Church History",
  pastorTitle = "Pastor Biography",
}: BranchStorySectionProps) {
  const hasHistory = Boolean(branchHistory?.trim());
  const hasBiography = Boolean(pastorBiography?.trim());

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.card}>
          <h2 className={styles.title}>{churchTitle}</h2>
          {hasHistory ? (
            <p className={styles.text}>{branchHistory}</p>
          ) : (
            <p className={styles.text}>No church history has been added yet.</p>
          )}
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>{pastorTitle}</h2>
          {pastorName ? <h3 className={styles.subtitle}>{pastorName}</h3> : null}
          {hasBiography ? (
            <p className={styles.text}>{pastorBiography}</p>
          ) : (
            <p className={styles.text}>No pastor biography has been added yet.</p>
          )}
        </div>

      </div>
    </section>
  );
}
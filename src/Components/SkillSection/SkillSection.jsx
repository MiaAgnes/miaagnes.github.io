import styles from "./SkillSection.module.css";

export default function SkillSection() {
  return (
    <div className={styles.skillSectionBg}>
      <div className={styles.skillSectionText}>
        <h2>Skills</h2>
        <p className={styles.skillDescription}>Her kan du se mit niveau inden for de forskellige færdigheder på min uddannelse</p>
      </div>
      <div className={styles.vinylGrid}>
        <div className={`${styles.vinylWrapper} ${styles.vinyl1}`}>
          <img className={`${styles.vinyl} ${styles.spin1}`} src="/images/coding-vinyl.png" alt="Coding" />
          <svg className={styles.circleSvg} viewBox="0 0 100 100">
            <circle
              className={styles.progressPath}
              cx="50"
              cy="50"
              r="48"
            />
          </svg>
        </div>

        <div className={`${styles.vinylWrapper} ${styles.vinyl2}`}>
          <img className={`${styles.vinyl} ${styles.spin2}`} src="/images/design-vinyl.png" alt="Design" />
          <svg className={styles.circleSvg} viewBox="0 0 100 100">
            <circle
              className={styles.progressPath}
              cx="50"
              cy="50"
              r="48"
            />
          </svg>
        </div>

        <div className={`${styles.vinylWrapper} ${styles.vinyl3}`}>
          <img className={`${styles.vinyl} ${styles.spin3}`} src="/images/ux-vinyl.png" alt="UX" />
          <svg className={styles.circleSvg} viewBox="0 0 100 100">
            <circle
              className={styles.progressPath}
              cx="50"
              cy="50"
              r="48"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

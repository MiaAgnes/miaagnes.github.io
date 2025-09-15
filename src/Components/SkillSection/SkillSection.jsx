import styles from "./SkillSection.module.css";

export default function SkillSection() {
  return (
    <div className={styles.skillSectionBg}>
      <div className={styles.skillSectionText}>
        <h2>Skills</h2>
      </div>
        <div className={styles.vinylGrid}>
                <img className={styles.vinyl} src="/images/coding-vinyl.png" alt="project" />
                <img className={styles.vinyl} src="/images/design-vinyl.png" alt="project" />
                <img className={styles.vinyl} src="/images/ux-vinyl.png" alt="project" />
      </div>
    </div>
  );
}
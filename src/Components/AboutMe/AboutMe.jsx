import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.aboutMeBg}>
      <h2 className={styles.aboutMeText}>Om mig</h2>
      <div className={styles.factGrid}>
        <img className={styles.factCard} src="/images/fact-card.png" alt="fact" />
        <img className={styles.factCard} src="/images/fact-card.png" alt="fact" />
        <img className={styles.factCard} src="/images/fact-card.png" alt="fact" />
        <img className={styles.factCard} src="/images/fact-card.png" alt="fact" />
      </div>
    </div>
  );
}

import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeBg}>
      <h2 className={styles.aboutMeText}>Om mig</h2>
      <div className={styles.factGrid}>
          <div className={styles.factCardWrapper}>
            <img
              className={styles.factCard}
              src="/images/fact-card1.png"
              alt="fact"
            />
          </div>
          <div className={styles.factCardWrapper}>
            <img
              className={styles.factCard}
              src="/images/fact-card2.png"
              alt="fact"
            />
          </div>
          <div className={styles.factCardWrapper}>
            <img
              className={styles.factCard}
              src="/images/fact-card3.png"
              alt="fact"
            />
          </div>
          <div className={styles.factCardWrapper}>
            <img
              className={styles.factCard}
              src="/images/fact-card4.png"
              alt="fact"
            />
          </div>
        </div>
      </div>
  );
}

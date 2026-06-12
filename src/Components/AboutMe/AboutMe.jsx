import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div id="aboutme" className={styles.aboutMeBg}>
      <h2 className={styles.aboutMeText}>Om mig</h2>
      <p className={styles.aboutMeDescription}>Lær lidt mere omkring mig og hvad jeg kan lide at lave</p>
      <div className={styles.factGrid}>
          <div className={styles.factCardWrapper}>
            <div className={styles.factCard}>
              <h3>Alder & Bopæl</h3>
              <p>Jeg er 22 år gammel og er for nyeligt flyttet til Lunderskov med min kæreste, hvor jeg søger nye udfordringer.</p>
            </div>
          </div>
          <div className={styles.factCardWrapper}>
            <div className={styles.factCard}>
              <h3>Uddannelse</h3>
              <p>Jeg er nyuddannet multimedie designer fra Erhvervsakademiet i Aarhus.</p>
            </div>
          </div>
          <div className={styles.factCardWrapper}>
            <div className={styles.factCard}>
              <h3>Fritid</h3>
              <p>Min fritid bruger jeg foran min computer, hvor jeg spiller spil med min kæreste og venner.</p>
            </div>
          </div>
          <div className={styles.factCardWrapper}>
            <div className={styles.factCard}>
              <h3>Passion</h3>
              <p>Jeg har en stor passion for UX, UI og design og elsker at arbejde kreativt med værktøjer som Illustrator og Figma.</p>
            </div>
          </div>
        </div>
      </div>
  );
}

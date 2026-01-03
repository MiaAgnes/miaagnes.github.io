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
              <p>Jeg er 22 år gammel og bor i Horsens sammen med min kæreste, og til sommer flytter vi til Lunderskov i rækkehus.</p>
            </div>
          </div>
          <div className={styles.factCardWrapper}>
            <div className={styles.factCard}>
              <h3>Uddannelse</h3>
              <p>Jeg studerer lige nu multimediedesigner på Erhvervsakademiet i Aarhus.</p>
            </div>
          </div>
          <div className={styles.factCardWrapper}>
            <div className={styles.factCard}>
              <h3>Fritid</h3>
              <p>Når jeg ikke laver projekter, elsker jeg at spille alle slags spil og høre musik</p>
            </div>
          </div>
          <div className={styles.factCardWrapper}>
            <div className={styles.factCard}>
              <h3>Passion</h3>
              <p>Jeg har en stor passion for design og elsker at arbejde kreativt med værktøjer som Illustrator og Figma.</p>
            </div>
          </div>
        </div>
      </div>
  );
}

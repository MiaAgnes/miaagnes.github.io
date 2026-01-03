import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSectionBg}  >
      <div className={styles.contactSectionText}>
        <h2>Get in touch</h2>
        <div className={styles.contactSectionDescription}>
          <p>Tak for at bruge din tid på at kigge forbi min portfolio. Hvis du har spørgsmål eller ønsker at komme i kontakt med mig, er du mere end velkommen til at række ud!</p>
        </div>
      </div>
      <div className={styles.tapeColumn}>
        <div className={`${styles.tapePiece} ${styles.tapeNavn}`}>
          Mia Agnes Tandal Danielsen
        </div>
        <a href="tel:+4512345678" className={`${styles.tapePiece} ${styles.tapeTlf}`}>
          +45 50 85 44 44
        </a>

        <a href="mailto:miatd03@yahoo.dk" className={`${styles.tapePiece} ${styles.tapeMail}`}>
          miatd03@yahoo.dk
        </a>
      </div>
    </section>
  );
}
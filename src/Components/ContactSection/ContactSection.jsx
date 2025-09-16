import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSectionBg}  >
      <div className={styles.contactSectionText}>
        <h2>Get in touch</h2>
        <div className={styles.contactSectionContent}>
          <p>Tak for at bruge din tid på at kigge forbi min portfolio. Hvis du har spørgsmål eller ønsker at komme i kontakt med mig, er du mere end velkommen til at række ud!</p>
        </div>
      </div>
      <div className={styles.tapeColumn}>
        <img className={styles.tape} src="/images/tape-navn.png" alt="Navn" />
        <a href="tel:+4512345678" className={styles.tapeTlf}>
          <img src="/images/tape-tlf.png" alt="Telefon" />
        </a>

        <a href="mailto:miatd03@yahoo.dk" className={styles.tapeMail}>
          <img src="/images/tape-mail.png" alt="Mail" />
        </a>
      </div>
    </section>
  );
}
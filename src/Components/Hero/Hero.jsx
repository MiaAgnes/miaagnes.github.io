import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.polaroidContainer}>
          <img src="/images/polaroid-ramme-hero.png" alt="polaroid" />
        </div>

        <div>
        <h2 className={styles.text}>Mia Agnes Tandal Danielsen</h2>
        <h2 className={styles.text}>Multimediedesigner studerende</h2>
        <p className={styles.frontendText}>Frontend-design, hvor processen er lige så vigtig som resultatet.</p>
        <button onClick={() => {
          const el = document.getElementById('projects');
          console.log("knap trykket");
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          Se mine Projekter
        </button>
        <div className={styles.vinylContainer}>
          <img className={styles.vinylImage} src="/images/vinylplade-hero.png" alt="Vinyl" />
        </div>
          <div className={styles.iconRow}>
            <a href="https://github.com/MiaAgnes" target="_blank" rel="noopener noreferrer">
              <img src="/images/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/mia-agnes-danielsen-0ba666339/" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:miatd03@yahoo.dk" target="_blank" rel="noopener noreferrer">
              <img src="/images/mail.png" alt="Mail" />
            </a>
          </div>
        </div>
      </div>
  );
}

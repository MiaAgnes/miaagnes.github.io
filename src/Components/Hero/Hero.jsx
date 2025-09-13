import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img 
        src="/images/hero-baggrund.png" 
        alt="Hero baggrund" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      />
        <div className={styles.polaroidContainer}>
          <img src="/images/polaroid-ramme-hero.png" alt="polaroid" />
        </div>

        <div>
        <h2 className={styles.text}>Mia Agnes Tandal Danielsen</h2>
        <h2 className={styles.text}>Multimediedesigner studerende</h2>
        <p className={styles.frontendText}>Frontend-design, hvor processen er lige så vigtig som resultatet.</p>
        <button>Se mine Projekter</button>
        <div className={styles.vinylContainer}>
          <img className={styles.vinylImage} src="/images/vinylplade-hero.png" alt="Vinyl" />
        </div>
          <div className={styles.iconRow}>
            <img src="/images/github.png" alt="GitHub" />
            <img src="/images/linkedin.png" alt="LinkedIn" />
            <img src="/images/mail.png" alt="Mail" />
          </div>
        </div>
      </section>
  );
}

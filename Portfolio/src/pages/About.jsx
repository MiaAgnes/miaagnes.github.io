import React from 'react'
import styles from './About.module.css'
import Burger from '../components/Burger'

export default function About({ onBurger, onNavigate }) {
  return (
    <section className={styles.panel}>
      <Burger onClick={onBurger} />
      <div className={styles.inner}>
        <h2>Lær mig bedre at kende</h2>
        <p>
          Hej, jeg hedder Mia Agnes.
          Jeg studerer multimediedesigner med fokus på frontend development, men elsker også grafisk design. 
          <br />
          <br />
          Jeg brænder for at omsætte idéer til digitale løsninger, der både fungerer godt og ser flotte ud.
          <br />
          <br />
          Jeg trives især i små teams, hvor samarbejde skaber de bedste resultater, og jeg nyder processen fra koncept til færdigt produkt.

        </p>
        <p>Mine kompetencer:</p>
        <ul>
          <li>UX/UI design &amp; prototyping</li>
          <li>Frontend development (HTML/CSS/JS/React)</li>
          <li>Grafisk design</li>
        </ul>
        <button type="button" className={styles.cta} onClick={() => {
            if (onNavigate) onNavigate(4)
          }}>
          Kontakt mig her
        </button>
      </div>
    </section>
  )
}

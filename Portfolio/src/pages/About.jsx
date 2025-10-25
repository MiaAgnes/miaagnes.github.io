import React from 'react'
import styles from './About.module.css'
import Burger from '../components/Burger'

export default function About() {
  return (
    <section className={styles.panel}>
      <Burger />
      <div className={styles.inner}>
        <h2>Lær mig bedre at kende</h2>
        <p>
          Hej, jeg hedder Mia Agnes. Jeg studerer multimediedesigner med fokus på frontend
          development, men elsker også grafisk design.
        </p>
        <p>Mine kompetencer:</p>
        <ul>
          <li>UX/UI design &amp; prototyping</li>
          <li>Frontend development (HTML/CSS/JS/React)</li>
          <li>Grafisk design</li>
        </ul>
        <button className={styles.cta}>Kontakt mig her</button>
      </div>
    </section>
  )
}

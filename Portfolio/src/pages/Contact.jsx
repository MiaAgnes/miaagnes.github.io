import React from 'react'
import styles from './Contact.module.css'
import Burger from '../components/Burger'

export default function Contact({ onBurger }) {
  return (
    <section className={styles.panel}>
      <Burger onClick={onBurger} />
      <div className={styles.inner}>
        <h2>Kontakt mig</h2>
        <p>Lad os tage en snak! Jeg er altid åben for samarbejder eller nye projekter.</p>
        <ul className={styles.contact}>
          <li><img src="/images/linkedin.svg" alt="LinkedIn"/> Mia Agnes danielsen</li>
          <li><img src="/images/mail-icon.svg" alt="mail"/> miatd03@yahoo.dk</li>
          <li><img src="/images/mobile-icon.svg" alt="phone"/> +45 50 85 44 44</li>
        </ul>
      </div>
    </section>
  )
}

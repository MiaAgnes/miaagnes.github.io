import React from 'react'
import styles from './Tools.module.css'
import Burger from '../components/Burger'

export default function Tools({ onBurger }) {
  return (
    <section className={styles.panel}>
      <Burger onClick={onBurger} />
      <div className={styles.inner}>
        <h2>Værktøjer og programmer</h2>
        <ul className={styles.tools}>
          <li><img src="/images/figma.svg" alt="Figma"/> Wireframes, mockups</li>
          <li><img src="/images/photoshop.svg" alt="PS"/> Redigering af billeder</li>
          <li><img src="/images/illustrator.svg" alt="Ai"/> Ikoner og vektorarbejde</li>
          <li><img src="/images/react.svg" alt="React"/> Programmering af hjemmesider og apps</li>
        </ul>
      </div>
    </section>
  )
}

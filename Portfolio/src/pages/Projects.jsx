import React from 'react'
import styles from './Projects.module.css'
import ImageBox from '../components/ImageBox'
import Burger from '../components/Burger'

export default function Projects({ onBurger }) {
  return (
    <section className={styles.panel}>
      <Burger onClick={onBurger} />
      <div className={styles.inner}>
        <h2>Mine projekter</h2>
        <div className={styles.projects}>
          <ImageBox placeholder className={`project ${styles.project}`} />
          <p className={styles.caption}>Streamaware — En app til at tjekke tilgængeligheden af film og serier på streamingstjenester</p>
          <ImageBox placeholder className={`project ${styles.project}`} />
          <p className={styles.caption}>Steno museet — Et lærerigt menstruationsspil til børn og unge</p>
        </div>
      </div>
    </section>
  )
}

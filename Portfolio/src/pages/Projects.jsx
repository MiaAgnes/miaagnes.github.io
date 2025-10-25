import React from 'react'
import styles from './Projects.module.css'
import ImageBox from '../components/ImageBox'
import Burger from '../components/Burger'

export default function Projects() {
  return (
    <section className={styles.panel}>
      <Burger />
      <div className={styles.inner}>
        <h2>Mine projekter</h2>
        <div className={styles.projects}>
          <ImageBox placeholder className={`project ${styles.project}`} />
          <p className={styles.caption}>Streamaware — app til at tjekke tilgængelighed</p>
          <ImageBox placeholder className={`project ${styles.project}`} />
          <p className={styles.caption}>Steno museet — læringsspil</p>
        </div>
      </div>
    </section>
  )
}

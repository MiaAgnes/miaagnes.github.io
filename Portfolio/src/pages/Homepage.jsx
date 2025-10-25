import React from 'react'
import styles from './Homepage.module.css'
import ImageBox from '../components/ImageBox'
import Burger from '../components/Burger'

export default function Homepage() {
  return (
    <section className={styles.panel}>
      <Burger />
      <div className={styles.inner}>
        <ImageBox placeholder className={styles.hero} />
        <h2>Velkommen til min portfolio!</h2>
        <p className={styles.lead}>
          Mit navn er Mia Agnes, og jeg studerer multimediedesigner. Jeg arbejder med at udvikle
          hjemmesider og apps fra idé til færdigt produkt, og jeg brænder for at se projekter tage
          form gennem hele den kreative proces.
        </p>
      </div>
    </section>
  )
}

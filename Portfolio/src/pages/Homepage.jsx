import React from 'react'
import styles from './Homepage.module.css'
import ImageBox from '../components/ImageBox'
import Burger from '../components/Burger'

export default function Homepage({ onBurger }) {
  return (
    <section className={styles.panel}>
      <Burger onClick={onBurger} />
      <div className={styles.inner}>
        <ImageBox placeholder className={styles.hero} />
        <h2>Velkommen til min portfolio!</h2>
        <p className={styles.lead}>
          Mit navn er Mia Agnes, og jeg studerer til multimediedesigner. Jeg arbejder med at udvikle hjemmesider og apps fra idé til færdigt produkt, og jeg brænder for at se projekter tage form gennem hele den kreative proces.
          <br />
          <br />
          I min portfolio kan du udforske mine tidligere projekter, få et indblik i de værktøjer og metoder jeg bruger, og lære mig bedre at kende som designer.
          <br />
          <br />
          Du er meget velkommen til at kontakte mig, hvis du har spørgsmål eller ønsker et samarbejde.
        </p>
      </div>
    </section>
  )
}

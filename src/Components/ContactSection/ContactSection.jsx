import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSectionBg}  >
      <div className={styles.contactSectionText}>
        <h2>Get in touch</h2>
        <div className={styles.contactSectionContent}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque incidunt sapiente magni aliquid necessitatibus nisi quae, suscipit molestias eligendi laudantium deleniti adipisci, obcaecati praesentium perspiciatis enim? Commodi, numquam dolore?</p>
        </div>
      </div>
      <div className={styles.tapeColumn}>
        <img className={styles.tape} src="/images/tape.png" alt="tape" />
        <img className={styles.tape} src="/images/tape.png" alt="tape" />
        <img className={styles.tape} src="/images/tape.png" alt="tape" />
      </div>
    </section>
  );
}
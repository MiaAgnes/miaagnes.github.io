import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <div id="projects" className={styles.projectsSectionBg}>
        <div className={styles.projectsSectionText}>
          <h2>Mine tidligere projekter</h2>
        </div>
        <div className={styles.projectGrid}>
                <img className={styles.project} src="/public/images/steno-polaroid.png" alt="project" />
                  <img className={styles.project} src="/images/ol-polaroid.png" alt="project" />
                  <img className={styles.project} src="/images/mindwaves-polaroid.png" alt="project" />
              </div>
    </div>
  );
}

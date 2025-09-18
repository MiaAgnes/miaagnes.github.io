import { useState } from "react";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      image: "/images/steno-polaroid.png",
      video: "/videos/steno.mp4",
    },
    {
      image: "/images/ol-polaroid.png",
      video: "/videos/ol.mp4",
    },
    {
      image: "/images/tbc-polaroid.png",
      video: "/videos/tbc.mp4",
    },
  ];

  const closeModal = () => setActiveIndex(null);
  return (
    <div id="projects" className={styles.projectsSectionBg}>
      <div className={styles.projectsSectionText}>
        <h2>Mine tidligere projekter</h2>
        <p className={styles.projectDescription}>Klik på mine projekter for at se mere om det individuelle projekt</p>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectWrapper} ${
              styles[`project${index + 1}`]
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.breezeWrapper}>
              <img
                className={styles.project}
                src={project.image}
                alt={`Projekt ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <video
              src={projects[activeIndex].video}
              autoPlay
              controls
              className={styles.modalVideo}
            />
          </div>
        </div>
      )}
    </div>
  );
}

import {useState, useEffect, use, act} from 'react';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const projects = [
      "/images/steno-polaroid.png",
      "/images/ol-polaroid.png",
      "/images/mindwaves-polaroid.png"
    ];

    const closeModal = () =>  setActiveIndex(null);

    const prevImage = (e) => {
      e.stopPropagation();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    }

    const nextImage = (e) => {
      e.stopPropagation();
      setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    }

    useEffect(() => {
      const handleKey = (e) => {
        if (e.code === "space") closeModal();
        if (activeIndex !== null) {
          if (e.code === "ArrowRight") nextImage(e);
          if (e.code === "ArrowLeft") prevImage(e);
        }
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [activeIndex]);

   return (
    <div id="projects" className={styles.projectsSectionBg}>
      <div className={styles.projectsSectionText}>
        <h2>Mine tidligere projekter</h2>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((src, index) => (
          <div 
            key={index} 
            className={styles.projectWrapper} 
            onClick={() => setActiveIndex(index)}
          >
            <img 
              className={`${styles.project} ${styles[`project${index+1}`]}`} 
              src={src} 
              alt="project" 
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <button className={styles.prevButton} onClick={prevImage}>&lt;</button>
            <img src={projects[activeIndex]} alt="project" className={styles.modalImage}/>
            <button className={styles.nextButton} onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
}
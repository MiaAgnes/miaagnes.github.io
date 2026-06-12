import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Steno Museet",
      image: "/images/stenomuseet.png",
      link: "https://miaagnes.github.io/Eksamensprojekt-steno-museet/",
    },
    {
      title: "StreamAware",
      image: "/images/streamaware.png",
      link: "https://miaagnes.github.io/streamaware/",
    },
    {
      title: "City Escape",
      image: "/images/cityescape.png",
      link: "https://miaagnes.github.io/cityescapeproject/",
    },
    {
      title: "Heibjerg",
      image: "/images/heibjerg-portfolio.png",
      link: "https://www.figma.com/design/oHJFy0jkq1Rmcv1CWLjybx/Interaktiv-prototype-af-app?node-id=0-1&p=f&t=13B2CyoV79jWikk0-0"
    },
  ];

  return (
    <div id="projects" className={styles.projectsSectionBg}>
      <div className={styles.projectsSectionText}>
        <h2>Mine tidligere projekter</h2>
        <p className={styles.projectDescription}>Klik på mine projekter for at se mere om det individuelle projekt</p>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`${styles.projectWrapper} ${
                styles[`project${index + 1}`] ?? ""
              }`}
            >
              <div className={styles.polaroidCard}>
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className={styles.caption}>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </a>
          ) : (
            <div
              key={index}
              className={`${styles.projectWrapper} ${
                styles[`project${index + 1}`] ?? ""
              }`}
            >
              <div className={styles.polaroidCard}>
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className={styles.caption}>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe";
import FactCard from "./Components/FactCard";
import ProjectsSection from "./Components/ProjectsSection";
import ProjectCard from "./Components/ProjectCard";
import SkillsSection from "./Components/SkillsSection";
import SkillItem from "./Components/SkillItem";
import ContactSection from "./Components/ContactSection";
import "./App.scss";


function App() {
  return (
    <>
      <section>
        <Hero />
      </section>
       <section>
        <AboutMe />
      </section>
       <section>
        <FactCard />
      </section>
       <section>
        <ProjectsSection />
      </section>
       <section>
        <ProjectCard />
      </section>
       <section>
        <SkillsSection />
      </section>
       <section>
        <SkillItem />
      </section>
       <section>
        <ContactSection />
      </section>
    </>
  );
}
export default App;


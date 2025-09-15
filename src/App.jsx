import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import SkillSection from "./Components/SkillSection/SkillSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import "./App.scss";


function App() {
  return (
    <div className="background">
      <section>
        <Hero />
      </section>
       <section>
        <AboutMe />
      </section>
       <section>
        <ProjectsSection />
      </section>
       <section>
        <SkillSection />
      </section>
       <section>
        <ContactSection />
      </section>
    </div>
  );
}
export default App;
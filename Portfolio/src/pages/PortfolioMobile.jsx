import React from 'react'
import './portfolio.css'

// Import the split pages
import Homepage from './Homepage'
import About from './About'
import Projects from './Projects'
import Tools from './Tools'
import Contact from './Contact'

export default function PortfolioMobile() {
  return (
    <div className="pm-root">
      <div className="pm-panels">
        <Homepage />
        <section className="pm-panel pm-center">
          <div className="pm-menu">
            <nav>
              <a href="#">Home</a>
              <a href="#">Om mig</a>
              <a href="#">Projekter</a>
              <a href="#">Værktøjer</a>
              <a href="#">Kontakt</a>
            </nav>
          </div>
        </section>
        <About />
        <Projects />
        <Tools />
        <Contact />
      </div>
    </div>
  )
}

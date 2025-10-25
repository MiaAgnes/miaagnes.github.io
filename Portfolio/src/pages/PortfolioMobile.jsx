import React, { useState } from 'react'
import './portfolio.css'

// Import the split pages
import Homepage from './Homepage'
import About from './About'
import Projects from './Projects'
import Tools from './Tools'
import Contact from './Contact'
import MenuOverlay from '../components/MenuOverlay'

export default function PortfolioMobile() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  function openMenu() { setMenuOpen(true) }
  function closeMenu() { setMenuOpen(false) }

  function goToPage(index) {
    setCurrentPage(index)
    setMenuOpen(false)
  }

  // pass onBurger handler to pages so their Burger buttons open the overlay menu
  return (
    <div className="pm-root">
      <MenuOverlay open={menuOpen} onClose={closeMenu} onNavigate={goToPage} />
  <div className="pm-panels">
  {currentPage === 0 && <Homepage onBurger={openMenu} onNavigate={goToPage} />}
  {currentPage === 1 && <About onBurger={openMenu} onNavigate={goToPage} />}
  {currentPage === 2 && <Projects onBurger={openMenu} onNavigate={goToPage} />}
  {currentPage === 3 && <Tools onBurger={openMenu} onNavigate={goToPage} />}
  {currentPage === 4 && <Contact onBurger={openMenu} onNavigate={goToPage} />}
      </div>
    </div>
  )
}

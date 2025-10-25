import React from 'react'
import './menu.css'

export default function MenuOverlay({ open, onClose, onNavigate }) {
  if (!open) return null

  const navigate = (index) => {
    if (onNavigate) onNavigate(index)
    if (onClose) onClose()
  }

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true">
      <div className="menu-inner">
        <button className="menu-close" onClick={onClose} aria-label="Luk menu">✕</button>
        <nav className="menu-nav">
          <button type="button" onClick={() => navigate(0)}>Home</button>
          <button type="button" onClick={() => navigate(1)}>Om mig</button>
          <button type="button" onClick={() => navigate(2)}>Projekter</button>
          <button type="button" onClick={() => navigate(3)}>Værktøjer</button>
          <button type="button" onClick={() => navigate(4)}>Kontakt</button>
        </nav>
      </div>
    </div>
  )
}

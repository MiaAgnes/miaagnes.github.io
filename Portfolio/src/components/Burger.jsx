import React from 'react'
import './burger.css'

export default function Burger({ onClick, label = 'menu' }) {
  return (
    <button className="burger" aria-label={label} onClick={onClick}>
      <span />
      <span />
      <span />
    </button>
  )
}

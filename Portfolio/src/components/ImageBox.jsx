import React from 'react'
import './imagebox.css'

export default function ImageBox({ src, alt, placeholder = false, className = '' }) {
  if (src && !placeholder) {
    return <img className={`imagebox ${className}`} src={src} alt={alt || ''} />
  }
  return <div className={`imagebox placeholder ${className}`} aria-hidden="true" />
}

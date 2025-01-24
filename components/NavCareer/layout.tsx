'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import './new.css'

export default function CareerNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="career-nav">
      <div className="career-nav__container">
       
        <h1 className="career-nav__title">
          Come work at Acroyna
        </h1>
        <button className="career-nav__explore-button">
          Explore our jobs
        </button>
      </div>
      
      <div className="menu-button-container">
        {isMenuOpen ? (
          <button
            className="close-button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          > 
            <X />
          </button>
        ) : (
          <button 
            className={`career-nav__menu-button ${isMenuOpen ? 'hidden' : ''}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="career-nav__menu-icon" />
          </button>
        )}
      </div>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="dropdown-header">
          {/* Logo inside the dropdown */}
          <div className="logo-container1">
            <h1 className="logo-text1">Acroyna</h1>
            <p className="logo-subtitle1">SOFTWARE SOLUTIONS</p>
          </div>
        </div>
        {/* Dropdown Links */}
        <a href="#work">Work</a>
        <a href="/Aboutus">About Us</a>
        <a href="#services">Services</a>
        <a href="/CareerSection">Careers</a>
        <a href="/ContactUs">Contact Us</a>
      </div>
    </nav>
  )
}


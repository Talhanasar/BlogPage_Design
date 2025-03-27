import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">
            <img src="/ng_logo.png" alt="NoteRoom Logo" className="logo-img" />
          </div>
          <span className="logo-text">
            <span className="logo-highlight">Note</span>Room
          </span>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`nav-mobile ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="nav-list">
            <li><Link to="#" className="nav-link">About</Link></li>
            <li><Link to="#" className="nav-link">Support</Link></li>
            <li><Link to="#" className="nav-link">Join Team</Link></li>
            <li><Link to="/" className="nav-link">Blog</Link></li>
          </ul>
        </nav>
        
        <div className="header-buttons">
          <button className="btn btn-transparent">Login</button>
          <button className="btn btn-primary">Create Account</button>
        </div>
      </div>
    </header>
  )
}

export default Header 
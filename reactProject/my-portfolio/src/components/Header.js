import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo-container">
          <Link to="home" smooth={true} duration={500} offset={-70}>
            <div className="logo-name-wrapper">
              <img src={logo} alt="Harish S Logo" className="logo-image" />
              <div className="name-container">
                <span className="first-name">Harish</span>
                <span className="last-name">S</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="home" smooth={true} duration={500} offset={-70}>Home</Link>
          <Link to="about" smooth={true} duration={500} offset={-70}>About</Link>
          <Link to="education" smooth={true} duration={500} offset={-70}>Education</Link>
          <Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link>
          <Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

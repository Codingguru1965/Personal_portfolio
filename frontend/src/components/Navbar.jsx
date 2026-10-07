import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pill-navbar-wrapper">
      <nav
        className={`pill-navbar ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-expanded' : ''}`}
        aria-label="Main Navigation"
      >
        {/* Left Side: Brand Logo, Name, Role & Theme Toggle Switch */}
        <div className="pill-brand-group">
          <a href="#home" className="pill-brand-link" onClick={closeMenu}>
            <div className="pill-avatar-badge" aria-hidden="true">
              AY
            </div>
            <div className="pill-brand-meta">
              <span className="pill-brand-name">Ankit Yadav</span>
              <span className="pill-brand-role">Full Stack Developer</span>
            </div>
          </a>

          {/* Theme Pill Toggle Switch (aligned beside brand info) */}
          <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            onClick={toggleTheme}
            className={`pill-theme-switch ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="pill-switch-track">
              <span className="pill-switch-thumb">
                {theme === 'dark' ? <FaMoon size={11} /> : <FaSun size={11} />}
              </span>
            </span>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="pill-desktop-nav">
          <a href="#home" className="pill-nav-link">Home</a>
          <a href="#about" className="pill-nav-link">About</a>
          <a href="#skills" className="pill-nav-link">Skills</a>
          <a href="#experience" className="pill-nav-link">Experience</a>
          <a href="#projects" className="pill-nav-link">Projects</a>
          <a href="#education" className="pill-nav-link">Education</a>
          <a href="#contact" className="pill-nav-link">Contact</a>
        </div>

        {/* Right Side: Resume Button (Desktop) & Mobile Hamburger Toggle */}
        <div className="pill-right-group">
          <a
            href={`${import.meta.env.BASE_URL}modern_resume.pdf`}
            download="Ankit_Yadav_Resume.pdf"
            className="pill-resume-btn"
          >
            <FaDownload size={12} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="pill-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Responsive Dropdown Panel */}
      <div
        className={`pill-mobile-dropdown ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="pill-mobile-links">
          <a href="#home" className="pill-mobile-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="pill-mobile-link" onClick={closeMenu}>About</a>
          <a href="#skills" className="pill-mobile-link" onClick={closeMenu}>Skills</a>
          <a href="#experience" className="pill-mobile-link" onClick={closeMenu}>Experience</a>
          <a href="#projects" className="pill-mobile-link" onClick={closeMenu}>Projects</a>
          <a href="#education" className="pill-mobile-link" onClick={closeMenu}>Education</a>
          <a href="#contact" className="pill-mobile-link" onClick={closeMenu}>Contact</a>
          <a
            href={`${import.meta.env.BASE_URL}modern_resume.pdf`}
            download="Ankit_Yadav_Resume.pdf"
            onClick={closeMenu}
            className="pill-mobile-resume-btn"
          >
            <FaDownload size={13} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
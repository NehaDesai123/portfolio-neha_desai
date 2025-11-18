import React, { useState, useEffect } from 'react';
import { scrollToSection, updateActiveSection } from '../utils/scrollUtils';
import styles from './Navigation.module.css';
import initialImage from '../assets/initial.png';

function Navigation({ toggleTheme, currentTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('home');
  const sectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'achievements'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection(sectionIds, setSelectedSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const selectSection = (section) => {
    setSelectedSection(section);
    scrollToSection(section);
    closeMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setSelectedSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>nehadesai.</span>
          </div>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
            <li
              className={styles.dropdown}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#" onClick={(e) => e.preventDefault()} className={styles.dropdownToggle}>
                Portfolio
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ''}`}>
                <li><a href="#about" onClick={() => selectSection('about')} className={selectedSection === 'about' ? styles.active : ''}>About</a></li>
                <li><a href="#skills" onClick={() => selectSection('skills')} className={selectedSection === 'skills' ? styles.active : ''}>Skills</a></li>
                <li><a href="#experience" onClick={() => selectSection('experience')} className={selectedSection === 'experience' ? styles.active : ''}>Experience</a></li>
                <li><a href="#projects" onClick={() => selectSection('projects')} className={selectedSection === 'projects' ? styles.active : ''}>Projects</a></li>
                <li><a href="#education" onClick={() => selectSection('education')} className={selectedSection === 'education' ? styles.active : ''}>Education</a></li>
                <li><a href="#achievements" onClick={() => selectSection('achievements')} className={selectedSection === 'achievements' ? styles.active : ''}>Achievements</a></li>
              </ul>
            </li>
            <li className={styles.mobileContactItem}>
              <a href="#contact" onClick={() => selectSection('contact')} className={styles.mobileContact}>
                LET'S TALK <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>
          <div className={styles.navActionsMain}>
          <div className={styles.navActions}>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              <i className={`fas ${currentTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <a href="#contact" onClick={() => selectSection('contact')} className={styles.navBtn}>
              LET'S TALK <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
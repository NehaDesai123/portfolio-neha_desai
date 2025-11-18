import React from 'react';
import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import styles from './App.module.css';
import nehaImage from './assets/neha.jpg';
import initialImage from './assets/initial.png';

function App() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div className={styles.portfolio}>
      <Navigation toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <div className={styles.mainLayout}>
        {/* Fixed Profile Card */}
        <aside className={styles.profileSidebar}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.profileImage}>
                <img src={nehaImage} alt="Neha Desai" />
              </div>
            </div>

            <div className={styles.profileInfo}>
              <a href="mailto:neha.desai.2411@gmail.com" className={styles.profileEmail}>
                neha.desai.2411@gmail.com
              </a>
              <p className={styles.profileLocation}>Based in Bangalore, India</p>
              <p className={styles.profileCopyright}>© 2025 Neha Desai. All Rights Reserved</p>
            </div>

            <div className={styles.profileSocial}>
              <div className={styles.socialLeft}>
                <img src={initialImage} alt="Initial" className={styles.socialInitial} />
                <span className={styles.socialLabel}>FOLLOW ME:</span>
              </div>
              <div className={styles.socialIcons}>
                <a href="https://linkedin.com/in/neha-d-763481101" target="_blank" className={styles.socialIcon} rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:neha.desai.2411@gmail.com" className={styles.socialIcon}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Scrollable Content */}
        <main className={styles.mainContent}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

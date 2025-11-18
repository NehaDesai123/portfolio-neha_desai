import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.skillsContainer}>
          <div className={styles.badgeCenter}>
            <div className={styles.introBadge}>Skills</div>
          </div>

          <h2 className={styles.skillsTitle}>My Expertise</h2>

          <div className={styles.servicesGrid}>
            {/* UI/UX Design */}
            <div className={`${styles.serviceCard} fade-in`}>
              <h3 className={styles.serviceTitle}>UI/UX Design</h3>
              <p className={styles.serviceDescription}>
                User-Centered Design (UCD), Wireframing, Prototyping, Visual Design, Design Systems, Interaction Design, Responsive Design
              </p>
              <p className={styles.serviceTools}>
                <strong>Tools:</strong> Figma, Miro, Invision
              </p>
            </div>

            {/* Frontend Development */}
            <div className={`${styles.serviceCard} fade-in`}>
              <h3 className={styles.serviceTitle}>Frontend Development</h3>
              <p className={styles.serviceDescription}>
                JavaScript, HTML/HTML5, CSS, Vue.js (2 & 3), Vuex, Vue Router, Bootstrap, Component Architecture
              </p>
              <p className={styles.serviceTools}>
                <strong>Technologies:</strong> Vue.js, JavaScript, HTML5, CSS3, Bootstrap, React
              </p>
            </div>

            {/* Agile & Project Management */}
            <div className={`${styles.serviceCard} fade-in`}>
              <h3 className={styles.serviceTitle}>Agile & Project Management</h3>
              <p className={styles.serviceDescription}>
                Agile Methodologies, SDLC, Sprint Planning, Task Estimation, Backlog Prioritization, Requirement Gathering
              </p>
              <p className={styles.serviceTools}>
                <strong>Tools:</strong> Jira, Rally, Notion, Trello, Confluence
              </p>
            </div>

            {/* Development Tools */}
            <div className={`${styles.serviceCard} fade-in`}>
              <h3 className={styles.serviceTitle}>Development Tools</h3>
              <p className={styles.serviceDescription}>
                Version Control, API Integration, Code Reviews, Performance Optimization, Testing & Debugging
              </p>
              <p className={styles.serviceTools}>
                <strong>Tools:</strong> Git/GitHub, Postman, Visual Studio, IntelliJ IDEA, Jenkins
              </p>
            </div>

            {/* Database & Backend Integration */}
            <div className={`${styles.serviceCard} fade-in`}>
              <h3 className={styles.serviceTitle}>Database & Backend Integration</h3>
              <p className={styles.serviceDescription}>
                SQL, API Integration, Backend Collaboration, Data Management, Oracle SQL Developer
              </p>
              <p className={styles.serviceTools}>
                <strong>Technologies:</strong> SQL, REST APIs, Oracle SQL Developer
              </p>
            </div>

            {/* Apple Ecosystem */}
            <div className={`${styles.serviceCard} ${styles.highlightCard} fade-in`}>
              <h3 className={styles.serviceTitle}>Apple Ecosystem</h3>
              <p className={styles.serviceDescription}>
                Specialized in Apple internal projects, Radar reporting, Apple Roocode, Code Genius, GitHub Copilot integration
              </p>
              <p className={styles.serviceTools}>
                <strong>Tools:</strong> Apple Roocode, Code Genius, GitHub Copilot, Radar/Quip
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
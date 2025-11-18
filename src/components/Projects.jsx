import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Core',
      company: 'Apple Customer Support Application',
      duration: 'April 2025 – Present',
      icon: 'fa-headset',
      image: '', // Add image path if available
      technologies: ['fab fa-vuejs', 'fas fa-database'],
      description: 'Developed and maintained the Apple customer support application, enabling advisors to efficiently log customer tickets and issues.',
      highlights: [
        'Analyzed Radar reports',
        'Implemented changes using Vue 3',
        'Backend team collaboration'
      ]
    },
    {
      title: 'VIMS',
      company: 'Apple Internal',
      duration: 'October 2023 – March 2025',
      icon: 'fas fa-laptop-code',
      image: '', // Add image path if available
      technologies: ['fab fa-vuejs', 'fab fa-js-square', 'fas fa-code'],
      description: 'Architected and developed dynamic and responsive user interfaces using Vue.js (Vue 3), Vuex, and Vue Router.',
      highlights: [
        'Complex business requirements',
        'Performance optimization',
        'Technical point of contact'
      ]
    },
    {
      title: 'Columba Application',
      company: 'Apple TV',
      duration: 'July 2022 – September 2023',
      icon: 'fas fa-tv',
      image: '', // Add image path if available
      technologies: ['fab fa-vuejs', 'fas fa-palette', 'fas fa-mobile-alt'],
      description: 'Collaborated with product managers, designers, and backend teams to ensure successful project delivery.',
      highlights: [
        'Reusable components',
        'Modular design',
        'UI/UX wireframe conversion'
      ]
    },
    {
      title: 'Macys',
      company: 'E-commerce Site',
      duration: 'November 2021 – June 2022',
      icon: 'fas fa-shopping-cart',
      image: '', // Add image path if available
      technologies: ['fab fa-js-square', 'fab fa-html5', 'fab fa-css3-alt'],
      description: 'Developed and enhanced e-commerce platform features for one of the largest retail chains.',
      highlights: [
        'Responsive shopping experiences',
        'Payment integration',
        'Performance improvements'
      ]
    },
    {
      title: 'GE Aviation DTE NMS',
      company: 'Nonconformance Management System',
      duration: 'June 2020 – October 2021',
      icon: 'fas fa-plane',
      image: '', // Add image path if available
      technologies: ['fas fa-database', 'fas fa-chart-line', 'fas fa-tasks'],
      description: 'Developed comprehensive nonconformance management system for aviation industry.',
      highlights: [
        'Quality control workflows',
        'Analytics dashboards',
        'Aviation compliance'
      ]
    },
    {
      title: 'GE Aviation DTE PCM',
      company: 'Product Change Management',
      duration: 'January 2018 – March 2020',
      icon: 'fas fa-cogs',
      image: '', // Add image path if available
      technologies: ['fas fa-database', 'fas fa-tasks', 'fas fa-history'],
      description: 'Built product change management system for tracking and managing engineering changes.',
      highlights: [
        'Change request workflows',
        'Approval tracking systems',
        'Comprehensive audit trails'
      ]
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.projectsContainer}>
          <div className={styles.badgeCenter}>
            <div className={styles.introBadge}>Projects</div>
          </div>

          <h2 className={styles.projectsTitle}>Hands-on Experience and Creative Solutions</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={`${styles.projectCard} fade-in`}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>
                    {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title + ' logo'}
                          className={styles.projectImage}
                        />
                    ) : (
                        <i className={`fas ${project.icon} ${styles.icon}`}></i>
                    )}
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <p className={styles.projectCompany}>{project.company}</p>
                <p className={styles.projectDuration}>{project.duration}</p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, idx) => (
                    <i key={idx} className={`${tech} ${styles.techIcon}`} title={tech.split(' ')[1].replace('fa-', '')}></i>
                  ))}
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectHighlights}>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className={styles.highlight}>
                      - {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
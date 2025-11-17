import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Application',
      institution: 'Annamalai University',
      duration: 'June 2019 – December 2021',
      location: 'Bangalore, India',
      icon: 'fas fa-graduation-cap'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'KLE\'S RLSI',
      duration: 'July 2015 – May 2018',
      location: 'Belgaum, India',
      icon: 'fas fa-user-graduate'
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <div className={styles.educationContainer}>
          <div className={styles.educationWrapper}>
            <div className={styles.educationLeft}>
              <div className={styles.introBadge}>Education</div>

              <h2 className={styles.educationTitle}>
                Academic
                Background
              </h2>
            </div>

            <div className={styles.educationRight}>
              <div className={styles.educationGrid}>
                {education.map((edu, index) => (
                  <div key={index} className={`${styles.educationCard} fade-in`}>
                    <div className={styles.educationContent}>
                      <div className={styles.degreeIcon}>
                        <i className={edu.icon}></i>
                      </div>
                      <div className={styles.educationInfo}>
                        <h2 className={styles.institutionName}>{edu.institution}</h2>
                        <p className={styles.degreeTitle}>{edu.degree}</p>
                        <p className={styles.educationDuration}>{edu.duration}</p>
                        <p className={styles.educationLocation}>
                          <i className="fas fa-map-marker-alt"></i>
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import cognizantImage from '../assets/cognizant.png';
import capgeminiImage from '../assets/capgemini.png';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className={styles.experienceContainer}>
          <div className={styles.experienceWrapper}>
            <div className={styles.experienceLeft}>
              <div className={styles.introBadge}>Experience</div>

              <h2 className={styles.experienceTitle}>
                I Worked With
                Wel-Known
                Companies
              </h2>
            </div>

            <div className={styles.experienceRight}>
              <div className={styles.companiesGrid}>
                {/* Cognizant */}
                <div className={`${styles.companyCard} fade-in`}>
                  <div className={styles.companyContent}>
                    <img src={cognizantImage} alt="Cognizant" className={styles.companyLogo} />
                    <div className={styles.companyInfo}>
                      <h3 className={styles.companyName}>Cognizant</h3>
                      <p className={styles.companyRole}>Sr Software Associate</p>
                      <p className={styles.companyDuration}>November 2021 – Present</p>
                      <p className={styles.companyDescription}>
                        Led UI development for high-profile Apple projects (VIMS, DMS, Columba, Core), ensuring seamless user experiences. Designed and implemented dynamic, responsive UIs using Vue.js (2 & 3), Vuex, and Vue Router.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Capgemini */}
                <div className={`${styles.companyCard} fade-in`}>
                  <div className={styles.companyContent}>
                    <img src={capgeminiImage} alt="Capgemini" className={styles.companyLogo} />
                    <div className={styles.companyInfo}>
                      <h3 className={styles.companyName}>Capgemini</h3>
                      <p className={styles.companyRole}>Sr Analyst/Software Engineer</p>
                      <p className={styles.companyDuration}>July 2018 – October 2021</p>
                      <p className={styles.companyDescription}>
                        Developed and enhanced UI components, integrating with backend services. Applied Agile methodologies to design, build, and deploy software, improving efficiency and saving costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
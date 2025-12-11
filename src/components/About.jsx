import React from 'react';
import aboutNdImage from '../assets/about_nd.jpg';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContent}>
            {/* Left Content */}
            <div className={`${styles.aboutLeft} fade-in`}>
              <div className={styles.introBadge}>About Me</div>

              <h2 className={styles.aboutTitle}>
                A Lifelong Learner in UI/UX Design and Product Development
              </h2>

              <div className={styles.portfolioLink}>
                <a href="https://neha-pd.github.io/Netfilx-Portfolio/netflix" target="_blank" rel="noopener noreferrer" className={styles.netflixPortfolio}>
                  <i className="fas fa-external-link-alt"></i>
                  Netflix Portfolio
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className={`${styles.aboutRight} fade-in`}>
              <div className={styles.aboutImage}>
                <img src={aboutNdImage} alt="Neha Desai" className={styles.aboutImg} />
              </div>

              <div className={styles.aboutText}>
                <p className={styles.aboutDescription}>
                  Hi, I'm Neha — a passionate UI/UX Designer with a love for building meaningful digital experiences.
                  My journey in product design began at Apple Developer Academy @ BINUS, where I collaborated on various
                  projects and discovered my enthusiasm for solving real-world problems through design. Since then, I've
                  worked with several startups and one of India's leading banks, where I honed my skills in crafting
                  user-centered solutions.
                </p>
                <p className={styles.aboutDescription}>
                  I specialize in design thinking, user research, design systems, prototyping, and usability testing,
                  always striving to bridge business goals with intuitive, user-friendly interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  const name = 'Neha Desai';
  const nameChars = Array.from(name);

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={`${styles.heroMain} fade-in`}>
            <div className={styles.introBadge}>Introduction</div>

            <h1 className={styles.heroTitle}>
              Hey!👋<br />I'm{' '}
              <span className={styles.nameHighlight}>
                {nameChars.map((ch, idx) => (
                  <span
                    key={idx}
                    className={styles.char}
                    style={{ '--char-index': idx }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
              <br />
            </h1>

            <p className={styles.heroDescription}>
              I am a UI Developer with 7+ years of experience in various industries. Having experience in
              designing and implementing intuitive user interfaces, creating pixel-perfect UIs with Vue.js,
              and iterating until business and tech goals are met.
            </p>

            <div className={styles.heroActions}>
              <a href="mailto:neha.desai.2411@gmail.com" className={styles.btnHire}>
                <i className="fas fa-envelope"></i>
                HIRE ME NOW
              </a>
              <a href={`${import.meta.env.BASE_URL}assets/neha_desai.pdf`} download className={styles.btnDownload}>
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>
            {/* Stats Grid */}
            <div className={styles.statsGrid}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
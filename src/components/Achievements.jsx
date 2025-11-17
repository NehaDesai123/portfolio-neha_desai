import React from 'react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Ievolve Certificate',
      description: 'Recognized for developing a reusable component for modal, demonstrating innovation and technical excellence in component architecture.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Star Award',
      description: 'Awarded for outstanding performance and lasting contribution to the team and organization, showcasing dedication and exceptional work quality.',
      icon: 'fas fa-star'
    }
  ];

  return (
    <section id="achievements" className={styles.achievements}>
      <div className="container">
        <div className={styles.achievementsContainer}>
          <div className={styles.badgeCenter}>
            <div className={styles.introBadge}>Achievements</div>
          </div>

          <h2 className={styles.achievementsTitle}>Achievements & Recognition</h2>

          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={`${styles.achievementCard} fade-in`}>
                <div className={styles.achievementHeader}>
                  <div className={styles.achievementIcon}>
                    <i className={achievement.icon}></i>
                  </div>
                  <h2 className={styles.achievementTitle}>{achievement.title}</h2>
                </div>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
import styles from './AboutMe.module.css';
import { motion } from "framer-motion";

const highlights = [
  { icon: '🎓', label: 'BSc Computer Engineering' },
  { icon: '💻', label: 'Full-Stack Developer' },
  { icon: '📊', label: 'Data Analyst' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutMe = () => {
  return (
    <section className={styles.section} id="about">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.div className={styles.card} variants={itemVariants}>
          <motion.p className={styles.intro} variants={itemVariants}>
            I'm a <span className={styles.accent}>Full-Stack Developer</span> and{' '}
            <span className={styles.accent}>Data Analyst</span> with a Bachelor's degree in
            Computer Engineering.
          </motion.p>

          <motion.p className={styles.body} variants={itemVariants}>
            I'm a passionate developer with expertise in technology and data. 💻 My skills cover
            front-end and back-end web development as well as data analysis. ♨️
          </motion.p>

          <motion.p className={styles.body} variants={itemVariants}>
            I plan to pursue a Master's in Data Science at a university in the Netherlands 👨‍🎓,
            committed to continuous learning and improving my abilities. 🫡
          </motion.p>

          <motion.div className={styles.highlights} variants={containerVariants}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className={styles.badge}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={styles.badgeIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export {AboutMe};

// Skills.jsx
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, 
  FaPython, FaDocker, FaGitAlt, FaGithub, FaLinux, FaWindows,
  FaDatabase, FaChartLine, FaImage
} from 'react-icons/fa';
import { FaFilePowerpoint } from 'react-icons/fa';
import { 
  SiTailwindcss, SiThreedotjs, SiWordpress, SiDjango, SiPandas, 
  SiNumpy, SiScikitlearn, SiTensorflow, SiStreamlit, SiR, 
  SiMysql, SiPostgresql, SiBlender, SiJupyter, SiGooglecolab,
} from 'react-icons/si';
import { TbMathFunction } from 'react-icons/tb';
import { BiFootball, BiSwim } from 'react-icons/bi';

import { MdSportsMartialArts, MdSportsBasketball, MdSportsVolleyball } from 'react-icons/md';
import { GiBoxingGlove, GiWeightLiftingUp, GiShuttlecock, GiPingPongBat } from 'react-icons/gi';
import styles from './Skills.module.css';

const skillsData = {
  '🌐 Frontend Development': [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'Three.js', icon: <SiThreedotjs /> },
    { name: 'WordPress', icon: <SiWordpress /> },
  ],
  '🔙 Backend & Python Ecosystem': [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'PyScript', icon: <FaPython /> },
  ],
  '📊 Data Science & Analytics': [
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'Seaborn', icon: <TbMathFunction /> },
    { name: 'Matplotlib', icon: <TbMathFunction /> },
    { name: 'Streamlit', icon: <SiStreamlit /> },
    { name: 'Gradio', icon: <TbMathFunction /> },
    { name: 'R', icon: <SiR /> },
    { name: 'Machine Learning', icon: <TbMathFunction /> },
    { name: 'Power BI' },
    { name: 'Tableau', icon: <FaChartLine /> },
    { name: 'Excel'},
  ],
  '🛠 Tools & DevOps': [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Regex', icon: <TbMathFunction /> },
  ],
  '🗃 Databases': [
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Database', icon: <FaDatabase /> },
  ],
  '🎨 Design & Media': [
    { name: 'Blender', icon: <SiBlender /> },
    { name: 'Photoshop', icon: <FaImage /> },
  ],
  '💼 IT & Office Skills': [
    { name: 'Linux Essentials', icon: <FaLinux /> },
    { name: 'Computer Repair', icon: <TbMathFunction /> },
    { name: 'Windows OS', icon: <FaWindows /> },
    { name: 'MS Word'},
    { name: 'PowerPoint', icon: <FaFilePowerpoint />},
    { name: 'Access', icon:  <FaDatabase />},
  ],
};

const favoriteTools = [
  { name: 'Visual Studio Code'},
  { name: 'Jupyter Notebook', icon: <SiJupyter /> },
  { name: 'Google Colab', icon: <SiGooglecolab /> },
];

const sports = [
  { name: 'Soccer', icon: <BiFootball /> },
  { name: 'Volleyball', icon: <MdSportsVolleyball /> },
  { name: 'Basketball', icon: <MdSportsBasketball /> },
  { name: 'Badminton', icon: <GiShuttlecock /> },
  { name: 'Swimming', icon: <BiSwim /> },
  { name: 'BodyBuilding', icon: <GiWeightLiftingUp /> },
  { name: 'Judo', icon: <MdSportsMartialArts /> },
  { name: 'Kickboxing', icon: <GiBoxingGlove /> },
  { name: 'Table Tennis', icon: <GiPingPongBat /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  },
};

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <h2 className={styles.mainTitle}>🔧 Skills and Technologies</h2>
        </motion.div>

        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div key={category} className={styles.category} variants={itemVariants}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <motion.div className={styles.skillsGrid} variants={containerVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={styles.skillCard}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}

        <motion.div className={styles.category} variants={itemVariants}>
          <h3 className={styles.categoryTitle}>🔥 Favorite Tools</h3>
          <motion.div className={styles.skillsGrid} variants={containerVariants}>
            {favoriteTools.map((tool, index) => (
              <motion.div
                key={index}
                className={`${styles.skillCard} ${styles.favoriteCard}`}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.skillIcon}>{tool.icon}</div>
                <span className={styles.skillName}>{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className={styles.category} variants={itemVariants}>
          <h3 className={styles.categoryTitle}>🏅 Sports</h3>
          <motion.div className={styles.skillsGrid} variants={containerVariants}>
            {sports.map((sport, index) => (
              <motion.div
                key={index}
                className={`${styles.skillCard} ${styles.sportCard}`}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.skillIcon}>{sport.icon}</div>
                <span className={styles.skillName}>{sport.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Skills };

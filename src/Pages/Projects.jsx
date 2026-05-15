// Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';
import projImage1 from '../assets/Images/proj1.PNG';
import projImage2 from '../assets/Images/proj2.PNG';
import projImage3 from '../assets/Images/proj3.PNG';

const projects = [
  {
    title: 'ChatGPT Hugging Face Integration',
    description: 'Advanced NLP application combining ChatGPT capabilities with Hugging Face transformers for enhanced natural language processing and AI-powered conversations.',
    image: projImage1,  // تغییر از '/proj1.PNG' به projImage1
    github: 'https://github.com/farhad-here/ChatGPT_Hugging',
    tags: ['Python', 'NLP', 'AI', 'Hugging Face', 'ChatGPT'],
    logo: '🤖',
  },
  {
    title: 'Data Visualization & Analysis',
    description: 'Comprehensive data analysis toolkit featuring data cleaning, preprocessing, advanced visualization techniques, imputation methods, and encoding strategies for complex datasets.',
    image: projImage2,  // تغییر از '/proj2.PNG' به projImage2
    github: 'https://github.com/farhad-here/Data-visualization-analysis-DVA',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Science'],
    logo: '📊',
  },
  {
    title: 'Streamlit Image Processing',
    description: 'Interactive web application built with Streamlit for real-time image processing and manipulation using the Pillow library with various filters and transformations.',
    image: projImage3,  // تغییر از '/proj3.PNG' به projImage3
    github: 'https://github.com/farhad-here/streamlit-image-processing-pillow',
    tags: ['Streamlit', 'Python', 'Pillow', 'Image Processing', 'Web App'],
    logo: '🖼️',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Explore my latest work in AI, data science, and web development
          </p>
        </motion.div>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage} 
                />
                <div className={styles.imageOverlay}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayButton}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className={styles.buttonIcon} />
                    View Code
                  </motion.a>
                </div>
                <div className={styles.projectLogo}>
                  {project.logo}
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.tagsContainer}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.projectFooter}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    whileHover={{ x: 5 }}
                  >
                    <FaGithub className={styles.linkIcon} />
                    View on GitHub
                    <FaExternalLinkAlt className={styles.externalIcon} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export {Projects};

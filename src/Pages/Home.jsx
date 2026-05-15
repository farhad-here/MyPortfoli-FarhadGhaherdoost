import { motion } from "framer-motion";
import styles from './Home.module.css'
import myProfilePic from "../assets/Images/mypicture.png" 

const Home = () =>{

       return(
              <div className={styles.homeContainer}>
                     <div className={styles.contentWrapper}>
                            <motion.div 
                            className={styles.imageSection}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                            <div className={styles.imageWrapper}>
                                   <motion.img 
                                          src={myProfilePic}
                                          alt="my picture" 
                                          className={styles.profileImage}
                                          whileHover={{ scale: 1.05 }}
                                          transition={{ duration: 0.3 }}
                                   />
                            </div>
                            </motion.div>
                     
                            <motion.div 
                            className={styles.textSection}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                   <motion.h1 
                                   className={styles.greeting}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.4 }}
                                   >
                                          Hi, I'm <span className={styles.name}>Farhad Ghaherdoost</span>
                                   </motion.h1>
                            
                                   <motion.p 
                                   className={styles.description}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.6 }}
                                   >
                                          I'm a <span className={styles.highlight}>Data Analyst</span> and{' '}
                                          <span className={styles.highlight}>Full-Stack Developer</span>
                                   </motion.p>
                            
                                   <motion.div 
                                   className={styles.ctaButtons}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: 0.8 }}
                                   >
              
                                   </motion.div>
                            </motion.div>
                     </div>
              </div>
       );

};

export {Home};
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import MenuBarIcon from '../assets/Icons/squared_menu.svg';
import { useState } from "react";
import { motion } from "framer-motion";


const Header = () =>{
       const [menubarOpen, setMenubarOpen] = useState(false);
       return(
              <header>
                     {/* icon menu */}
                     <motion.img 
                     src={MenuBarIcon} alt="MenuBar icon" 
                     onClick={()=>setMenubarOpen(!menubarOpen)} className={styles.menuIcon} 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 2 }}
                     />
                     {/* menu */}
                     <nav className={`${styles.menu} ${menubarOpen ? styles.open:''}`}>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/skills">skills</Link>
                            <Link to="/contact">Contact</Link>
                     </nav>
              </header>
       )

}

export {Header};
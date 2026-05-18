import { HashRouter as Router , Routes, Route } from "react-router-dom";
import { Header } from './components/Header.jsx';
import {Home} from './Pages/Home.jsx';
import { AboutMe } from "./Pages/AboutMe.jsx";
import { ContactMe } from "./Pages/ContactMe.jsx";
import { Projects } from "./Pages/Projects.jsx";
import { Skills } from "./Pages/Skills.jsx";
import './App.css'

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<AboutMe />}></Route>
        <Route path="/Contact" element={<ContactMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>


      </Routes>




    </Router>
  );
}

export default App

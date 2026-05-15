import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header.jsx';
import {Home} from './Pages/Home.jsx';
import { AboutMe } from "./Pages/AboutMe.jsx";
import { ContactMe } from "./Pages/ContactMe.jsx";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<AboutMe />}></Route>
        <Route path="/Contact" element={<ContactMe />}></Route>


      </Routes>




    </BrowserRouter>
  );
}

export default App

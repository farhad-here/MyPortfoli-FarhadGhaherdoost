import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header.jsx';
import {Home} from './Pages/Home.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>


      </Routes>




    </BrowserRouter>
  );
}

export default App

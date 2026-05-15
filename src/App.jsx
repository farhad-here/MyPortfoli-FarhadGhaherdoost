import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header.jsx';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element={<></>}></Route>


      </Routes>




    </BrowserRouter>
  );
}

export default App

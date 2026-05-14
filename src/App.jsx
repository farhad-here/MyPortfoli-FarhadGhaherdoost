import {BorwserRouter, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css'

function App() {

  return (
    <BorwserRouter>
      <Header />

      <Routes>
        <Route path="" element={<></>}></Route>


      </Routes>




    </BorwserRouter>
  );
}

export default App

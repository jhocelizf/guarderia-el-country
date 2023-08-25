import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./components/Home/Home.jsx";
import Conocenos from "./components/Conocenos/Conocenos.jsx";
import SobreNosotras from './components/SobreNosotras/SobreNosotras.jsx'
import Contactanos from './components/Contactanos/Contactanos.jsx'


function App() {
  return (
    <div className='App'>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotras" element={<SobreNosotras />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
          <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;

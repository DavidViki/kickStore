import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Navibar from './Components/Navibar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Adidas from './Pages/Adidas.jsx';
import Contact from './Pages/Contact.jsx';
import Kids from './Pages/Kids.jsx';
import Men from './Pages/Men.jsx';
import Women from './Pages/Women.jsx';
import Nike from './Pages/Nike.jsx';
import Puma from './Pages/Puma.jsx';
import Reebok from './Pages/Reebok.jsx';
import Team from './Pages/Team.jsx';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{fontFamily: "Arial, sans-serif"}}>
    <Navibar />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/reebok" element={<Reebok />} />
          <Route path="/puma" element={<Puma />} />
          <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/team" element={<Team />} />
        </Routes>
    <Footer />
    </div>
  );
}

export default App;

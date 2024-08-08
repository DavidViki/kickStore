import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Navibar from './Components/Navibar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Header/Home.jsx';
import About from './Footer/About.jsx';
import Adidas from './Header/Dropdown/Adidas.jsx';
import Contact from './Footer/Contact.jsx';
import Kids from './Header/Kids.jsx';
import Men from './Header/Men.jsx';
import Women from './Header/Women.jsx';
import Nike from './Header/Dropdown/Nike.jsx';
import Puma from './Header/Dropdown/Puma.jsx';
import Reebok from './Header/Dropdown/Reebok.jsx';
import Team from './Footer/Team.jsx';
import { Route, Routes } from "react-router-dom";
import "./Styles/styling.css";

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

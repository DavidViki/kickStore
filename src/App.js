import 'bootstrap/dist/css/bootstrap.css'; //Importing Bootstrap styles
import React from "react";
import Navibar from './Components/Navibar.jsx'; //Importing Navibar component
import Footer from './Components/Footer.jsx'; //Importing Footer component
import Home from './Header/Home.jsx'; //Importing Home page
import About from './Footer/About.jsx'; //Importing About page
import Adidas from './Header/Dropdown/Adidas.jsx'; //Importing Adidas page
import Contact from './Footer/Contact.jsx'; //Importing Contact page
import Kids from './Header/Kids.jsx'; //Importing Kids page
import Men from './Header/Men.jsx'; //Importing Men page
import Women from './Header/Women.jsx'; //Importing Women page
import Nike from './Header/Dropdown/Nike.jsx'; //Importing Nike page
import Puma from './Header/Dropdown/Puma.jsx'; //Importing Puma page
import Reebok from './Header/Dropdown/Reebok.jsx'; //Importing Reebok page
import Team from './Footer/Team.jsx'; //Importing Team page
import { Route, Routes } from "react-router-dom"; //Importing routing
import "./Styles/styling.css"; //Importing global css

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

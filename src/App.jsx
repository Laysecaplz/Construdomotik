import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}


    
  

export default App;




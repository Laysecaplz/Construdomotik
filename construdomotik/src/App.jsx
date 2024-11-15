import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import './css/App.css';

function App() {
  return (
    <Router>
      <Header />
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

function Home() {
  return (
   

    <section className="gallery-section">
      <h2>Bienvenidos</h2>
     
      <div className="gallery-container">
        <div className="gallery-item">
          <img src="/images/con1.jpg" alt="Proyecto 1" />
          <p>Proyecto de construcción inteligente</p>
        </div>
        <div className="gallery-item">
          <img src="/images/con2.jpg" alt="Proyecto 2" />
          <p>Integración de domótica en el hogar</p>
        </div>
        <div className="gallery-item">
          <img src="/images/con3.jpg" alt="Proyecto 3" />
          <p>Renovación con tecnologías inteligentes</p>
        </div>
        <div className="gallery-item">
          <img src="/images/con4.jpg" alt="Proyecto 3" />
          <p>Renovación con tecnologías inteligentes</p>
        </div>
        <div className="gallery-item">
          <img src="/images/con4.jpg" alt="Proyecto 3" />
          <p>Renovación con tecnologías inteligentes</p>
        </div>
        <div className="gallery-item">
          <img src="/images/con3.jpg" alt="Proyecto 3" />
          <p>Renovación con tecnologías inteligentes</p>
        </div>
        <div className="gallery-item">
          <img src="/images/con3.jpg" alt="Proyecto 3" />
          <p>Renovación con tecnologías inteligentes</p>
        </div>
        <div className="gallery-item">
          <img src="/images/con3.jpg" alt="Proyecto 3" />
          <p>Renovación con tecnologías inteligentes</p>
        </div>
      </div>
    </section>
    
  );
}

export default App;




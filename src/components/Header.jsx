
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'


function Header() {
  return (
    <header>
      <div className="header-title">
        <h1>ConstrudomotiK</h1>
      </div>
      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;



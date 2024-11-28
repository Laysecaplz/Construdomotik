
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'



function Header() {
  return (
    <header className="header-container">
      <div className="banner-container">
        <img className="banner-image" src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="Banner" />
        <h1 className="header-title"></h1>
      </div>
      <nav className="header-nav">
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;






import React from 'react';
import '../css/Footer.css'

function Footer() {
  return (
    <footer>
      <p>© 2024 Construdomotik | Todos los derechos reservados</p>
      <div className="social-icons">
        <a href="mailto:correo@ejemplo.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;


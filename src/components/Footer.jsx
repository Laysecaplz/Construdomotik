
import React from 'react';
import '../css/Footer.css'

function Footer() {
  return (
    <footer>
      <p>© 2024 Construdomotik | Todos los derechos reservados</p>
      <div className="social-icons">
        <a href="mailto:construdomotik@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/971945211" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/conmetalica88/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100091763560203" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;


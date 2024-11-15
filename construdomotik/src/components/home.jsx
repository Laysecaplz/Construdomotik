import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenidos a ContrudomotiK</h1>
        <p>La mejor solución en construcción y domótica inteligente</p>
      </header>

      <section className="home-gallery">
        <h2>Nuestros Proyectos</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300" alt="Proyecto 1" />
            <p>Proyecto de construcción inteligente</p>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300" alt="Proyecto 2" />
            <p>Integración de domótica en el hogar</p>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300" alt="Proyecto 3" />
            <p>Renovación con tecnologías inteligentes</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 ContrudomotiK - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Home;

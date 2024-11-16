import React from 'react';
import '../css/Nosotros.css'



function Nosotros() {
  return (
    <div className="nosotros-container">
      <h2 className="titulo-nosotros">Sobre Nosotros</h2>
      
      <div className="nosotros-item">
        <div className="texto-descripcion">
          <h3>ConstrudomotiK: Innovación y Tecnologia para tu hogar y empresa</h3>
          <p>
            En <strong>ConstrudomotiK</strong>, somos una empresa especializada en la integración de soluciones de construcción inteligente y sistemas de domótica. Combinamos la experiencia en proyectos de construcción con la última tecnología para ofrecer espacios que no solo son funcionales, sino también eficientes y sostenibles.
          </p>
          <p>
            Nuestro equipo altamente capacitado trabaja con pasión y dedicación para ofrecer soluciones personalizadas, adaptadas a las necesidades de cada cliente. Desde la planificación hasta la ejecución, garantizamos resultados que superan las expectativas.
          </p>
        </div>
        <div className="imagen-nosotros">
          <img src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} alt="Nosotros" />
        </div>
      </div>


      {/* Agrega más secciones de "Nosotros" según lo necesites */}
    </div>
  );
}

export default Nosotros;

import React from 'react';
import '../css/Home.css'; // Importa el archivo de estilos de Home

function Home() {
  return (
    <section className="gallery-section">
      <h2>Bienvenidos</h2>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con1.jpg`} alt="Proyecto 1" />
          <p>Proyecto de construcción inteligente</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con2.jpg`} alt="Proyecto 9" />
          <p>Integración de domótica en el hogar</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con3.jpg`} alt="Proyecto 3" />
          <p>Renovación con tecnologías inteligentes</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con4.jpg`} alt="Proyecto 3" />
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

export default Home;

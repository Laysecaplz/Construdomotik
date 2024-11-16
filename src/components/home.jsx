import React from 'react';
import '../css/Home.css'; // Importa el archivo de estilos de Home

function Home() {
  return (
    <section className="gallery-section">
       <h2 className="titulo-nosotros">Bienvenidos</h2>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con1.jpg`} alt="Proyecto 1" />
          <p>Trabajos de Soldadura</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con2.jpg`} alt="Proyecto 2" />
          <p>Construcción de escalera metalica</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con3.jpg`} alt="Proyecto 3" />
          <p>Perforacion para Instalación de pilotes</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/con4.jpg`} alt="Proyecto 4" />
          <p>Instalación de casa prefabricada</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/pilotes.jpg`} alt="Proyecto 5" />
          <p>Construccion de piso con pilotes</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/metal.jpg`} alt="Proyecto 6" />
          <p>Estructuras metalicas</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/torre.jpg`}  alt="Proyecto 7" />
          <p>Torre de agua</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/reja.jpg`}  alt="Proyecto 8" />
          <p>Instalación de porton</p>
        </div>
        <div className="gallery-item">
          <img src={`${process.env.PUBLIC_URL}/images/piso flotante.jpg`}  alt="Proyecto 8" />
          <p>Instalación de piso flotante</p>
        </div>
      </div>
    </section>
  );
}

export default Home;

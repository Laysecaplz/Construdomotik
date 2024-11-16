import React from 'react';
import '../css/Servicios.css'



function Servicios() {
  return (
    <div className="servicios-container">
      <h2 className="titulo-servicios">Nuestros Servicios</h2>

      <div className="servicio-item">
        <div className="texto-descripcion">
          <h3>Construcción</h3>
          <p>
          Ofrecemos soluciones completas de construcción que combinan diseño moderno, eficiencia y tecnología de punta. Nuestro equipo especializado se encarga de cada fase del proyecto, desde la planificación y diseño arquitectónico hasta la ejecución y finalización, asegurando calidad y cumplimiento de plazos. Además, integramos sistemas inteligentes de domótica para crear espacios innovadores y sostenibles que mejoran el confort y la eficiencia energética. Ya sea para proyectos residenciales, comerciales o industriales, garantizamos resultados que superan las expectativas.
          </p>
        </div>
        <div className="imagen-servicio">
          <img src={`${process.env.PUBLIC_URL}/images/construccion.jpg`} alt="Servicio 1" />
        </div>
      </div>

      <div className="servicio-item">
        <div className="texto-descripcion">
          <h3>Instalación y Configuración de CCTV</h3>
          <p>
          Ofrecemos soluciones avanzadas de videovigilancia mediante sistemas de CCTV (circuito cerrado de televisión) para proteger y monitorear tus espacios. Nuestros servicios incluyen el diseño, instalación y configuración de cámaras de alta definición, asegurando cobertura completa y calidad de imagen excepcional. Adaptamos cada sistema a las necesidades de tu hogar, negocio o industria, integrando opciones como grabación continua, acceso remoto desde dispositivos móviles y alertas en tiempo real. Garantizamos la seguridad de tus bienes y la tranquilidad de contar con un monitoreo efectivo las 24 horas.
          </p>
        </div>
        <div className="imagen-servicio">
          <img src={`${process.env.PUBLIC_URL}/images/camaras.jpg`} alt="Servicio 1" />
        </div>
      </div>
      
      <div className="servicio-item">
        <div className="texto-descripcion">
          <h3>Instalación y mantención de equipos de climatización</h3>
          <p>
          Proveemos servicios profesionales de instalación y mantenimiento de sistemas de aire acondicionado, asegurando un ambiente confortable y eficiente durante todo el año. Nuestro equipo especializado se encarga de instalar unidades de cualquier capacidad y tipo, desde sistemas residenciales hasta comerciales. Además, realizamos mantenimiento preventivo y correctivo para maximizar el rendimiento, prolongar la vida útil del equipo y optimizar el consumo energético. Con un enfoque en la calidad y la satisfacción del cliente, garantizamos un servicio seguro, rápido y confiable.
          </p>
        </div>
        <div className="imagen-servicio">
          <img src={`${process.env.PUBLIC_URL}/images/climatizacion.jpg`} alt="Servicio 2" />
        </div>
      </div>

      {/* Agrega más bloques de servicios según sea necesario */}
    </div>
  );
}

export default Servicios;

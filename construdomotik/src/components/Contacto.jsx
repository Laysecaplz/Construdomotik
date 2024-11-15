import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contacto.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Maneja el cambio en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Por favor, rellene todos los campos');
      return;
    }

    // Usa el servicio de EmailJS para enviar el correo
    emailjs
      .sendForm(
        'service_i6mupr9', // Reemplaza con tu `service_id` de EmailJS
        'template_tpem4lh', // Reemplaza con tu `template_id` de EmailJS
        e.target,
        '6QcfbrD3E08eNwk2P' // Reemplaza con tu `user_id` de EmailJS
      )
      .then(
        (result) => {
          console.log('Mensaje enviado con éxito:', result.text);
          setSubmitted(true);
          setError('');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.error('Error al enviar el mensaje:', error.text);
          setError('Hubo un problema al enviar el mensaje. Intenta nuevamente.');
        }
      );
  };

  return (
    <div className="contact-container">

        
        <p>Envíanos un mensaje y nos pondremos en contacto contigo pronto.</p>
     

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto del mensaje"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar Mensaje</button>
        </form>

        {submitted && <p className="submission-message">¡Gracias por tu mensaje! Te responderemos pronto.</p>}
        {error && <p className="error-message">{error}</p>}
      </section>
    </div>
  );
}

export default Contact;


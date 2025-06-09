import React, { useState } from 'react';
import './App.css';
import './titulo.css'; 
import './tags.css'; 
import './section.css';
import './experiencia.css';
import './back.css';
import './proyectos.css';
import foto3 from './foto3.png';
import { FaBriefcase, FaCode, FaChartLine } from 'react-icons/fa'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import cv from './CV_RicardoMayorga.pdf'; 
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect } from 'react';



const App = () => {

  useEffect(() => {
    document.title = "Ricardo Mayorga | Portafolio Profesional";
  }, []);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'CV_RicardoMayorga.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const certificates = [
    {
      id: 1,
      title: "Google Cloud Computing Foundations CertificateS",
      institution: "Google and INROADS",
      year: "2024",
      link: "https://www.cloudskillsboost.google/public_profiles/20017619-7e83-468c-8659-b81cbe0f9ffb"
    },
    {
      id: 2,
      title: " Inteligencia Artificial y Data Science ",
      institution: "BlockDemy",
      year: "2024",
      link: "#"
    },
    {
      id: 3,
      title: "BlockChain",
      institution: "BlockDemy",
      year: "2024",
      link: "#"
    },
    {
      id: 4,
      title: "Switching, Routing, and Wireless Essentials ",
      institution: "CCNA",
      year: "2023",
      link: "#"
    }
  ];


  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="floating-buttons">
  <button className="theme-toggle-btn" onClick={toggleMode}>
    {darkMode ? '☀️' : '🌙'}
  </button>
  <button className="download-cv-btn" onClick={downloadCV}>
    Descargar CV <FaDownload />
  </button>
</div>

      <div className="container">
        <header className="header">
          <h1  className="titlemove">
              PORTAFOLIO DE 
              <span>
                <span>RICARDO</span>
                <span>EMMANUEL</span>
                <span>MAYORGA</span>
                <span>ROMÁN</span>
              </span>
            </h1>
        
        </header>

        <section className="section2">
          <div className="section-header2">
            <h2>Sobre Mí</h2>
            <div className="divider2"></div>
          </div>
          <div className="content2">
                      <div className="about-text2">
            <p>Ingeniero en ITIC recién egresado con capacidad para manejar múltiples tareas diariamente. 
            Persona energética y con gran motivación para aprender nuevas habilidades. 
            Siempre preparado para adaptarme a diferentes tecnologías según lo requiera un proyecto. 
            Experiencia trabajando en equipo y de manera autodidacta.</p>
          </div>
           <div className="about-image2">
            <img src={foto3} alt="Foto de perfil" className="profile-photo2" />
          </div>
        </div>
        </section>

        

        <section className="section2">
          <div className="section-header">
            <h2>FORMACION ACADEMICA</h2>
            <div className="divider"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Instituto Tecnologico de Aguascalientes</h3>
              <p> Ingeniería en Tecnologías de la Información y Comunicaciones</p>
              <div className='tag-list'>
                <div className='inner'>
              <div className="tech-tag"><span></span>React</div>
              <div className="tech-tag"><span></span>Node.js</div>
              <div className="tech-tag"><span></span>JavaScript</div>
              <div className="tech-tag"><span></span>Python</div>
              <div className="tech-tag"><span></span>HTML</div>
              <div className="tech-tag"><span></span>CSS</div>
              <div className="tech-tag"><span></span>Git</div>
              <div className="tech-tag"><span></span>MySQL</div>
              <div className="tech-tag"><span></span>C#</div>
              <div className="tech-tag"><span></span>Java</div>
              <div className="tech-tag"><span></span>PHP</div>
              <div className="tech-tag"><span></span>Laravel</div>    
              <div className="tech-tag"><span></span>React</div>
              <div className="tech-tag"><span></span>Node.js</div>
              <div className="tech-tag"><span></span>JavaScript</div>
              <div className="tech-tag"><span></span>Python</div>
              <div className="tech-tag"><span></span>HTML</div>
              <div className="tech-tag"><span></span>CSS</div>
              <div className="tech-tag"><span></span>Git</div>
              <div className="tech-tag"><span></span>MySQL</div>
              <div className="tech-tag"><span></span>C#</div>
              <div className="tech-tag"><span></span>Java</div>
              <div className="tech-tag"><span></span>PHP</div>
              <div className="tech-tag"><span></span>Laravel</div>           
            </div>
            <div className="fade"></div>
          </div>
            </div>
            </div>
        </section>


 <section className="section2">
      <div className="section-header">
  <h2>Experiencia Profesional</h2>
  <div className="divider"></div>
</div>

<div className="experience-container">
  {/* Experiencia 1 */}
  <div className="experience-card">
    <div className="experience-icon">
      <FaChartLine className="icon" />
    </div>
    <div className="experience-content">
      <div className="experience-header">
        <h3>QS2Point</h3>
        <span className="experience-badge">Massachusetts</span>
      </div>
      <h4>Analista Jr. de Requerimientos</h4>
      <div className="experience-date">
        <FaCalendarAlt className="date-icon" />
        <span>Septiembre 2024 – Marzo 2025</span>
      </div>
      <div className="experience-timeline">
        <div className="timeline-dot"></div>
        <div className="timeline-line"></div>
      </div>
    </div>
  </div>

  <div className="experience-card">
    <div className="experience-icon">
      <FaCode className="icon" />
    </div>
    <div className="experience-content">
      <div className="experience-header">
        <h3>GovaClean</h3>
        <span className="experience-badge">Querétaro</span>
      </div>
      <h4>Desarrollador Full Stack</h4>
      <div className="experience-date">
        <FaCalendarAlt className="date-icon" />
        <span>Enero 2023 – Mayo 2024</span>
      </div>
      <div className="experience-timeline">
        <div className="timeline-dot"></div>
        <div className="timeline-line"></div>
      </div>
    </div>
  </div>
</div>
      </section>

         <section className="section2">
          <div className="section-header">
            <h2>Contacto</h2>
            <div className="divider"></div>
          </div>
          <div className="contact-content">
            <p>Puedes contactarme a través de:</p>
            <div className="contact-links">
              <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=ricardomayorgaroman@gmail.com&su=Contacto desde Portafolio"  target="_blank" className="contact-link">
              ✉️ Email</a>
              <a href="https://www.linkedin.com/in/ricardo-mayorga-román-391947222" target="_blank" rel="noopener noreferrer" className="contact-link">🔗 LinkedIn</a>
              <a href="https://github.com/RicardoMR34" target="_blank" rel="noopener noreferrer" className="contact-link">💻 GitHub</a>
            </div>
          </div>
        </section>

<section className="section2">
  <div className="section-header">
    <h2>ALGUNOS PROYECTOS</h2>
    <div className="divider"></div>
  </div>

  <div className="projects-grid">
    
    <div className="project-card">
      <h3>GENERADOR QR</h3>
      <p>Generador de códigos QR que convierte texto ingresado por el usuario en un código QR visual. 
        Usa una librería especializada para crear la imagen QR y permite visualizarla directamente en la interfaz.</p>

      <div className="project-carousel">
        <img src='imagenes/proyecto1-1.png' alt="Proyecto 1 - Imagen 1" />

      </div>

      <div className="project-technologies">
        <div className="tech-item">React</div>
        <div className="tech-item">Node.js</div>
        <div className="tech-item">CSS</div>
        <div className="tech-item">HTML</div>
        <div className="tech-item">JavaScript</div>
      </div>
    </div>


    <div className="project-card">
      <h3>ECOMMERCE</h3>
      <p>Landing page para un sitio de comercio electrónico. Con funciones de carrito de compras y pago con PayPal funcional.
        Con datos extraidos de JSON
      </p>

      <div className="project-carousel">
        <img src='imagenes/proyecto2-1.png' alt="Proyecto 2 - Imagen 1" />
        <img src='imagenes/proyecto2-2.png' alt="Proyecto 2 - Imagen 2" />
        <img src='imagenes/proyecto2-3.png' alt="Proyecto 2 - Imagen 3" />
      </div>

      <div className="project-technologies">
        <div className="tech-item">JSON</div>
        <div className="tech-item">HTML</div>
        <div className="tech-item">CSS</div>
        <div className="tech-item">JavaScript</div>
        <div className="tech-item">PayPal</div>
      </div>
    </div>

    <div className="project-card">
      <h3>CALCULADORA DE NOMINA</h3>
      <p>Aplicación web para calcular nómina de empleados, permitiendo ingresar horas trabajadas y salario por hora. Ademas 
        permitiendo registrar, editar y eliminar empleados en una base de datos, con pruebas en PHPUnit
      </p>

      <div className="project-carousel">
        <img src='imagenes/proyecto3-1.png' alt="Proyecto 3 - Imagen 1" />
        <img src='imagenes/proyecto3-2.png' alt="Proyecto 3 - Imagen 2" />
        <img src='imagenes/proyecto3-3.png' alt="Proyecto 3 - Imagen 3" />
      </div>

      <div className="project-technologies">
        <div className="tech-item">PHP</div>
        <div className="tech-item">PHPUnit</div>
        <div className="tech-item">SQL</div>
        <div className="tech-item">JavaScript</div>
        <div className="tech-item">HTML</div>
        <div className="tech-item">SELENIUM</div>

      </div>
    </div>

      <div className="project-card">
      <h3>INVENTARIO DE MEDICAMENTOS</h3>
      <p>Aplicación web para gestionar el inventario de medicamentos en una farmacia, permitiendo agregar, editar y eliminar productos,
         así como llevar un control de stock.</p>

      <div className="project-carousel">
        <img src='imagenes/proyecto4-1.png' alt="Proyecto 4 - Imagen 1" />
        <img src='imagenes/proyecto4-2.png' alt="Proyecto 4 - Imagen 2" />
        <img src='imagenes/proyecto4-3.png' alt="Proyecto 4 - Imagen 3" />
      </div>

      <div className="project-technologies">
        <div className="tech-item">MVC</div>
        <div className="tech-item">C#</div>
        <div className="tech-item">SQL</div>
        <div className="tech-item">Entity Framework</div>
        <div className="tech-item">.CSHTML</div>
      </div>
    </div>

      <div className="project-card">
      <h3>REGISTRO DE EMPLEADOS</h3>
      <p>Aplicación web para gestionar el registro de empleados en una empresa, permitiendo agregar, editar y eliminar empleados,
        utilizando base de datos y Blazor
      </p>

      <div className="project-carousel">
        <img src='imagenes/proyecto5-1.png' alt="Proyecto 5 - Imagen 1" />
        <img src='imagenes/proyecto5-2.png' alt="Proyecto 5 - Imagen 2" />
        <img src='imagenes/proyecto5-3.png' alt="Proyecto 5 - Imagen 3" />
      </div>

      <div className="project-technologies">
        <div className="tech-item">Python</div>
        <div className="tech-item">Django</div>
        <div className="tech-item">PostgreSQL</div>
      </div>
    </div>

      <div className="project-card">
      <h3>MODELO PARA PREDICCION DE INPC</h3>
      <p>Modelo para predecir el Índice Nacional de Precios al Consumidor (INPC) 
        utilizando técnicas de Machine Learning. Con un 99.99915% de precisión relativa </p>

      <div className="project-carousel">
        <img src='imagenes/proyecto6-1.png' alt="Proyecto 6 - Imagen 1" />
        <img src='imagenes/proyecto6-2.png' alt="Proyecto 6 - Imagen 2" />
        <img src='imagenes/proyecto6-3.png' alt="Proyecto 6 - Imagen 3" />
      </div>

      <div className="project-technologies">
        <div className="tech-item">Python</div>
        <div className="tech-item">Machine Learning</div>
        <div className="tech-item">MONGODB</div>
        <div className="tech-item">JUPYTER</div>
      </div>
    </div>
  </div>

  </section>

         <section className="section2">
        <div className="section-header">
          <h2>Certificados y cursos</h2>
          <div className="divider"></div>
          <p className="section-subtitle">Reconocimientos académicos y profesionales</p>
        </div>
        
        <div className="certificates-list">
          {certificates.map((cert) => (
            <div className="certificate-item" key={cert.id}>
              <div className="certificate-icon">
                <FaCertificate />
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="institution">{cert.institution}</span>
                  <span className="year">{cert.year}</span>
                </div>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certificate-link"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>

        <footer>
        <div className="footer-content">
          <div className="contact-info">
            <span><FaPhone /> +52 449 291 8713</span>
            <span><FaEnvelope /> ricardomayorgaroman@gmail.com</span>
            <span><FaMapMarkerAlt /> Aguascalientes, México</span>
          </div>
        </div>
      </footer>
       
      </div>
      
    </div>
  );
};

export default App;
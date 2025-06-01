import React, { useState } from 'react';
import './App.css';
import fotoPerfil from './foto.png'; 
import { FaBriefcase, FaCode, FaChartLine } from 'react-icons/fa'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);
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
      <button className="theme-toggle-btn" onClick={toggleMode}>
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>

      <div className="container">
        <header className="header">
          <h1 className="title">Mi Portafolio</h1>
          <p className="subtitle">Desarrollador de Tecnologías de la Información</p>
        </header>

        <section className="section">
          <div className="section-header">
            <h2>Sobre Mí</h2>
            <div className="divider"></div>
          </div>
          <div className="content">
                      <div className="about-text">
            <p>Ingeniero en TIC recién egresado con capacidad para manejar múltiples tareas diariamente. 
            Persona energética y con gran motivación para aprender nuevas habilidades. 
            Siempre preparado para adaptarme a diferentes tecnologías según lo requiera un proyecto. 
            Experiencia trabajando en equipo y de manera autodidacta.</p>
          </div>
           <div className="about-image">
            <img src={fotoPerfil} alt="Foto de perfil" className="profile-photo" />
          </div>
        </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Educacion</h2>
            <div className="divider"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Instituto Tecnologico de Aguascalientes</h3>
              <p> Ingeniería en Tecnologías de la Información y Comunicaciones</p>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span> 
              <span className="tech-tag">Git</span>
              <span className="tech-tag">MySQL</span> 
              <span className="tech-tag">C#</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">Laravel</span>
            </div>
          </div>
        </section>
 <section className="section">
        <div className="section-header">
          <h2>Experiencia Profesional</h2>
          <div className="divider"></div>
        </div>
        
        <div className="experience-container">
          {/* Experiencia 1 */}
          <div className="experience-card">
            <div className="experience-icon">
              <FaChartLine />
            </div>
            <div className="experience-content">
              <h3>QS2Point <span className="location">– Massachusetts</span></h3>
              <h4>Analista Jr. de Requerimientos</h4>
              <div className="experience-date">Septiembre 2024 – Marzo 2025</div>
            </div>
          </div>

          {/* Experiencia 2 */}
          <div className="experience-card">
            <div className="experience-icon">
              <FaCode />
            </div>
            <div className="experience-content">
              <h3>GovaClean <span className="location">– Querétaro</span></h3>
              <h4>Desarrollador Full Stack</h4>
              <div className="experience-date">Enero 2023 – Mayo 2024</div>
            </div>
          </div>
        </div>
      </section>

         <section className="section">
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">💻 GitHub</a>
            </div>
          </div>
        </section>

         <section className="section">
        <div className="section-header">
          <h2>Mis Certificados y cursos</h2>
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

        <footer className="contact-footer">
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
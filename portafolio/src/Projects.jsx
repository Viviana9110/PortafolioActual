import React from "react";
import "./Projects.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import chat from "./assets/chat.png";
import carrito from "./assets/carrito.png";
import booking from "./assets/booking.png";
import elevatex from "./assets/elevate.png";

const projects = [
  {
    id: 1,
    title: "Ecommerce tienda de abarrotes",
    description: "Carrito de compras con React y EmailJS para envío de pedidos.",
    technologies: ["ReactJS", "TailwindCSS", "Nodemailer"],
    image: carrito,
    url: "https://green-cart-eight-sigma.vercel.app/",
    github: "https://github.com/Viviana9110/GreenCart"
  },
  {
    id: 2,
    title: "Sistema Reservas de viajes",
    description: "App para reserva de paquetes turísticos y habitaciones de hotel con confirmación por email",
    technologies: ["ReactJS", "Node.js", "MongoDB"],
    image: booking,
    url: "https://reservas-viajes-hoteles-front.vercel.app/",
    github: "https://github.com/Viviana9110/Reservas_viajes_hoteles"
  },
  {
    id: 3,
    title: "Aplicación de Chat en tiempo real",
    description: "Chat con WebSocket y Redis para usuarios conectados.",
    technologies: ["ReactJS", "WebSocket", "Redis"],
    image: chat,
    url: "https://chat-websocket-seven.vercel.app/login",
    github: "https://github.com/Viviana9110/chat-websocket"
  },
  {
    id: 4,
    title: "Agencia de publicidad Elevate X",
    description: "Landing page moderna para agencia de publicidad.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
    image: elevatex,
    url: "https://elevate-x-puce.vercel.app/",
    github: "https://github.com/Viviana9110/elevateX"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="section-subtitle">Mi Trabajo</span>
        <h2 className="section-title">Proyectos Recientes</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Imagen */}
            <img src={project.image} alt={project.title} className="project-image" />

            {/* Contenido */}
            <div className="project-info">
              {/* Título */}
              <h3 className="project-title">{project.title}</h3>

              {/* Descripción */}
              <p className="project-description">{project.description}</p>

              {/* Tecnologías */}
              <div className="project-techs">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="project-buttons">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Ver Proyecto <FaArrowRight />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Código <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

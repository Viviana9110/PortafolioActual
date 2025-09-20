import React from "react";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";
import chat from "./assets/chat.png";
import carrito from "./assets/carrito.png";
import booking from "./assets/booking.png";
import elevatex from "./assets/elevate.png"

const projects = [
  {
    id: 1,
    title: "Eccomerce tienda de abarrotes",
    category: "",
    image: carrito,
    url: "https://green-cart-eight-sigma.vercel.app/"
  },
  {
    id: 2,
    title: "Sistema Reservas de viajes",
    category: "",
    image: booking,
    url:"https://reservas-viajes-hoteles-front.vercel.app/"
  },
  {
    id: 3,
    title: "Aplicación de Chat en tiempo real",
    category: "",
    image: chat,
    url: "https://chat-websocket-seven.vercel.app/login"
  },
  {
    id: 4,
    title: "Sitio Web Agencia de publicidad Elevate X",
    category: "",
    image: elevatex ,
    url: "https://elevate-x-puce.vercel.app/"
  },
  
  
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
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <button className="project-button" src="https://zippy-starship-c62942.netlify.app/">
              <a href={project.url} target="_blank">
                <FaArrowRight />
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

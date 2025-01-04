import React from "react";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";
import todolist from "./assets/todolist.png";
import vet from "./assets/vet.png";
import carrito from "./assets/carrito.png";

const projects = [
  {
    id: 1,
    title: "To-Do List",
    category: "",
    image: todolist,
    url: "https://zippy-starship-c62942.netlify.app/"
  },
  {
    id: 2,
    title: "Seguimiento de pacientes de veterinaria",
    category: "",
    image: vet,
    url:"https://whimsical-creponne-2c2ee0.netlify.app/"
  },
  {
    id: 3,
    title: "Carrito de compras",
    category: "",
    image: carrito,
    url: "https://unrivaled-truffle-6e8631.netlify.app/"
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

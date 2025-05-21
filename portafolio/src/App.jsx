import React from "react";
import "./App.css";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

import person from "./assets/person.png";
import employee from "./assets/employee.png";
import counseling from "./assets/counseling.png";
import coding from "./assets/coding.png";
import data from "./assets/data.png";
const App = () => {
  return (
    <>
    <div className="container">
      <Navbar/>
      <main className="hero">
        <div className="text-section">
          <span className="small-title">Viviana Londoño</span>
          <h1>
            Hola! Soy Viviana <br /> <span className="highlight">FrontEnd Developer</span>
          </h1>
          <p>
          Desarrolladora FrontEnd React con pasión por crear interfaces de usuario, experiencias y animaciones intuitivas y dinámicas. Mi objetivo siempre es escribir código limpio para asi ofrecer resultados finales excepcionales.
          </p>
          <p>
          ¡No dudes en contactarme en cualquier momento y estaré siempre en la mejor disposición de trabajar contigo!
          </p>
          <div className="social-icons">
            <a href="https://github.com/Viviana9110" target="_blank">
            <FaGithub/>
            </a>
            
            <a href="https://www.linkedin.com/in/viviana91" target="_blank">
            <FaLinkedinIn />
            </a>
            
          </div>
        </div>
        <div className="image-section">
          <img src={person} alt="person" />
        </div>
      </main>
    </div>
    <Skills />
    <Projects />
    <Footer />
    
    </>
    
    
  );
};

export default App;

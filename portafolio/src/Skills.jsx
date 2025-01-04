import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 90 },
    { name: "Bootstrap", percentage: 75 },
    { name: "TailwindCSS", percentage: 80 },
    { name: "NodeJS", percentage: 70 },
    { name: "Express", percentage: 70 },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import "../../styles/Skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Java",
  "Bootstrap",
  "TailwindCSS",
  "SCSS"
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

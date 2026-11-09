import React, { useRef, useState } from "react";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlareStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setGlareStyle({});
  };

  return (
    <div className="project-card-wrapper">
      <div
        ref={cardRef}
        className="project-card"
        style={glareStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-glare"></div>

        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>

          <div className="tech-stack">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>

          <div className="project-buttons">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live">
              Live
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

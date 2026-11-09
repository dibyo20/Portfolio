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
              <span>Live</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
              <span>GitHub</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

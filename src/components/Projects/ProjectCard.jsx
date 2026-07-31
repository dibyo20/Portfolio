import React, { useRef, useState } from "react";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;

    const maxTilt = 4;
    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });

    // Set glare reflection coordinates
    setGlareStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({});
    setGlareStyle({});
  };

  const handleTouchStart = (e) => {
    handleTouchMove(e);
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;

    const maxTilt = 4;
    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });

    setGlareStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    });
  };

  const handleTouchEnd = () => {
    setTiltStyle({});
    setGlareStyle({});
  };

  return (
    <div className="project-card-wrapper">
      <div
        ref={cardRef}
        className="project-card"
        style={{
          ...tiltStyle,
          ...glareStyle,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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

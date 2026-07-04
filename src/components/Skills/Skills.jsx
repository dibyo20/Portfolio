import React, { useRef, useState } from "react";
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

const SkillBox = ({ skill, index }) => {
  const boxRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!boxRef.current) return;
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;

    const maxTilt = 15; // skills are smaller, they can tilt a bit more!
    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    setTiltStyle({
      transform: `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({});
  };

  const handleTouchStart = (e) => {
    handleTouchMove(e);
  };

  const handleTouchMove = (e) => {
    if (!boxRef.current || e.touches.length === 0) return;
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;

    const maxTilt = 15;
    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    setTiltStyle({
      transform: `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    });
  };

  const handleTouchEnd = () => {
    setTiltStyle({});
  };

  return (
    <div className="skill-box-wrapper" style={{ animationDelay: `${index * 40}ms` }}>
      <div
        ref={boxRef}
        className="skill-box"
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {skill}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillBox key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

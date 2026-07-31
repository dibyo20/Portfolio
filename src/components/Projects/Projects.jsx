import React from "react";
import "../../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import clicksyImg from "../../Assests/clicksy.png";
import solvitImg from "../../Assests/solvit.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      title: "Clicksy",
      desc: "A modern social media platform built using the MERN Stack. It offers a seamless experience for creators to connect, share, and build high-octane digital communities.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "ImageKit"],
      image: clicksyImg,
      github: "https://github.com/dibyo20/Clicksy.git",
      live: "https://clicksy.dibyo.tech/",
    },
    {
      title: "Solvit Counselling",
      desc: "A full-stack counselling platform for discovering professional counsellors, featuring secure cookie-based JWT authentication and specialization-based filtering.",
      tech: ["React", "Node.js", "Express", "MongoDB", "SCSS"],
      image: solvitImg,
      github: "https://github.com/dibyo20/Solvit-Counselling.git",
      live: "https://solvit.dibyo.tech/",
    },
  ];
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projectData.map((elem, index) => (
          <ProjectCard key={index} project={elem} index={index} />
        ))}
      </div>

      <div className="projects-more-btn-container">
        <Link to="/projects" className="projects-more-btn">
          Check more of my projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px", verticalAlign: "middle" }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Projects;

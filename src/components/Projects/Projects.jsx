import React from "react";
import "../../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import nexgearImg from "../../Assests/nexgear.png";
import predictoImg from "../../Assests/predicto.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      title: "NexGear",
      desc: "Enterprise mechanical hardware e-commerce platform featuring an 8-stage MongoDB aggregation pipeline, variant-aware SKU cart with atomic updates, and Razorpay HMAC-SHA256 payments.",
      tech: ["React 19", "Redux Toolkit", "Node.js", "Express 5", "MongoDB", "Redis", "Razorpay"],
      image: nexgearImg,
      github: "https://github.com/dibyo20/Nexgear",
      live: "https://nexgear.dibyo.tech/",
    },
    {
      title: "Predicto",
      desc: "AI-powered mood-based music platform that classifies real-time facial expressions on-device via Google MediaPipe and streams a curated emotional soundscape via ImageKit CDN.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redis", "MediaPipe", "ImageKit"],
      image: predictoImg,
      github: "https://github.com/dibyo20/Predicto",
      live: "https://predicto.dibyo.tech/",
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

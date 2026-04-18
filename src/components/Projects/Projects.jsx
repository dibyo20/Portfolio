import React from "react";
import "../../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import weatherApp from "../../Assests/weatherApp.png";
import instaImg from "../../Assests/instaUI.png";
import simonImg from "../../Assests/simonImg.png";
import dashboardImg from "../../Assests/dashboard.png";
import MoviesearchImg from "../../Assests/MovieSearch.png";
import gencardImg from "../../Assests/gencard.png";

const Projects = () => {
  const projectData = [
    {
      title: "CineLens",
      desc: "Movies Search App with Year and Type Filter.",
      tech: ["React", "HTML", "CSS", "JS"],
      image: MoviesearchImg,
      github:
        "https://github.com/dibyo20/FullStack-in-Dept/tree/main/Project-2",
      live: "#",
    },
    {
      title: "Interactive Dashboard",
      desc: "Basic Theme Changer, Form Validator and Local Chat UI.",
      tech: ["React", "HTML", "CSS", "JS"],
      image: dashboardImg,
      github: "https://github.com/dibyo20/Frontend-Interactive-Dashboard",
      live: "#",
    },
    {
      title: "Instagram UI",
      desc: "Instagram Home Page with Like Feature.",
      tech: ["HTML", "CSS", "JS"],
      image: instaImg,
      github:
        "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/Insta-UI",
      live: "#",
    },
    {
      title: "Weather App",
      desc: "Real Time weather app.",
      tech: ["React", "HTML", "CSS", "JS"],
      image: weatherApp,
      github: "https://github.com/dibyo20/weather-app",
      live: "https://weather-app-topaz-tau-90.vercel.app/",
    },
    {
      title: "Card Generator",
      desc: "Generate your favourite Card.",
      tech: ["React", "HTML", "CSS", "JS"],
      image: gencardImg,
      github:
        "http://github.com/dibyo20/FullStack-in-Dept/tree/main/Day15/Frontend",
      live: "#",
    },
    {
      title: "Simon's Game",
      desc: "Memory pattern game",
      tech: ["HTML", "CSS", "JS"],
      image: simonImg,
      github:
        "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/Simon's%20Game",
      live: "#",
    },
  ];
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projectData.map((elem, index) => (
          <ProjectCard key={index} project={elem} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

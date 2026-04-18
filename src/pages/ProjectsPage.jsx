import React from "react";
import ProjectCard from "../components/Projects/ProjectCard.jsx";
import "../styles/ProjectPage.css";
import weatherApp from "../Assests/weatherApp.png";
import qrCodeGenImg from "../Assests/qrCodeGen.png";
import passWordGenImg from "../Assests/passWordGen.png";
import instaImg from "../Assests/instaUI.png";
import simonImg from "../Assests/simonImg.png";
import spotifyImg from "../Assests/spotifyImg.png";
import dashboardImg from "../Assests/dashboard.png";
import MoviesearchImg from "../Assests/MovieSearch.png";
import gencardImg from "../Assests/gencard.png";

const projects = [
  {
    title: "CineLens",
    desc: "Movies Search App with Year and Type Filter.",
    tech: ["React", "HTML", "CSS", "JS"],
    image: MoviesearchImg,
    github: "https://github.com/dibyo20/FullStack-in-Dept/tree/main/Project-2",
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
    title: "Interactive Dashboard",
    desc: "Basic Theme Changer, Form Validator and Local Chat UI.",
    tech: ["React", "HTML", "CSS", "JS"],
    image: dashboardImg,
    github: "https://github.com/dibyo20/Frontend-Interactive-Dashboard",
    live: "#",
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
    title: "Instagram UI",
    desc: "Instagram Home Page with Like Feature.",
    tech: ["HTML", "CSS", "JS"],
    image: instaImg,
    github:
      "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/Insta-UI",
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
  {
    title: "PassWord Generator",
    desc: "Simple and Secure Password Generator.",
    tech: ["HTML", "CSS", "JS"],
    image: passWordGenImg,
    github:
      "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/Password%20Generator",
    live: "#",
  },
  {
    title: "QR Code Generator",
    desc: "Generates QR Code for any type of URL.",
    tech: ["CSS", "HTML", "JS"],
    image: qrCodeGenImg,
    github:
      "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/QR%20Code%20Generator",
    live: "#",
  },
  {
    title: "Spotify UI",
    desc: "Spotify Home Page",
    tech: ["CSS", "HTML", "JS"],
    image: spotifyImg,
    github:
      "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/Spotify%20UI",
    live: "#",
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

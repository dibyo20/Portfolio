import React from "react";
import ProjectCard from "../components/Projects/ProjectCard.jsx";
import "../styles/ProjectPage.css";
import weatherApp from "../Assests/weatherApp.png";
import MoviesearchImg from "../Assests/MovieSearch.png";
import clicksyImg from "../Assests/clicksy.png";
import solvitImg from "../Assests/solvit.png";
import expenseTrackerImg from "../Assests/expenseTracker.png";
import gencardImg from "../Assests/gencard.png";
import instaImg from "../Assests/instaUI.png";
import simonImg from "../Assests/simonImg.png";

const secondaryProjects = [
  {
    title: "CineLens",
    desc: "A sleek movie exploration application allowing users to search and discover films. Features advanced filtering options by year and type utilizing live API queries.",
    tech: ["React", "HTML", "CSS", "JS"],
    image: MoviesearchImg,
    github: "https://github.com/dibyo20/CineLens.git",
    live: "https://cinelens-dibyo.vercel.app/",
  },
  {
    title: "Expense Tracker",
    desc: "A budget management dashboard with Total Income, Expense, and Balance tracking. Includes search, category filtering, and real-time transaction logging.",
    tech: ["React", "HTML", "CSS", "JS"],
    image: expenseTrackerImg,
    github: "https://github.com/dibyo20/expense-tracker.git",
    live: "https://expensetrackerdibyo.vercel.app/",
  },
  {
    title: "Weather App",
    desc: "A real-time weather forecasting app. Fetches conditions, wind speed, humidity, and location-based updates with dynamic backgrounds matching current weather.",
    tech: ["React", "HTML", "CSS", "JS"],
    image: weatherApp,
    github: "https://github.com/dibyo20/weather-app",
    live: "https://weatherapp-dibyo.vercel.app/",
  },
  {
    title: "Card Generator",
    desc: "Interactive tool enabling users to customize visual cards. Configure color themes, text inputs, and dynamic templates with real-time visual preview.",
    tech: ["React", "HTML", "CSS", "JS"],
    image: gencardImg,
    github: "http://github.com/dibyo20/FullStack-in-Dept/tree/main/Day15/Frontend",
    live: "#",
  },
  {
    title: "Instagram UI",
    desc: "A responsive homepage clone of Instagram. Features feeds, stories, profile mockups, and interactive liking systems with smooth navigation patterns.",
    tech: ["HTML", "CSS", "JS"],
    image: instaImg,
    github: "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/Insta-UI",
    live: "#",
  },
  {
    title: "Simon's Game",
    desc: "An engaging pattern memory game inspired by the classic Simon device. Tracks and validates player sequences against random blink patterns.",
    tech: ["HTML", "CSS", "JS"],
    image: simonImg,
    github: "https://github.com/dibyo20/JavaScript-Basic-Projects/tree/main/Simon's%20Game",
    live: "#",
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <h2 className="projects-heading">My Projects</h2>
      <p className="projects-subheading">
        A collection of projects showcasing my journey in <strong className="highlight">Full Stack Development</strong>, <strong className="highlight">MERN Stack</strong> and <strong className="highlight">modern web</strong> technologies. Every project represents solving <strong className="highlight">real-world problems</strong> while continuously improving my engineering skills.
      </p>

      {/* Featured Major Projects */}
      <div className="major-projects-container">
        {/* Clicksy Major Project */}
        <div className="major-project">
          <div className="major-project-image-wrapper" onClick={() => window.open("https://clicksy.dibyo.tech/", "_blank")}>
            <img src={clicksyImg} alt="Clicksy" />
          </div>
          <div className="major-project-content">
            <h3 className="major-project-title">Clicksy</h3>
            <span className="major-project-tag">Full Stack Social Media Platform</span>
            <p className="major-project-desc">
              A modern social media platform built using the MERN Stack. It offers a seamless experience for creators to connect, share, and build high-octane digital communities with precision geometry and fluid interactions.
            </p>
            <h4 className="major-project-features-title">Key Features</h4>
            <div className="major-project-features">
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>JWT Authentication</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Dynamic Feed</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>User Profiles</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Private Accounts</span>
              </div>
            </div>
            <div className="major-project-tech">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">ImageKit</span>
            </div>
            <div className="major-project-buttons">
              <a href="https://clicksy.dibyo.tech/" target="_blank" rel="noopener noreferrer" className="btn-pill primary">
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a href="https://github.com/dibyo20/Clicksy" target="_blank" rel="noopener noreferrer" className="btn-pill secondary">
                GitHub &lt; &gt;
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* Solvit Major Project */}
        <div className="major-project reverse">
          <div className="major-project-image-wrapper" onClick={() => window.open("https://solvit.dibyo.tech/", "_blank")}>
            <img src={solvitImg} alt="Solvit" />
          </div>
          <div className="major-project-content">
            <h3 className="major-project-title">Solvit Counselling</h3>
            <span className="major-project-tag">Full Stack Counselling Platform</span>
            <p className="major-project-desc">
              Solvit Counselling is a full-stack web application designed for discovering professional counsellors, authenticating users, and browsing specialists by their area of expertise. It offers a secure and user-friendly experience for matching with the right support.
            </p>
            <h4 className="major-project-features-title">Key Features</h4>
            <div className="major-project-features">
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>JWT Authentication</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Counsellor Search & Filtering</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Appointment Booking UI</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Responsive UI</span>
              </div>
            </div>
            <div className="major-project-tech">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">SCSS</span>
            </div>
            <div className="major-project-buttons">
              <a href="https://solvit.dibyo.tech/" target="_blank" rel="noopener noreferrer" className="btn-pill primary">
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a href="https://github.com/dibyo20/Solvit-Counselling" target="_blank" rel="noopener noreferrer" className="btn-pill secondary">
                GitHub &lt; &gt;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* More of My Projects */}
      <div className="more-projects-section">
        <h3 className="more-projects-heading">More of My Projects</h3>
        <p className="more-projects-subheading">
          Additional projects built while exploring <strong className="highlight">frontend development</strong>, <strong className="highlight">APIs</strong>, <strong className="highlight">JavaScript</strong>, <strong className="highlight">UI design</strong>, and <strong className="highlight">modern web</strong> technologies.
        </p>

        <div className="projects-grid">
          {secondaryProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

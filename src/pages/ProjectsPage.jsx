import React from "react";
import ProjectCard from "../components/Projects/ProjectCard.jsx";
import "../styles/ProjectPage.css";
import nexgearImg from "../Assests/nexgear.png";
import predictoImg from "../Assests/predicto.png";
import clicksyImg from "../Assests/clicksy.png";
import solvitImg from "../Assests/solvit.png";
import expenseTrackerImg from "../Assests/expenseTracker.png";
import weatherApp from "../Assests/weatherApp.png";

const secondaryProjects = [
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
];

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <h2 className="projects-heading">My Projects</h2>
      <p className="projects-subheading">
        A collection of projects showcasing my journey in <strong className="highlight">Full Stack Development</strong>, <strong className="highlight">MERN Stack</strong>, and <strong className="highlight">modern web</strong> technologies. Every project represents solving <strong className="highlight">real-world problems</strong> with SDE design patterns and production-grade engineering.
      </p>

      <div className="major-projects-container">
        {/* 1. NexGear (Standard: Image Left, Content Right) */}
        <div className="major-project">
          <div
            className="major-project-image-wrapper"
            onClick={() => window.open("https://nexgear.dibyo.tech/", "_blank")}
          >
            <img src={nexgearImg} alt="NexGear" />
          </div>
          <div className="major-project-content">
            <h3 className="major-project-title">NexGear</h3>
            <span className="major-project-tag">Enterprise Mechanical Hardware E-Commerce</span>
            <p className="major-project-desc">
              Enterprise-grade full-stack e-commerce platform purpose-built for specialized mechanical hardware and studio equipment. Built with SDE-level patterns, it features an 8-stage MongoDB aggregation pipeline for in-database cart math, variant-aware SKU inventory validation, and cryptographic Razorpay payment verification.
            </p>
            <h4 className="major-project-features-title">Key Engineering Highlights</h4>
            <div className="major-project-features">
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>8-Stage MongoDB Aggregations</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Variant-Aware SKU Engine</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Razorpay HMAC-SHA256 Payments</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Google OAuth & Redis Token Blacklist</span>
              </div>
            </div>
            <div className="major-project-tech">
              <span className="tech-badge">React 19</span>
              <span className="tech-badge">Redux Toolkit</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express 5</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Redis</span>
              <span className="tech-badge">Razorpay</span>
              <span className="tech-badge">ImageKit</span>
              <span className="tech-badge">SCSS</span>
            </div>
            <div className="major-project-buttons">
              <a href="https://nexgear.dibyo.tech/" target="_blank" rel="noopener noreferrer" className="btn-pill primary">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a href="https://github.com/dibyo20/Nexgear" target="_blank" rel="noopener noreferrer" className="btn-pill secondary">
                <span>GitHub</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* 2. Predicto (Reverse: Content Left, Image Right) */}
        <div className="major-project reverse">
          <div
            className="major-project-image-wrapper"
            onClick={() => window.open("https://predicto.dibyo.tech/", "_blank")}
          >
            <img src={predictoImg} alt="Predicto" className="predicto-project-img" />
          </div>
          <div className="major-project-content">
            <h3 className="major-project-title">Predicto</h3>
            <span className="major-project-tag">AI-Powered Mood-Based Music Platform</span>
            <p className="major-project-desc">
              A state-of-the-art web application that harmonizes emotions through real-time facial expression tracking. Utilizing Google MediaPipe on-device machine learning directly in the browser, Predicto classifies emotional states without sending camera frames to servers and streams curated mood-matching soundscapes via ImageKit CDN.
            </p>
            <h4 className="major-project-features-title">Key Engineering Highlights</h4>
            <div className="major-project-features">
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>On-Device MediaPipe Landmarking (WASM)</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>52-Blendshape Emotion Classifier</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Redis-Backed Session Blacklist</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Automated ID3 Metadata Ingestion</span>
              </div>
            </div>
            <div className="major-project-tech">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Redis</span>
              <span className="tech-badge">MediaPipe</span>
              <span className="tech-badge">ImageKit CDN</span>
              <span className="tech-badge">SCSS</span>
            </div>
            <div className="major-project-buttons">
              <a href="https://predicto.dibyo.tech/" target="_blank" rel="noopener noreferrer" className="btn-pill primary">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a href="https://github.com/dibyo20/Predicto" target="_blank" rel="noopener noreferrer" className="btn-pill secondary">
                <span>GitHub</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* 3. Clicksy (Standard: Image Left, Content Right) */}
        <div className="major-project">
          <div
            className="major-project-image-wrapper"
            onClick={() => window.open("https://clicksy.dibyo.tech/", "_blank")}
          >
            <img src={clicksyImg} alt="Clicksy" />
          </div>
          <div className="major-project-content">
            <h3 className="major-project-title">Clicksy</h3>
            <span className="major-project-tag">Full Stack Social Media Platform</span>
            <p className="major-project-desc">
              A modern social media platform built using the MERN Stack. It offers a seamless experience for creators to connect, share, and build high-octane digital communities with 20+ REST API endpoints, image uploading via ImageKit, and interactive feeds.
            </p>
            <h4 className="major-project-features-title">Key Engineering Highlights</h4>
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
                <span>Dynamic Feed & Interactions</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>User Profiles & Private Accounts</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>ImageKit Cloud Storage</span>
              </div>
            </div>
            <div className="major-project-tech">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">ImageKit</span>
              <span className="tech-badge">SCSS</span>
            </div>
            <div className="major-project-buttons">
              <a href="https://clicksy.dibyo.tech/" target="_blank" rel="noopener noreferrer" className="btn-pill primary">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a href="https://github.com/dibyo20/Clicksy" target="_blank" rel="noopener noreferrer" className="btn-pill secondary">
                <span>GitHub</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* 4. Solvit Counselling (Reverse: Content Left, Image Right) */}
        <div className="major-project reverse">
          <div
            className="major-project-image-wrapper"
            onClick={() => window.open("https://solvit.dibyo.tech/", "_blank")}
          >
            <img src={solvitImg} alt="Solvit Counselling" />
          </div>
          <div className="major-project-content">
            <h3 className="major-project-title">Solvit Counselling</h3>
            <span className="major-project-tag">Full Stack Counselling Platform (Prototype of Solvit)</span>
            <p className="major-project-desc">
              Full-stack web application designed for discovering professional counsellors, authenticating users, and exploring specialists by their domain of expertise. Developed as an early proof-of-concept prototype featuring appointment booking workflows and secure session management.
            </p>
            <h4 className="major-project-features-title">Key Engineering Highlights</h4>
            <div className="major-project-features">
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Cookie-Based JWT Sessions</span>
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
                <span>Appointment Booking Flow</span>
              </div>
              <div className="major-project-feature-item">
                <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span>Mobile-First SCSS Components</span>
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
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a href="https://github.com/dibyo20/Solvit-Counselling" target="_blank" rel="noopener noreferrer" className="btn-pill secondary">
                <span>GitHub</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="more-projects-section">
        <h3 className="more-projects-heading">More of My Projects</h3>
        <p className="more-projects-subheading">
          Additional utility projects built while exploring <strong className="highlight">frontend state</strong>, <strong className="highlight">REST APIs</strong>, and <strong className="highlight">modern web</strong> technologies.
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

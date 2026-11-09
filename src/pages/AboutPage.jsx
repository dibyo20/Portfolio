import React, { useRef, useState } from "react";
import "../styles/AboutPage.css";
import profileImg from "../Assests/myImg.png";
import { Terminal, DraftingCompass, Brain } from "lucide-react";

// Glassmorphic Card with Smooth Glare and Hover Scale
const GlassCard = ({ children, className = "" }) => {
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
    <div
      ref={cardRef}
      className={`about-card ${className}`}
      style={glareStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-glare"></div>
      <div className="card-inner-content">
        {children}
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <section className="about-page">
      <h1 className="about-heading">About Me</h1>

      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="profile-image-container">
            <img src={profileImg} alt="About me" />
          </div>
        </div>

        <div className="about-text">
          <p>
            I’m a <strong className="highlight">Full-Stack MERN Developer</strong> and <strong className="highlight">Web Development Intern</strong> at <strong className="highlight">Solvit</strong>, passionate about architecting scalable, secure, and production-ready web platforms. From engineering resilient Express/MongoDB backend APIs handling <strong className="highlight">200–250 concurrent users</strong> to crafting responsive, component-driven UIs in React 19, I focus on building end-to-end solutions with production-grade reliability, secure authentication, Razorpay payments, and distributed Redis caching.
          </p>

          <p>
            Alongside development, I continuously push my problem-solving capabilities through <strong className="highlight">Data Structures & Algorithms</strong> in Java, having solved <strong className="highlight">500+ LeetCode problems</strong> with a <strong className="highlight">245+ day coding streak</strong>. My practice spans core algorithmic principles including Graphs, Dynamic Programming, Trees, Binary Search, Sliding Window, and Two Pointers.
          </p>

          <p>
            Currently pursuing my <strong className="highlight">B.Tech in Computer Science and Engineering</strong> at Netaji Subhash Engineering College, my goal is to combine robust full-stack engineering with <strong className="highlight">System Design</strong> and <strong className="highlight">Generative AI</strong> to grow into a versatile <strong className="highlight">Software Development Engineer (SDE)</strong> and <strong className="highlight">AI Engineer</strong>.
          </p>
        </div>
      </div>

      {/* Current Focus Section */}
      <div className="about-section focus-section">
        <h2 className="about-section-title focus-title">
          <span className="title-bar"></span>Current Focus
        </h2>
        <div className="about-grid current-focus-grid">
          <GlassCard className="focus-card">
            <div className="focus-icon-container">
              <Terminal size={20} strokeWidth={2} />
            </div>
            <h3>Backend Systems</h3>
            <p>
              Architecting scalable server-side logic using Node.js and Express with
              optimized database schemas.
            </p>
          </GlassCard>

          <GlassCard className="focus-card">
            <div className="focus-icon-container">
              <DraftingCompass size={20} strokeWidth={2} />
            </div>
            <h3>System Design</h3>
            <p>
              Exploring architectural patterns and performance optimization for
              high-traffic environments.
            </p>
          </GlassCard>

          <GlassCard className="focus-card">
            <div className="focus-icon-container">
              <Brain size={20} strokeWidth={2} />
            </div>
            <h3>Generative AI</h3>
            <p>
              Integrating Large Language Models and prompt engineering into
              traditional software workflows.
            </p>
          </GlassCard>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-section achievements-section">
        <h2 className="about-section-title achievements-title">
          <span className="title-bar"></span>Achievements
        </h2>
        <div className="about-grid achievements-grid">
          <GlassCard className="achievement-card">
            <div className="achievement-number">500+</div>
            <div className="achievement-label">DSA PROBLEMS SOLVED</div>
          </GlassCard>

          <GlassCard className="achievement-card">
            <div className="achievement-number">245+</div>
            <div className="achievement-label">LEETCODE STREAK (DAYS)</div>
          </GlassCard>

          <GlassCard className="achievement-card">
            <div className="achievement-number">15+</div>
            <div className="achievement-label">PROJECTS BUILT</div>
          </GlassCard>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="about-section tech-stack-section">
        <h2 className="about-section-title tech-stack-title">
          <span className="title-bar"></span>Technical Skills
        </h2>
        <div className="about-grid tech-stack-grid">
          <GlassCard className="tech-card">
            <div className="tech-category-title">FRONTEND</div>
            <div className="tech-badges-grid">
              <span className="tech-badge">React 19</span>
              <span className="tech-badge">Redux Toolkit</span>
              <span className="tech-badge">JavaScript (ES6+)</span>
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">TailwindCSS</span>
              <span className="tech-badge">SCSS</span>
              <span className="tech-badge">Framer Motion</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">Responsive Design</span>
              <span className="tech-badge">Component Architecture</span>
            </div>
          </GlassCard>

          <GlassCard className="tech-card">
            <div className="tech-category-title">BACKEND & APIS</div>
            <div className="tech-badges-grid">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js 5</span>
              <span className="tech-badge">REST APIs</span>
              <span className="tech-badge">JWT & Refresh Tokens</span>
              <span className="tech-badge">Google OAuth 2.0</span>
              <span className="tech-badge">Passport.js</span>
              <span className="tech-badge">Razorpay Payments</span>
              <span className="tech-badge">RBAC Access Control</span>
              <span className="tech-badge">DAO & MVC Patterns</span>
              <span className="tech-badge">express-validator</span>
              <span className="tech-badge">Idempotency Keys</span>
            </div>
          </GlassCard>

          <GlassCard className="tech-card">
            <div className="tech-category-title">DATABASE & CACHING</div>
            <div className="tech-badges-grid">
              <span className="tech-badge">MongoDB Atlas</span>
              <span className="tech-badge">Mongoose</span>
              <span className="tech-badge">Aggregation Pipelines</span>
              <span className="tech-badge">Compound Indexing</span>
              <span className="tech-badge">Schema Design</span>
              <span className="tech-badge">Redis Caching</span>
              <span className="tech-badge">Token Blacklisting</span>
              <span className="tech-badge">MySQL</span>
              <span className="tech-badge">Database Optimization</span>
            </div>
          </GlassCard>

          <GlassCard className="tech-card">
            <div className="tech-category-title">DEVOPS & TOOLS</div>
            <div className="tech-badges-grid">
              <span className="tech-badge">Hostinger VPS</span>
              <span className="tech-badge">Nginx</span>
              <span className="tech-badge">PM2 Clustering</span>
              <span className="tech-badge">Linux CLI</span>
              <span className="tech-badge">Git</span>
              <span className="tech-badge">GitHub</span>
              <span className="tech-badge">Postman</span>
              <span className="tech-badge">Axios</span>
              <span className="tech-badge">ImageKit CDN</span>
              <span className="tech-badge">VS Code</span>
              <span className="tech-badge">Vercel</span>
              <span className="tech-badge">Render</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

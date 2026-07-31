import React, { useRef, useState } from "react";
import "../styles/AboutPage.css";
import profileImg from "../Assests/myImg.png";

// Glassmorphic Card with 3D Tilt and Mouse Glare effect
const GlassCard = ({ children, className = "", maxTilt = 8, scale = 1.02 }) => {
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

    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
    });

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

    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
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
    <div
      ref={cardRef}
      className={`about-card ${className}`}
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
            I’m a <strong className="highlight">Full-Stack MERN Developer</strong> passionate about building scalable, secure, and user-centric web applications that solve real-world problems. I enjoy developing end-to-end solutions—from crafting responsive user interfaces to engineering robust backend systems, designing efficient MongoDB schemas, and building <strong className="highlight">30+ RESTful API endpoints</strong> across my projects with features such as authentication, authorization, media integration, and CRUD operations. Alongside development, I continuously strengthen my problem-solving skills through <strong className="highlight">Data Structures & Algorithms</strong>, having solved <strong className="highlight">300+ LeetCode problems</strong> in Java with a <strong className="highlight">140+ day coding streak</strong>, covering core interview topics including Arrays, Strings, Trees, Graphs, Dynamic Programming, and Binary Search.
          </p>

          <p>
            Currently pursuing a <strong className="highlight">B.Tech</strong> in <strong className="highlight">Computer Science and Engineering</strong>, I continuously expand my technical expertise by building production-ready projects and exploring modern software engineering practices. I believe in learning by building, constantly challenging myself through real-world applications and hands-on development.
          </p>

          <p>
            My goal is to combine strong full-stack development with <strong className="highlight">System Design</strong> and <strong className="highlight">Generative AI</strong> to grow into an <strong className="highlight">AI Engineer</strong>. I aspire to build intelligent, scalable software that leverages modern AI technologies to solve meaningful real-world problems and create impactful digital experiences.
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
              <i className="fas fa-terminal"></i>
            </div>
            <h3>Backend Systems</h3>
            <p>
              Architecting scalable server-side logic using Node.js and Express with
              optimized database schemas.
            </p>
          </GlassCard>

          <GlassCard className="focus-card">
            <div className="focus-icon-container">
              <i className="fas fa-drafting-compass"></i>
            </div>
            <h3>System Design</h3>
            <p>
              Exploring architectural patterns and performance optimization for
              high-traffic environments.
            </p>
          </GlassCard>

          <GlassCard className="focus-card">
            <div className="focus-icon-container">
              <i className="fas fa-brain"></i>
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
            <div className="achievement-number">300+</div>
            <div className="achievement-label">DSA PROBLEMS</div>
          </GlassCard>

          <GlassCard className="achievement-card">
            <div className="achievement-number">140+</div>
            <div className="achievement-label">LEETCODE STREAK</div>
          </GlassCard>

          <GlassCard className="achievement-card">
            <div className="achievement-number">10+</div>
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
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Tailwind</span>
              <span className="tech-badge">Bootstrap</span>
              <span className="tech-badge">Framer Motion</span>
              <span className="tech-badge">SCSS</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">Responsive Designs</span>
              <span className="tech-badge">React Component Architecture</span>
            </div>
          </GlassCard>

          <GlassCard className="tech-card">
            <div className="tech-category-title">BACKEND</div>
            <div className="tech-badges-grid">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Mongoose</span>
              <span className="tech-badge">MySQL</span>
              <span className="tech-badge">REST APIs Development</span>
              <span className="tech-badge">JWT Authentication</span>
              <span className="tech-badge">MVC Architecture</span>
              <span className="tech-badge">CRUD Operations</span>
              <span className="tech-badge">Schema Design</span>
              <span className="tech-badge">Redis</span>
              <span className="tech-badge">Database Optimization</span>
            </div>
          </GlassCard>

          <GlassCard className="tech-card">
            <div className="tech-category-title">TOOLS</div>
            <div className="tech-badges-grid">
              <span className="tech-badge">Git</span>
              <span className="tech-badge">GitHub</span>
              <span className="tech-badge">Postman</span>
              <span className="tech-badge">Axios</span>
              <span className="tech-badge">VS Code</span>
              <span className="tech-badge">Linux CLI</span>
            </div>
          </GlassCard>

          <GlassCard className="tech-card">
            <div className="tech-category-title">LEARNING</div>
            <div className="tech-badges-grid">
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">System Design</span>
              <span className="tech-badge">VPS Deployment</span>
              <span className="tech-badge">LangChain</span>
              <span className="tech-badge">LangGraph</span>
              <span className="tech-badge">LLM Integration</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

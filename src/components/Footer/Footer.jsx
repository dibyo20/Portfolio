import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  const contactRef = useRef(null);
  const [glareStyle, setGlareStyle] = useState({});

  const handleLogoClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    if (!contactRef.current) return;
    const rect = contactRef.current.getBoundingClientRect();
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
    <footer className="footer">
      <div
        ref={contactRef}
        className="contact-box"
        style={glareStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="contact-glare"></div>

        <h2 className="footer-title">Let's Work Together</h2>

        <p className="footer-subtext">
          Feel free to reach out for collaboration or just a friendly hello!
        </p>

        <div className="footer-buttons">
          <a
            href="mailto:dibyobanerjee20@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Dibyo%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
            className="btn contact-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            E-mail
          </a>
          <a
            href="https://drive.google.com/file/d/1_8ahgTMBAa9cw8xjUIg4WFZU1LF5UyhD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn resume-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            Resume
          </a>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <Link to="/" className="db" onClick={handleLogoClick}>
            <div className="db-logo">DB</div>
          </Link>
        </div>

        <div className="footer-copyright">
          © 2026 Dibyo's Portfolio. Built with precision.
        </div>

        <div className="footer-links">
          <a href="https://linkedin.com/in/dibyo-banerjee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/dibyo20" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/dibyo20/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Let's Work Together</h2>

      <p className="footer-subtext">
        Feel free to reach out for collaboration or just a friendly hello!
      </p>

      <div className="footer-buttons">
        <a
          href="mailto:dibyobanerjee20@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Dibyo%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
          className="btn contact-btn"
        >
          E-mail
        </a>
        <a
          href="https://drive.google.com/file/d/1aqEVkf8Y0tCX4ISiLoL0YFmXFlNW_OoL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn resume-btn"
        >
          Resume
        </a>
      </div>

      <div className="footer-line"></div>

      <div className="footer-links">
        <a href="https://linkedin.com/in/dibyo-banerjee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/dibyo20" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://leetcode.com/u/dibyo20/" target="_blank" rel="noopener noreferrer">LeetCode</a>
      </div>
    </footer>
  );
};

export default Footer;

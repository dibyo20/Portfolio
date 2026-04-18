import React from "react";
import "../../styles/Hero.css";
import profileImg from "../../Assests/myImg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-content">
      <img src={profileImg} alt="img" />
      <h1>
        Hi, I'm Dibyo Banerjee <br />
        Full Stack Software Developer
      </h1>
      <p>Transforming ideas into real-world web products</p>

      <div className="hero-actions">
        <Link to="/projects" className="hero-btn">
          Explore Work
        </Link>
        <Link to="/" className="hero-btn">
          Contact Me
        </Link>
        <div className="hero-icons">
          <a
            href="www.linkedin.com/in/dibyo-banerjee-6a2428270"
            className="hero-icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a href="https://github.com/dibyo20" className="hero-icon">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

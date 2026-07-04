import React, { useState, useEffect } from "react";
import "../../styles/Hero.css";
import profileImg from "../../Assests/myImg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isDone1, setIsDone1] = useState(false);
  const [isDone2, setIsDone2] = useState(false);

  const fullText1 = "Hi, I'm Dibyo Banerjee";
  const fullText2 = "Full Stack Software Developer";

  // First line typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText1(fullText1.slice(0, index + 1));
      index++;
      if (index >= fullText1.length) {
        clearInterval(interval);
        setIsDone1(true);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  // Second line typing animation
  useEffect(() => {
    if (isDone1) {
      let index = 0;
      const interval = setInterval(() => {
        setText2(fullText2.slice(0, index + 1));
        index++;
        if (index >= fullText2.length) {
          clearInterval(interval);
          setIsDone2(true);
        }
      }, 70);
      return () => clearInterval(interval);
    }
  }, [isDone1]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-content">
      <img src={profileImg} alt="Dibyo Banerjee" className="hero-profile-img" />
      <h1>
        <span className="typed-text-primary">{text1}</span>
        <span className={`typing-cursor ${isDone1 ? "hide" : ""}`}>|</span>
        <br />
        <span className="typed-text-secondary">{text2}</span>
        <span className={`typing-cursor ${!isDone1 || isDone2 ? "hide" : ""}`}>|</span>
      </h1>
      <p className={`hero-description ${isDone2 ? "reveal" : ""}`}>
        Transforming ideas into real-world web products
      </p>

      <div className={`hero-actions-container ${isDone2 ? "reveal" : ""}`}>
        <Link to="/projects" className="hero-btn">
          Explore Work
        </Link>
        <a href="#contact" onClick={handleContactClick} className="hero-btn">
          Contact Me
        </a>
        <div className="hero-icons">
          <a
            href="https://linkedin.com/in/dibyo-banerjee-6a2428270"
            className="hero-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/dibyo20"
            className="hero-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

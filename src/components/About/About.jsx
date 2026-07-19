import React from "react";
import "../../styles/About.css"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a <strong className="highlight">Full-Stack MERN Developer</strong> and <strong className="highlight">B.Tech Computer Science</strong> student who enjoys building scalable, secure, and user-centric web applications. Passionate about solving real-world problems through technology, I continuously strengthen my expertise in <strong className="highlight">Data Structures & Algorithms</strong>, <strong className="highlight">System Design</strong>, and <strong className="highlight">Generative AI</strong> while building production-ready software.
        </p>
        <Link to="/about" className="know-more">Know more</Link>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "../../styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a <strong className="highlight">Full-Stack MERN Developer</strong> and <strong className="highlight">Web Development Intern</strong> at <strong className="highlight">Solvit</strong> who builds scalable, secure, and user-centric web applications. Alongside shipping production software, I continuously strengthen my problem-solving skills with <strong className="highlight">500+ LeetCode problems solved</strong> in Java, while exploring <strong className="highlight">System Design</strong>, <strong className="highlight">Cloud Architectures</strong>, and <strong className="highlight">AI Integration</strong>.
        </p>
        <Link to="/about" className="know-more">Know more</Link>
      </div>
    </div>
  );
};

export default About;

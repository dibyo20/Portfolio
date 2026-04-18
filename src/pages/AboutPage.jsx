import React from "react";
import "../styles/AboutPage.css";
import profileImg from "../Assests/myImg.png";

const AboutPage = () => {
  return (
    <section className="about-page">
      <h1 className="about-heading">About Me</h1>

      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="About me" />
        </div>

        <div className="about-text">
          <p>
            I am a B.Tech Computer Science student passionate about building
            modern web applications and solving real-world problems through
            technology. Currently, I am focused on mastering the MERN stack and
            developing industry-ready projects.
          </p>

          <p>
            I enjoy creating clean, minimal user interfaces with a strong focus
            on user experience. In the near future, I aim to transition into AI
            engineering by combining full-stack development with intelligent
            systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

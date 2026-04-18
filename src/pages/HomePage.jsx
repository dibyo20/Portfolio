import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;

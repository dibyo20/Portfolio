import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Skills from "../components/Skills/Skills.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </>
  );
};

export default HomePage;

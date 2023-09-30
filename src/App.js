import "./App.css";
import React, { useState } from "react";
import "animate.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import UpwardArrow from "./components/UpwardArrow";
import ThankYou from "./components/ThankYou";

function App() {
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);

  const handleContactFormSubmit = () => {
    setIsContactFormSubmitted(true);
  };

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      {isContactFormSubmitted ? (
        <ThankYou />
      ) : (
        <Contact onFormSubmit={handleContactFormSubmit} />
      )}
      <UpwardArrow />
    </div>
  );
}

export default App;

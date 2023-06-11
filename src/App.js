import "./App.css";
import React from "react";
import "animate.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

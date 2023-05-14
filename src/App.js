import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;

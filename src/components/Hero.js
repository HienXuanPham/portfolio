import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* <img /> */}
      <div className="bio animate__animated animate__shakeX">
        <h1 className="bio-title">Hi, my name is Xuan Hien Pham</h1>
        <p className="bio-subtitle">I am a Software Developer</p>
      </div>
    </section>
  );
};

export default Hero;

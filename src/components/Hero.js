import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* <img /> */}
      <div className="bio">
        <h1 className="bio-title">
          <span>👋</span>
          {" Hi, my name is Xuan Hien Pham"}
        </h1>
        <p className="bio-subtitle">I am a Software Developer</p>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "../styles/Hero.css";
import womenInTech from "../images/7450220.png";

const Hero = () => {
  return (
    <section className="hero viewport" id="home">
      {/* Image by "https://www.freepik.com/free-psd/3d-illustration-female-graphic-designer-character-working-laptop_29013797.htm#from_view=detail_serie" */}
      <img src={womenInTech} alt="women in tech" className="hero-img" />
      <div className="bio">
        <h1 className="bio-title">
          <span className="waving">👋</span>
          {" Hi, my name is Xuan Hien Pham"}
        </h1>
        <p className="bio-subtitle">I am a Software Developer</p>
      </div>
    </section>
  );
};

export default Hero;

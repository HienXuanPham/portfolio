import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section class="hero" id="home">
      {/* <img /> */}
      <div class="bio animate__animated animate__shakeX">
        <h1 class="bio-title">Hi, my name is Xuan Hien Pham</h1>
        <p class="bio-subtitle">I am a Software Developer</p>
      </div>
    </section>
  );
};

export default Hero;

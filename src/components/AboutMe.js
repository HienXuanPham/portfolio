import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me viewport" id="about-me">
      <div className="layout">
        <h2>About Me</h2>
        <p>
          I studied at Ada Developers Academy and earned an Associate in Science
          degree in Computer Science from LaGuardia Community College. I focus
          on <strong>Full-stack</strong> development.
        </p>
        <p>
          During my internship at Tyler Technologies, I have gained in-depth
          knowledge in front-end development. One of my accomplishments was the
          implementation of a component that significantly enhanced the user
          experience by providing suggestion and auto-completion. In addition, I
          have hands-on experience writing integration tests using test
          framework built on RSpec and Capybara.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

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
        <div className="show-credentials">
          <img
            className="diploma"
            src="https://img.icons8.com/nolan/64/diploma.png"
            alt="diploma"
          />
          <a
            href="https://certificate.adadevelopersacademy.org/5f1b3f33-01f4-424d-941a-acf20c2694c6#gs.5tevmq"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            <button className="button-style">Credential</button>
          </a>
          <a
            href="https://www.parchment.com/u/award/a77a80bd72ecec752ffd105017dd2575"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            <button className="button-style">Digital diploma</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

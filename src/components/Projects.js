import React from "react";
import "../styles/Projects.css";
import journal from "../images/journal.png";

const Projects = () => {
  return (
    <section className="viewport" id="projects">
      <div className="projects-container layout">
        <h2 className="projects">Projects</h2>
        <div className="row">
          <div className="grid-item">
            <div className="project-wrapper">
              <h3 className="project-wrapper-title">Journal</h3>
              <p className="project-wrapper-text">
                Journal is a web application that allows users to write and
                manage their personal diary. It provides a platform for users to
                document their thoughts, experiences, and reflections in a
                secure and private manner.
              </p>
              <a
                href="https://github.com/HienXuanPham/journal-back-end"
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                <button className="button-style">Back-end</button>
              </a>
              <a
                href="https://github.com/HienXuanPham/journal-front-end"
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                <button className="button-style">Front-end</button>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <img src={journal} alt="journal-web" className="project-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "../styles/Skills.css";
import pythonIcon from "../images/icons8-python.svg";
import jsIcon from "../images/icons8-js.svg";
import javaIcon from "../images/icons8-java.svg";
import cppIcon from "../images/icons8-c.svg";
import html5Icon from "../images/icons8-html.svg";
import css3Icon from "../images/icons8-css3.svg";
import postgresqlIcon from "../images/icons8-postgresql.svg";
import reactIcon from "../images/icons8-react-native.svg";
import gitIcon from "../images/icons8-git.svg";
import githubIcon from "../images/icons8-github.svg";
import herokuIcon from "../images/icons8-heroku.svg";
import awsIcon from "../images/icons8-amazon-web-services.svg";
import flaskIcon from "../images/icons8-flask.svg";

const Skills = () => {
  return (
    <section className="skills viewport" id="skills">
      <div className="layout">
        <h2 className="skill-header">Skills</h2>
        <div className="skills-wrapper">
          <div className="first-set">
            <img src={pythonIcon} alt="" className="icon icon-card" />
            <img src={jsIcon} alt="" className="icon icon-card" />
            <img src={javaIcon} alt="" className="icon icon-card" />
            <img src={cppIcon} alt="" className="icon icon-card" />
          </div>

          <div className="second-set">
            <img src={html5Icon} alt="" className="icon icon-card" />
            <img src={css3Icon} alt="" className="icon icon-card" />
            <img src={postgresqlIcon} alt="" className="icon icon-card" />
            <img src={reactIcon} alt="" className="icon icon-card" />
          </div>

          <div className="third-set">
            <img src={gitIcon} alt="" className="icon icon-card" />
            <img src={githubIcon} alt="" className="icon icon-card" />
            <img src={herokuIcon} alt="" className="icon icon-card" />
            {/* <img src={awsIcon} alt="" className="icon icon-card" /> */}
            <img src={flaskIcon} alt="" className="icon icon-card" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

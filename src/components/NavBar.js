import React from "react";
import "../styles/NavBar.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <a href="#home" className="nav-link">
          Xuan Hien Pham
        </a>
      </h1>
      <ul className="navigation">
        <li>
          <a href="#about" className="nav-link">
            About me
          </a>
        </li>
        <li>
          <a href="#skills" class="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" class="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" class="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        <ion-icon className="bars" name="menu-outline"></ion-icon>
      </button>
    </nav>
  );
};

export default NavBar;

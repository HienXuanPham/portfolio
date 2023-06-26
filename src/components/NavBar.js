import React, { useRef } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const navRef = useRef();

  const showBurgerNavBar = () => {
    navRef.current.classList.toggle("show");
  };

  const hideBurgerNavBar = () => {
    navRef.current.classList.remove("show");
  };

  return (
    <nav>
      <h1>
        <a href="#home" className="nav-link">
          Xuan Hien Pham
        </a>
      </h1>
      <ul className="navigation" ref={navRef}>
        <li>
          <a href="#about-me" className="nav-link" onClick={hideBurgerNavBar}>
            About me
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link" onClick={hideBurgerNavBar}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link" onClick={hideBurgerNavBar}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link" onClick={hideBurgerNavBar}>
            Contact
          </a>
        </li>
      </ul>
      <button
        className="burger-menu"
        id="burger-menu"
        onClick={showBurgerNavBar}
      >
        ☰
      </button>
    </nav>
  );
};

export default NavBar;

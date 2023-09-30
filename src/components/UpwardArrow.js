import React from "react";
import "../styles/UpwardArrow.css";

const UpwardArrow = () => {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className="scroll-up upward-arrow" id="scroll-up" onClick={onClick}>
      ⇧
    </button>
  );
};

export default UpwardArrow;

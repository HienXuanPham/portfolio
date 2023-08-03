import React from "react";
import "../styles/ThankYou.css";

const ThankYou = () => {
  const handleCloseButton = () => {
    window.location.reload();
  };

  return (
    <section id="thank-you">
      <dialog open id="thank-you-modal">
        <p>Thank you for contacting me!</p>
        <div id="close-btn">
          <button className="close-btn" onClick={handleCloseButton}>
            Close
          </button>
        </div>
      </dialog>
    </section>
  );
};

export default ThankYou;

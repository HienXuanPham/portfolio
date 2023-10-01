import React from "react";
import "../styles/Contact.css";
import { useForm } from "@formspree/react";
import githubIcon from "../images/icons8-github.svg";
import linkedinIcon from "../images/icons8-linkedin.svg";

const Contact = ({ onFormSubmit }) => {
  const [state, handleSubmit] = useForm("mwkdpbdj");

  if (state.succeeded) {
    onFormSubmit();
  }

  return (
    <section className="contact viewport" id="contact">
      <div className="layout">
        <h2>Get In Touch With Me</h2>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message..."
                name="message"
                className="input-field"
                required
              />
            </div>
            <div id="submit-btn">
              <button
                type="submit"
                className="submit-btn"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="socials">
          <a
            href="https://github.com/HienXuanPham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/xuan-hien-pham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

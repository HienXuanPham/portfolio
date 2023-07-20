import React from "react";
import "../styles/Contact.css";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkdpbdj");

  if (state.succeeded) {
    window.location.reload();
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
      </div>
    </section>
  );
};

export default Contact;

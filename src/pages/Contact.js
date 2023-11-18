import React, { useRef, useEffect } from "react";
import fishes from "../assets/fishes.avif";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = () => {
    return emailjs.sendForm(
      "service_q6zvaew",
      "template_r9i2g1b",
      form.current,
      "3Ap7dzsLLSmzJxPpy"
    );
  };

  const handleButtonClick = () => {
    if (form.current.checkValidity()) {
      sendEmail()
        .then((result) => {
          swal("Good job!", "Your message has been sent!", "success");
          form.current.reset();
        })
        .catch((error) => {
          swal("Oops...", "Something went wrong.", "error");
        });
    } else {
      swal("Error", "Please fill out all fields.", "error");
    }
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${fishes})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form className="contactForm" method="POST" ref={form}>
          <label htmlFor="from_name">Full Name</label>
          <input
            name="from_name"
            placeholder="Enter full name..."
            type="text"
            required
          />
          <label htmlFor="from_email">Email</label>
          <input
            name="from_email"
            placeholder="Enter email..."
            type="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            className="cftxt"
          ></textarea>
          <button
            className="messageButton"
            type="button"
            onClick={handleButtonClick}
          >
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

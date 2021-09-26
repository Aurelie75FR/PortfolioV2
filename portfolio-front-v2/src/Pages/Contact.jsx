import React from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.SERVICE_ID},
         ${process.env.TEMPLATE_ID}`,
        e.target,
        ` ${process.env.USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact-page">
      <div className="form">
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-box">
            <label htmlFor="name">Name</label>
            <input
              className="nameInput"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>

          <div className="form-box">
            <label htmlFor="email">Email</label>
            <input
              className="emailInput"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="form-box">
            <label htmlFor="subject">Subject</label>
            <input
              className="subjectInput"
              type="text"
              name="subject"
              placeholder="Subject"
            />
          </div>

          <div className="form-box">
            <label htmlFor="message">Message</label>
            <textarea
              className="message-area"
              name="message"
              placeholder="Your message ..."
              rows="10"
              cols="40"
            />
          </div>

          <input type="submit" value="Send" className="form-button" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

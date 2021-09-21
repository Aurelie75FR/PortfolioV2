import React from "react";
import emailjs from "emailjs-com";

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
    <div>
      <h1>Contact Form</h1>
      <div className="form">
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            className="nameInput"
            type="text"
            name="name"
            placeholder="Name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="emailInput"
            type="email"
            name="email"
            placeholder="Email"
          />
          <label htmlFor="subject">Subject</label>
          <input
            className="subjectInput"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Your message ..."
            rows="10"
            cols="40"
          />
          <button type="submit"> Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

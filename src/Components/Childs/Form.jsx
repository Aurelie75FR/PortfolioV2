import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/Contact.css"

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
          "service_vo6m80m",
          "template_2xqe41b",
          form.current,
        "user_lQpxdbXovWfyhlJP6gXgT"
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
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-box">
        <label htmlFor="name">Name</label>
        <input
          className="nameInput"
          type="text"
          name="name"
          placeholder="Nom/Prénom"
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
          placeholder="Sujet"
        />
      </div>

      <div className="form-box">
        <label htmlFor="message">Message</label>
        <textarea
          className="message-area"
          name="message"
          placeholder="Message ..."
          rows="10"
          cols="40"
        />
      </div>
      <input type="submit" value="Envoyer" className="form-button" />
    </form>
  );
};

export default Form;

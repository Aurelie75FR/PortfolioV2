import React , {useRef} from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
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
  };
  return (
    <div className="contact-page" id="Contact">
      {/* <div className="shadow">
        <img src="/images/Aurelie.png" alt="Aurelie" className="circle" />
      </div> */}
      <h2 className="mail-header">Contactez-moi</h2>
      <div className="form">
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
      </div>
      <div className="resume">
        <a href="images/AurelieLopezVicente.pdf" className="mon-cv">Mon Curriculum Vitae</a>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/aurelie-lopez-vicente/" className="linkedin">
          <img src={"/images/logo/Linkedin.png"} alt="linkedin" style={{width : "30%", marginRight : "10px"}} />
        </a>
        <a href="https://github.com/Aurelie75FR" className="github-png">
          <img src={"/images/logo/Github.png"} alt="Github" style={{width : "30%", marginLeft : "10px"}} />
        </a>
      </div>
    </div>
  );
}

export default Contact;

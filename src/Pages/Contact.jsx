import React from "react";
import Form from "../Components/Childs/Form";
import Map from "../Components/Childs/Map";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Map />
      <div className="presentation-fin">
        <p>
          Aurelie Lopez-Vicente <br /> Paris, <b>France</b> <br /> Web
          Développeuse Full-Stack{" "}
        </p>
      </div>
      <h2 className="mail-header">Contactez-moi</h2>
      <div className="form">
        <Form />
      </div>
      <div className="resume">
        <a href="images/AurelieLopezVicente.pdf" className="mon-cv">
          Mon Curriculum Vitae
        </a>
      </div>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/aurelie-lopez-vicente/"
          className="linkedin"
        >
          <img
            src={"/images/logo/Linkedin.png"}
            alt="linkedin"
            style={{ width: "30%", marginRight: "10px" }}
          />
        </a>
        <a href="https://github.com/Aurelie75FR" className="github-png">
          <img
            src={"/images/logo/Github.png"}
            alt="Github"
            style={{ width: "30%", marginLeft: "10px" }}
          />
        </a>
      </div>
      <h5 className="footer">
        Fait avec amour <s>et rage</s> sur React{" "}
      </h5>
    </div>
  );
}

export default Contact;

import React from "react";
import "./../styles/About.css";
import Skills from "../Components/Childs/Skills";


function About() {
  return (
    <div className="about" id="About">
      {/* <div className="shadow">
        <img src={Aurelie} alt="Aurelie" className="circle" />
      </div> */}

      <div className="content">
        <p>
          Salut ! Moi c’est Aurélie, passionnée de code depuis 2012. J’ai
          intégré Ironhack en 2021 pour apprendre à être développeuse Full Stack
          avec plus d’affinité back-end.
          <br />
          <br />
          <b>OS : Windows/Ubuntu</b>
        </p>
      </div>
      <div className="hover-me">Passe ta souris sur les skills  </div>
      <div className="responsive-skill">Mes Skills</div>
      <div className="skill-container">
        <div className="skill-content">
          <div className="categories">
            <h2>Langues</h2>
            <div className="skills">
              <h5>HTML5</h5>
              <Skills props="95" />
              <h5>CSS</h5>
              <Skills props="85" />
              <h5>JAVASCRIPT</h5>
              <Skills props="75" />
              <h5>NODE</h5>
              <Skills props="90" />
              <h5>PYTHON</h5>
              <Skills props="25" />
            </div>
          </div>
          <div className="categories">
            <h3>Frameworks/Librairies</h3>
            <div className="skills">
              <h5>EXPRESS.JS HBS</h5>
              <Skills props="90" />
              <h5>REACT/HOOKS</h5>
              <Skills props="85" />
              <h5>BOOTSTRAP</h5>
              <Skills props="55" />
              <h5>SCSS</h5>
              <Skills props="40" />
            </div>
          </div>
          <div className="categories">
            <h2>Prochainement</h2>
            <div className="skills next">
              <h5>REDUX</h5>
              <br />
              <h5>GATSBY</h5>
              <br />
              <h5>BULMA</h5>
              <br />
              <h5>DJANGO</h5>
              <br />
              <h5>PHP</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-final"></div>
    </div>
  );
}

export default About;

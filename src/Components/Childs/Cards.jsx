import React from "react";
import "./../../styles/Github.css";

const Cards = (props) => {
  // const [repositories, setRepositories] = useState()

  return (
    <div className="card-container">
      <div className="card-content">
        <img src={props.img} alt={props.title} className="repo-img" />
        <a className="repo-link" href={props.link}>
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default Cards;

import React, { useState } from "react";
import "../styles/About.css";

function Skills({ props }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${props}%`,
    };
    setStyle(newStyle);
  }, 200);

  console.log(props);

  return (
    <div className="progress">
      <div className="progress-bar" style={style}>
        {props}%
      </div>
    </div>
  );
}

export default Skills;

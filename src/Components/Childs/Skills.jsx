import React, { useState, useEffect } from "react";
import "../../styles/About.css";

function Skills({ props }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const animation = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${props}%`,
      };

      setStyle(newStyle);
    }, 200);

    return () => {
      clearTimeout(animation);
    };
  });

  // console.log(props);

  return (
    <div className="progress">
      <div className="progress-bar" style={style}>
        {props}%
      </div>
    </div>
  );
}

export default Skills;

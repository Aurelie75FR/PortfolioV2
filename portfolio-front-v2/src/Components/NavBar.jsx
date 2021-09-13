import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleNav || width > 700) && (
        <ul className="nav-list">
          <NavLink exact className="page" activeClassName="current"  to="/">
            Home
          </NavLink>
          <NavLink exact className="page" activeClassName="current" to="/apropos">
            A Propos
          </NavLink>
          <NavLink exact className="page" activeClassName="current" to="/projets">
            Projets
          </NavLink>
          <NavLink exact className="page" activeClassName="current" to="/contact">
            Contact
          </NavLink>
        </ul>
      )}
      <button onClick={handleToggle} className="btn">
        Btn
      </button>
    </nav>
  );
}
export default NavBar;

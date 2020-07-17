import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarStyles.css";

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact={true} className="navbar">
        Home
      </NavLink>
      <NavLink to="/Aboutus" className="navbar">
        About
      </NavLink>
    </div>
  );
}
export default NavBar;

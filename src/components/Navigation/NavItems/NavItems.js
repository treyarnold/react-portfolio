import React from "react";
import { NavLink } from "react-router-dom";

const navItems = () => (
  <React.Fragment>
    <li><NavLink exact to="/">About</NavLink></li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </React.Fragment>
)

export default navItems;
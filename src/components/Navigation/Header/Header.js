import React from "react";
import { NavLink } from "react-router-dom";

const header = () => (
  <header>
    <nav>
      <ul>
        <li>Trey Arnold</li>
        <li id="name"><NavLink>About</NavLink></li>
        <li><NavLink>Portfolio</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default header;
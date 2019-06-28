import React from "react";

import NavItems from "../NavItems/NavItems";
import "./Header.css";

const header = () => (
  <header>
    <nav>
      <ul>
        <li>Trey Arnold</li>
        <NavItems />
      </ul>
    </nav>
  </header>
);

export default header;
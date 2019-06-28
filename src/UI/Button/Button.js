import React from "react";

import classes from "./Button.module.css";

const button = (props) => (
  <a href={props.url} target="_blank"rel="noopener noreferrer">
    <button className={classes.btn}>{props.title}</button>
  </a>
)

export default button;
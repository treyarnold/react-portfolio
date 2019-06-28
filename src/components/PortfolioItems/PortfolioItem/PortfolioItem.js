import React from "react";

import classes from "./PortfolioItem.module.css";

const portfolioItem = (props) => (
  <div className={classes.card}>
    {/* <img src={require("./assets/images/yelpcamp-min.png")} alt={props.title}></img> */}
    <h4>{props.title}</h4>
  </div>
)

export default portfolioItem;


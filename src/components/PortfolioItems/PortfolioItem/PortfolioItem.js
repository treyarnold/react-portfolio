import React from "react";
import { Link } from "react-router-dom";

import classes from "./PortfolioItem.module.css";

const yelpCamp = require("../../../data/images/yelpcamp-min.png");
const pokerFace = require("../../../data/images/pokerFace.png");

const portfolioItem = (props) => {
  let image;
  switch (props.title) {
    case "Yelp Camp": image = yelpCamp; break;
    case "Texas Hold'em": image = pokerFace; break;
  }
  return (
    <Link to={`/portfolio/${props.id}`} className={classes.a}>
      <div className={classes.card}>
        <img className={classes.thumbnail} src={image} alt={props.title}></img>
        <h4>{props.title}</h4>
      </div>
    </Link>
  )
}

export default portfolioItem;


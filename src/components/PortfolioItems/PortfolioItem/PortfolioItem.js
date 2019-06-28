import React from "react";
import { Link } from "react-router-dom";

import classes from "./PortfolioItem.module.css";

const yelpCamp = require("../../../data/images/yelpcamp-min.png");
const pokerFace = require("../../../data/images/pokerFace.png");
const aisInventory = require("../../../data/images/aisInventory.png");
const potterWords = require("../../../data/images/potterWords.png");
const counterAttack = require("../../../data/images/counterAttack.png");
const thisSite = require("../../../data/images/portfolio.png");

const portfolioItem = (props) => {
  let image;
  switch (props.title) {
    case "Yelp Camp": image = yelpCamp; break;
    case "Texas Hold'em": image = pokerFace; break;
    case "AIS Inventory": image = aisInventory; break;
    case "Potter Words": image = potterWords; break;
    case "Counter Attack": image = counterAttack; break;
    case "This Site": image = thisSite; break;
    default: image= null;
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


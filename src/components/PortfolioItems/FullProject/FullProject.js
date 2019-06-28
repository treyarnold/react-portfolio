import React from "react";

import Button from "../../../UI/Button/Button";

import projects from "../../../data/projects";
import classes from "./FullProject.module.css";

const yelpCamp = require("../../../data/images/yelpcamp-min.png");
const pokerFace = require("../../../data/images/pokerFace.png");
const aisInventory = require("../../../data/images/aisInventory.png");
const potterWords = require("../../../data/images/potterWords.png");
const counterAttack = require("../../../data/images/counterAttack.png");
const thisSite = require("../../../data/images/portfolio.png");

const fullProject = (props) => {

  let project;
  projects.forEach((proj) => {
    let paramID = parseInt(props.match.params.id)
    if (proj.id === paramID) {
      project = proj;
    }
  })

  let image;
  switch (project.title) {
    case "Yelp Camp": image = yelpCamp; break;
    case "Texas Hold'em": image = pokerFace; break;
    case "AIS Inventory": image = aisInventory; break;
    case "Potter Words": image = potterWords; break;
    case "Counter Attack": image = counterAttack; break;
    case "This Site": image = thisSite; break;
    default: image= null;
  }

  const fullDescription = (
    <div className={classes.card}>
      <a href={project.deployed} rel="noopener noreferrer" target="_blank">
        <img className={classes.image} src={image} alt={project.title}></img>
      </a>
      <div className={classes.title}>
        <h1>{project.title}</h1>
        <div className={classes.links}>
          <Button title="Deployed" url={project.deployed} />
          <Button title="Github Repo" url={project.repo} />
        </div>
      </div>
      <h2>Techs used: {project.tech.join(", ")}</h2>
      <p>{project.desc}</p>
    </div>
  );

  return (
    <main>
      {fullDescription}
    </main>
  )
}

export default fullProject;
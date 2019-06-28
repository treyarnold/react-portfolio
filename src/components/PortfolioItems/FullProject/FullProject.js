import React from "react";

import Button from "../../../UI/Button/Button";

import projects from "../../../data/projects";
import classes from "./FullProject.module.css";

const yelpCamp = require("../../../data/images/yelpcamp-min.png");
const pokerFace = require("../../../data/images/pokerFace.png");

const fullProject = (props) => {

  let project;
  projects.map((proj) => {
    if (proj.id == props.match.params.id) {
      project = proj;
    }
  })

  let image;
  switch (project.title) {
    case "Yelp Camp": image = yelpCamp; break;
    case "Texas Hold'em": image = pokerFace; break;
  }

  const fullDescription = (
    <div className={classes.card}>
      <a href={project.deployed} target="_blank">
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
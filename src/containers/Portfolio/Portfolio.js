import React, { useState } from "react";

import PortfolioItems from "../../components/PortfolioItems/PortfolioItems";
import projectList from "../../data/projects";
import classes from "./Portfolio.module.css";

const TechOptions = (props) => {
  const tech = ["React", "C#", "JavaScript", "MySql", "MongoDB", "Heroku"];
  const techInputs = tech.map((eachTech, idx) => {
    return (
      <div key={idx}>
        <input type="radio" id={eachTech} value={eachTech} name="tech" />
        <label htmlFor={eachTech}>{eachTech}</label>
      </div>
    )
  })

  return (
    <form className={classes.techOptions} onChange={(e) => props.changeTechHandler(e.target.value)}>
      {techInputs}
      <div>
        <input type="radio" id="All Tech" value="All Tech" name="tech" />
        <label htmlFor="All Tech">All Tech</label>
      </div>
    </form>
  );
}

function Portfolio() {
  const [projects, setProjects] = useState([...projectList]);

  const changeTechHandler = (techChoice) => {
    const newProjects = [...projects];
    const newTech = newProjects.map((project) => {
      if (project.tech.includes(techChoice) || techChoice === "All Tech") project.display = true;
      else project.display = false;
      return project
    })
    setProjects(newTech);
  }

  return (
    <main>
      <TechOptions changeTechHandler={changeTechHandler} />
      <PortfolioItems projects={projects.filter(project => project.display)} />
    </main>
  )
}

export default Portfolio;
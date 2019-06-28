import React, { useState } from "react";

import PortfolioItems from "../../components/PortfolioItems/PortfolioItems";
import projectList from "./projects";

function Portfolio() {
  const [projects, setProjects] = useState([...projectList]);

  return (
    <main>
      <h1>portfolio</h1>
      <PortfolioItems projects={projects.filter(project => project.display)}/>
    </main>
  )
}

export default Portfolio;
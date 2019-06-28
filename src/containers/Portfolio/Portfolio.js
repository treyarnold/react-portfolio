import React, { useState } from "react";

import PortfolioItems from "../../components/PortfolioItems/PortfolioItems";
import projectList from "../../data/projects";

function Portfolio() {
  const [projects, setProjects] = useState([...projectList]);

  return (
    <main>
      <PortfolioItems projects={projects.filter(project => project.display)}/>
    </main>
  )
}

export default Portfolio;
import React from "react";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const portfolioItems = (props) => {
  const portfolioList = props.projects.map(
    (project, index) => <PortfolioItem 
      key={index} 
      title={project.title}
      id={project.id}/>)
  return (
    <React.Fragment>
      {portfolioList}
    </React.Fragment>
  )
}

export default portfolioItems;


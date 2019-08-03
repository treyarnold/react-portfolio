import React from "react";
import { Route } from "react-router-dom";

import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Portfolio from "../Portfolio/Portfolio";
import FullProject from "../../components/PortfolioItems/FullProject/FullProject";
import Header from "../../components/Navigation/Header/Header";

const layout = () => (
  <React.Fragment>
    <Header />
    <Route path="/portfolio" exact component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio/:id" component={FullProject} />
    <Route path="/" exact component={About} />
  </React.Fragment>
)

export default layout;
import React from "react";
import { Route } from "react-router-dom";

import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import Header from "../../components/Navigation/Header/Header";

const layout = () => (
  <React.Fragment>
    <Header />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/" exact component={About} />
  </React.Fragment>
)

export default layout;
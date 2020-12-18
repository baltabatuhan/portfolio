import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landingpage";
import Projects from "./projects";
import About from "./aboutme";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/projects" component={Projects} />
    <Route path="/aboutme" component={About} />
  </Switch>
);
export default Main;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Post } from "./Post";
import { Projects } from "./Projects";
import { Privacy } from "./Privacy";
import { Learning } from "./Learning";
import { Uses } from "./Uses";
import { Archive } from "./Archive";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/archive" component={Archive} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/learning" component={Learning} />
      <Route exact path="/uses" component={Uses} />
      <Route exact path="/privacy/:name" component={Privacy} />
      <Route exact path="/:year/:month/:title" component={Post} />
    </Switch>
  );
}

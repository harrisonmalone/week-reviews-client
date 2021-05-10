import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Post } from "./Post";
import { Projects } from "./Projects";
import { Privacy } from "./Privacy";
import { Archive } from "./Archive";
import { PostsContext } from "../context/PostsContext";

export function Routes(props) {
  const { posts } = useContext(PostsContext);
  return (
    posts && (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/privacy/:name" component={Privacy} />
          <Route exact path="/:year/:month/:title" component={Post} />
        </Switch>
      </>
    )
  );
}

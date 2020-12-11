import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Post } from "./Post";
import { Projects } from "./Projects";
import { Container } from "../styles/Home";

export function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!posts) {
      fetch(process.env.REACT_APP_BACKEND_URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
    }
  });

  return posts && (
    <Container>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} posts={posts} />} />
        <Route exact path="/posts/:year/:week" render={(props) => <Post {...props} posts={posts} />} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Container>
  );
}

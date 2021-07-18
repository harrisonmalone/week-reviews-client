import React, { useState, useEffect } from "react";
import { Routes } from "./Routes";
import { Container } from "../styles/Home";
import "highlight.js/styles/github.css";
import rssFilePath from "../rss.xml";
import parser from "fast-xml-parser";
import { PostsContext } from "../context/PostsContext";

export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(rssFilePath)
      .then((res) => res.text())
      .then((data) => {
        const result = parser.parse(data);
        const posts = result.rss.channel.item;
        setPosts(posts);
      });
  }, []);

  const postsPopulated = posts.length > 0
  return postsPopulated && (
    <PostsContext.Provider value={posts}>
      <Container>
        <Routes />
      </Container>
    </PostsContext.Provider>
  );
}

import { useState, useEffect, useContext } from "react";
import hljs from "highlight.js";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import { PostsContext } from "../context/PostsContext";

function convertTZ(date, tzString) {
  const correctTimeZone = new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
  return moment(correctTimeZone).format("MMMM Do YYYY");
}

export function Post() {
  const posts = useContext(PostsContext);
  const [post, setPost] = useState(null);
  const [html, setHtml] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (posts.length > 0) {
      const foundPost = posts.find((post) => {
        const slug = post.link.split("/").slice(3, 6).join("/");
        return `/${slug}` === location.pathname;
      });
      setPost(foundPost);
      setHtml(foundPost["content:encoded"]);
    }
  }, [posts, location.pathname]);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  });

  const createMarkup = () => {
    return { __html: html };
  };

  return (
    post && (
      <>
        <h1>
          <Link to="/">hmalone</Link>
        </h1>
        <h2 style={{ marginBottom: "15px" }}>
          <Link to={window.location.pathname}>{post.title}</Link>
        </h2>
        <p style={{ margin: "0px", fontSize: "large" }}>
          {convertTZ(post.pubDate, "Australia/Sydney")}
        </p>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </>
    )
  );
}

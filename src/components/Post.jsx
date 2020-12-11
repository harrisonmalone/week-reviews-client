import { useState, useEffect } from "react";
import showdown from "showdown";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export function Post(props) {
  const [post, setPost] = useState(null);
  const [html, setHtml] = useState("");
  const { year, week } = props.match.params;

  useEffect(() => {
    if (!post) {
      const foundPost = props.posts.find((obj) => {
        return obj.year === year && obj.week === week
      })
      const converter = new showdown.Converter();
      const html = converter.makeHtml(foundPost.body);
      setHtml(html);
      setPost(foundPost)
    } else {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [props.posts, post, week, year]);

  const createMarkup = () => {
    return { __html: html };
  };

  if (!post) {
    return null;
  } else {
    return (
        <>
          <h2>Week {post.week}, {post.year}</h2>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </>
    );
  }
}

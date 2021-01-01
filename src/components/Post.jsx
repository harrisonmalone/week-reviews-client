import { useState, useEffect } from "react";
import showdown from "showdown";
import hljs from 'highlight.js';

export function Post(props) {
  const [post, setPost] = useState(null);
  const [html, setHtml] = useState("");

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  });

  useEffect(() => {
    if (!post) {
      const title = props.match.params.title
      fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/${title}`)
      .then((res) => res.json())
      .then((post) => {
        const converter = new showdown.Converter();   
        setHtml(converter.makeHtml(post.body))
        setPost({ title: post.title, date: post.date })
      })
    }
  }, [post, props.match.params.title])

  const createMarkup = () => {
    return { __html: html };
  };

  if (!post) {
    return null;
  } else {
    return (
        <>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </>
    );
  }
}

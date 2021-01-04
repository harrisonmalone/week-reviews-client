import { useState, useEffect } from "react";
import showdown from "showdown";
import hljs from 'highlight.js';
import { Link } from 'react-router-dom'
import moment from 'moment'

function convertTZ(date, tzString) {
  const correctTimeZone = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  return moment(correctTimeZone).format('MMMM Do YYYY')
}

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
          <h1>
            <Link to="/">hmalone</Link>
          </h1>
          <h3 style={{marginBottom: "15px"}}><Link to={window.location.pathname}>{post.title}</Link></h3>
          <p style={{margin: "0px", fontSize: "large"}}>{convertTZ(post.date, "Australia/Sydney")}</p>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </>
    );
  }
}

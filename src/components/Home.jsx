import React from "react";
import { Weeks, AboutMe, MyLink } from "../styles/Home";
import { Link } from 'react-router-dom'

export function Home(props) {
  function renderWeeks() {
    let prevYear;
    return props.posts.map((post, index) => {
      if (prevYear !== post.year) {
        prevYear = post.year;
        return (
          <React.Fragment key={index}>
            <h3>{post.year}</h3>
            <MyLink to={`/posts/${post.year}/${post.week}`}>{post.week}</MyLink>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={index}>
            <MyLink to={`/posts/${post.year}/${post.week}`}>{post.week}</MyLink>
          </React.Fragment>
        );
      }
    });
  }

  return (
    <>
      <AboutMe>
        <p>
          Hi, I'm Harrison. I currently work at <a href="https://coderacademy.edu.au/">CoderAcademy</a>{" "}
          where I've mentored around 100 students leading classes and assisting
          with content development. Here are my current <Link to="/projects">projects</Link>
          .
        </p>
      </AboutMe>
      <Weeks>
        <h2>Posts</h2>
        {renderWeeks()}
      </Weeks>
    </>
  );
}

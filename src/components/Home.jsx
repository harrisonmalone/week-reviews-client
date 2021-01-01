import React, { useContext } from "react";
import { Weeks, AboutMe } from "../styles/Home";
import { Link } from 'react-router-dom'
import { PostsContext } from '../context/PostsContext'

export function Home(props) {
  const { posts } = useContext(PostsContext)
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
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <h3><Link to={{
                pathname: post.slug
              }}>{post.title}</Link></h3>
            </div>
          )
        })}
      </Weeks>
    </>
  );
}

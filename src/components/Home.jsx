import React, { useContext } from "react";
import { Weeks, AboutMe } from "../styles/Home";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
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

function createSlug(post) {
  return `/${post.id.split("/").slice(3, 6).join("/")}`;
}

export function Home() {
  const posts = useContext(PostsContext);
  const firstTenPosts = posts.slice(0, 10);

  return (
    <>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <AboutMe>
        <p>
          Hi, I'm Harrison. I currently work at 99designs as a software
          engineer. You might want to check out my{" "}
          <Link to="/projects">current projects</Link>,{" "}
          <Link to="/learning">the things I’m learning this year</Link> or my{" "}
          <Link to="/uses">daily uses</Link>.
        </p>
      </AboutMe>
      <Weeks>
        <h2>Recent Posts</h2>
        {firstTenPosts.map((post, index) => {
          return (
            <div key={index}>
              <h3 style={{ marginBottom: "15px" }}>
                <Link
                  to={{
                    pathname: createSlug(post),
                  }}
                >
                  {post.title}
                </Link>
              </h3>
              <p style={{ margin: "0px", fontSize: "large" }}>
                {convertTZ(post.updated, "Australia/Sydney")}
              </p>
            </div>
          );
        })}
      </Weeks>
      <Footer />
    </>
  );
}

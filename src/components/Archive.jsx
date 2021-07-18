import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Weeks } from "../styles/Home";
import moment from "moment";
import { Footer } from "./Footer";
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

export function Archive() {
  const posts = useContext(PostsContext);
  return (
    <>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <div>
        <Weeks>
          <h2>Archive</h2>
          {posts.map((post, index) => {
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
      </div>
    </>
  );
}

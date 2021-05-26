import React from "react";
import { Link } from "react-router-dom";

export function Learning() {
  return (
    <>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <div>
        <h2>Things I'm Learning This Year</h2>
        <h3>Programming 👨‍💻</h3>
        <p>
          Starting a new job this year I've needed to learn quite a few new
          things that relate to my job.
        </p>
        <p>
          The 3 core things boil down to{" "}
          <a href="http://typescriptlang.org/">TypeScript</a>,{" "}
          <a href="https://golang.org/">Go</a> and{" "}
          <a href="https://graphql.org/">GraphQL</a>.
        </p>
        <h3>
          Golf 🏌️‍♂️
        </h3>
        <p>Played a bunch of golf over the summer which I really enjoyed. Would love to get a little better by the time the weather warms again.</p>
        <h3>
          Weights 🏋️‍♂️
        </h3>
        <p>Been in the gym a bit over the last few months and would love to learn more about different exercises and how to improve my strength.</p>
      </div>
    </>
  );
}

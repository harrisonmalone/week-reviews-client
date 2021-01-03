import React from "react";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <div>
        <h2>Projects</h2>
        <h3>
          <Link to="/">hmalone</Link>
        </h3>
        <p>
          This site! I made a notes app and then wasn't too happy with it so
          replaced it with this.
        </p>
        <p>
          The idea is to write a new post every week about my life. How I'm
          feeling, what I'm doing; maybe I'm working on a project and I wanted
          to talk about that. Maybe I went on holiday and wanted to share some
          images and thoughts from the trip.
        </p>
        <h3>
          <a href="https://memuhree.dev">Memuhree 📸</a>
        </h3>
        <p>A photo's app to store memories in.</p>
        <p>
          The idea sprung about as I basically wanted to have a client app that
          interfaced with an S3 bucket which is where I archive all my images.
        </p>
        <p>
          I also wanted to have a digital memory of one single day represented
          through a date, a photo and a description of what happened that day.
        </p>
        <p>
          The app complements the way in which I handle photos using a script to
          rename the actual image files and then uploading them to S3 using
          Transmit.
        </p>
      </div>
    </>
  );
}

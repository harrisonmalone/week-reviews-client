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
          This site! My basic blog that pulls posts from an S3 bucket.
        </p>
        <p>
          In 2021 I'm keen to write new technical posts on a weekly basis. I'll
          also just be posting some random thoughts on things every now and
          then.
        </p>
        <h3>
          <a href="https://hahrmuhnee.dev/">Hahrmuhnee 💿</a>
        </h3>
        <p>An Apple Music client.</p>
        <p>
          Over the holidays I kind of randomly decided to experiment with
          Apple's MusicKit library. Starting off the small the app slowly become
          a fully fledged tool for playing and archiving music. 
        </p>
        <p>There's three key features:</p>
        <ol>
          <li>Organizing and updating data about albums in my library, this data includes the Wikipedia entry for the album (which I often enjoy reading) and reviews</li>
          <li>Playing albums through the Apple Music API</li>
          <li>Sorting and displaying albums in a nice manner</li>
        </ol>
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

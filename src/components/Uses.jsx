import React from "react";
import { Link } from "react-router-dom";

export function Uses() {
  return (
    <>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <div>
        <h2>What I Use</h2>
        <h3>Hardware</h3>
        <ul>
          <li>MacBook Pro 13 Inch (2020)</li>
          <li>iPhone 10XR</li>
          <li>Nintendo Switch</li>
        </ul>
        <h3>Software</h3>
          <ul>
            <li>MacOS</li>
            <li>VSCode</li>
            <li>iTerm</li>
          </ul>
      </div>
    </>
  );
}

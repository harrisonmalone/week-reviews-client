import React from "react";
import { Link } from 'react-router-dom'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 
export function Privacy(props) {
  const name = props.match.params.name;
  if (name === "stradbroke") {
    return (
      <>
        <h1>
          <Link to="/">hmalone</Link>
        </h1>
        <h2>{capitalizeFirstLetter(name)} Privacy Policy</h2>
        <p>
          This policy applies to all information collected or submitted on the
          Stradbroke iOS app.
        </p>
        <h2>Information we collect</h2>
        <p>
          When new Stradbroke accounts are created the email addresses and a
          hashed password are stored in the database. Any new subscriptions that
          are created are also stored in the database.
        </p>
        <p>
          Email addresses are only used for logging in. We don’t send
          promotional emails.
        </p>
        <h2>Security</h2>
        <p>
          We implement a variety of security measures to help keep your
          information secure. For instance, all communication with the app and
          website requires HTTPS with certificate pinning. Passwords are hashed,
          not stored, using industry-standard methods (currently bcrypt).
        </p>
        <h2>Your Consent</h2>
        <p>By using our site or apps, you consent to our privacy policy.</p>
        <h2>Contacting Us</h2>
        <p>
          If you have questions regarding this privacy policy, you may email
          harrison.malone@hey.com
        </p>
      </>
    );
  } else {
    return null;
  }
}

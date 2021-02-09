import React from "react";
import { Link } from 'react-router-dom'
import _ from 'lodash'
 
export function Privacy(props) {
  const name = props.match.params.name;
  if (name === "stradbroke") {
    return (
      <>
        <h1>
          <Link to="/">hmalone</Link>
        </h1>
        <h3>{_.capitalize(name)} Privacy Policy</h3>
        <p>
          This policy applies to all information collected or submitted on the
          Stradbroke iOS app.
        </p>
        <h3>Information we collect</h3>
        <p>
          When new Stradbroke accounts are created the email addresses and a
          hashed password are stored in the database. Any new subscriptions that
          are created are also stored in the database.
        </p>
        <p>
          Email addresses are only used for logging in. We don’t send
          promotional emails.
        </p>
        <h3>Security</h3>
        <p>
          We implement a variety of security measures to help keep your
          information secure. For instance, all communication with the app and
          website requires HTTPS with certificate pinning. Passwords are hashed,
          not stored, using industry-standard methods (currently bcrypt).
        </p>
        <h3>Your Consent</h3>
        <p>By using our site or apps, you consent to our privacy policy.</p>
        <h3>Contacting Us</h3>
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

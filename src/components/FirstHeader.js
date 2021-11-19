import React from "react";
import { Link } from "react-router-dom";

const FirstHeader = (props) => {
  return (
    <nav className="first-header">
      <Link to="/signup">
        <h2>Signup</h2>
      </Link>
      <h1 className="retweet-main">Retweet</h1>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
    </nav>
  );
};

export default FirstHeader;

import React from "react";
import { Link } from "react-router-dom";

const FirstHeader = (props) => {
  return (
    <nav>
      <Link to="/signup">
        <h2>Signup</h2>
      </Link>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
    </nav>
  );
};

export default FirstHeader;

import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

export default () => {

  return (
    <nav className="nav_header">
      <Link to="/about" className="nav_link">
        ABOUT_ME
      </Link>
      <Link to="/" className="nav_link">
        SWAPI
      </Link>
      <Link to="/todo" className="nav_link">
        TODO
      </Link>
    </nav>
  );
};

// eslint-disable-next-line
import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://www.google.com">
        NavBar
        <span className="badge badge-pill badge-secondary ml-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

import React, { Component } from "react";

//Stateless Functional Component

class NavBar extends Component {
  state = {
    googleLink: "https://www.google.com"
  };
  render() {
    console.log("NavBar - Rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href={this.state.googleLink}>
          Navbar{" "}
          <span className="badge badge-pills badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;

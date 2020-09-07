import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" style={{ width: "auto" }}>
        <Navbar.Brand>
          <Link id="RouterNavLink" to="/">
            Ian Kimble
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link to="/projects" style={{ margin: "5px" }}>
              Projects
            </Link>
            <Link to="/blog" style={{ margin: "5px" }}>
              Blog
            </Link>
            <Link to="/about" style={{ margin: "5px" }}>
              About
            </Link>
            <Link to="/contact" style={{ margin: "5px" }}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);

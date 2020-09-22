import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import style from "../styles/foundational_style.module.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ width: "auto" }}
        className={style.navBar}
      >
        <Navbar.Brand>
          <Link id="RouterNavLink" to="/" className={style.navItem}>
            Ian Kimble | Developer
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link to="/projects" className={style.navItem}>
              Projects
            </Link>
            <Link to="/blog" className={style.navItem}>
              Blog
            </Link>
            <Link to="/about" className={style.navItem}>
              About
            </Link>
            <Link to="/contact" className={style.navItem}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);

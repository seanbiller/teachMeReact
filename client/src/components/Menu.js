import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <Navbar className="left-sidebar">
        <Nav.Link className="left-sidebar__link" href as={Link} to="/react">
          React
        </Nav.Link>
        <Nav.Link className="left-sidebar__link" href as={Link} to="/redux">
          Redux
        </Nav.Link>
        <Nav.Link
          className="left-sidebar__link"
          href
          as={Link}
          to="/javascript"
        >
          JavaScript
        </Nav.Link>
      </Navbar>
    );
  }
}

export default Menu;

import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/custom.css";

class Menu extends React.Component {
  render() {
    return (
      <Nav id="left-sidebar" className="flex-column">
        <Nav.Link eventKey="link-1" as={Link} to="/react">
          React
        </Nav.Link>
        <Nav.Link eventKey="link-3" as={Link} to="/redux">
          Redux
        </Nav.Link>
        {/* <Nav.Link eventKey="link-2" as={Link} to="/javascript">
          JavaScript
        </Nav.Link>
        <Nav.Link eventKey="link-4" as={Link} to="/libraries">
          3rd Party Libraries
        </Nav.Link> */}
      </Nav>
    );
  }
}

export default Menu;

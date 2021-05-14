import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

class ReduxNavBar extends React.Component {
  render() {
    return (
      <Nav id="right-sidebar" className="flex-column">
        <Nav.Link
          as={Link}
          smooth
          to="#intro-redux"
          scroll={(el) => scrollWithOffset(el)}
          activeClassName="selected"
          activeStyle={{ color: "red" }}
        >
          Intro to Redux
        </Nav.Link>
      </Nav>
    );
  }
}

export default ReduxNavBar;

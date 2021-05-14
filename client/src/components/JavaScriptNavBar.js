import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

class JavaScriptNavBar extends React.Component {
  render() {
    return (
      <Nav id="right-sidebar" className="flex-column">
        <Nav.Link
          as={Link}
          smooth
          to="#this-keyword"
          scroll={(el) => scrollWithOffset(el)}
          activeClassName="selected"
          activeStyle={{ color: "red" }}
        >
          This Keyword
        </Nav.Link>
      </Nav>
    );
  }
}

export default JavaScriptNavBar;

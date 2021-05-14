import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

class ReactNavBar extends React.Component {
  render() {
    return (
      <Nav id="right-sidebar" className="flex-column">
        <Nav.Link
          as={Link}
          smooth
          to="#jsx"
          scroll={(el) => scrollWithOffset(el)}
          activeClassName="selected"
          activeStyle={{ color: "red" }}
        >
          JSX
        </Nav.Link>
        <Nav.Link
          as={Link}
          smooth
          to="#react-components"
          scroll={(el) => scrollWithOffset(el)}
          activeClassName="selected"
          activeStyle={{ color: "red" }}
        >
          React Components
        </Nav.Link>
        <Nav.Link
          as={Link}
          smooth
          to="#functional-vs-class"
          scroll={(el) => scrollWithOffset(el)}
        >
          Functional Vs Class Components
        </Nav.Link>
        <Nav.Link
          as={Link}
          smooth
          to="#state"
          scroll={(el) => scrollWithOffset(el)}
        >
          State
        </Nav.Link>
        <Nav.Link
          as={Link}
          smooth
          to="#props"
          scroll={(el) => scrollWithOffset(el)}
        >
          Props
        </Nav.Link>
        <Nav.Link
          as={Link}
          smooth
          to="#events"
          scroll={(el) => scrollWithOffset(el)}
        >
          Events
        </Nav.Link>
        <Nav.Link
          as={Link}
          smooth
          to="#lifecycle"
          scroll={(el) => scrollWithOffset(el)}
        >
          LifeCycle Methods
        </Nav.Link>
        <Nav.Link
          as={Link}
          smooth
          to="#virtualDom"
          scroll={(el) => scrollWithOffset(el)}
        >
          VirtualDOM
        </Nav.Link>
      </Nav>
    );
  }
}

export default ReactNavBar;

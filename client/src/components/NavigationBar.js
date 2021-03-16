import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../images/logo2.png";

const NavigationBar = () => {
  return (
    <Navbar
      className="p-2"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-center"
        />{" "}
        TeachMeReact
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/react">
            React
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/javascript">
            JavaScript
          </Nav.Link>
          <Nav.Link as={Link} to="/redux">
            Redux
          </Nav.Link>
          <Nav.Link as={Link} to="/libraries">
            3rd Party Libraries
          </Nav.Link> */}
        </Nav>
        <Nav>
          <Button
            variant="outline-primary"
            href="https://www.linkedin.com/in/seanbiller/"
            target="_blank"
          >
            Find Me on Linkedin
            <span className="ml-2"></span>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
          </Button>
          <span className="ml-2"></span>
          <Button
            variant="outline-primary"
            href="https://github.com/seanbiller"
            target="_blank"
          >
            Find Me on Github
            <span className="ml-2"></span>
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

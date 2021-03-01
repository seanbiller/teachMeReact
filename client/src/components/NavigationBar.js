import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../images/logo2.png";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar
        className="p-5"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
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
            <NavDropdown title="React" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/what-is-jsx">
                What Is JSX
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/react-components">
                What are React Components
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/functional-vs-class">
                Functional vs Class Components
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/props-vs-state">
                Props Vs State
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/lifecycle-methods">
                LifeCycle Methods
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/virtual-dom">
                Virtual Dom
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/react-events">
                React Events
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/react-developer-tools">
                React Developer Tools
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Button
              variant="outline-success"
              href="https://www.linkedin.com/in/seanbiller/"
              target="_blank"
            >
              Find Me on Linkedin
              <span className="ml-2"></span>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
            </Button>
            <span className="ml-2"></span>
            <Button
              variant="outline-success"
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
    </Container>
  );
};

export default NavigationBar;

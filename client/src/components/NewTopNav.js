import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

class NewTopNav extends React.Component {
  render() {
    return (
      <div id="content">
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
          <Container fluid>
            <Button id="sidebarCollapse" className="btn btn-info">
              <FontAwesomeIcon icon={["fas", "align-left"]} />
              <span>Toggle Sidebar</span>
            </Button>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NewTopNav;

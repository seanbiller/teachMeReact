import React from "react";
import { Jumbotron, Button, Col, Row, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactLogo from "../images/react.png";
import ReduxLogo from "../images/redux.png";
import JavaScriptLogo from "../images/javascript.png";
import Headshot from "../images/headshot.png";
import Logo from "../images/logo2.png";

const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Welcome to Teach Me React,</h1>
            <p>
              This website is designed to explain React concepts in the clearest
              visual way possible. We cover Redux and JavaScript as they pertain
              to React.
            </p>
            <img
              alt=""
              src={Logo}
              width="250"
              height="250"
              className="d-inline-block align-center"
            />
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <Jumbotron id="about-me">
            <h1>About Me,</h1>
            <p>
              My name is Sean Biller and I'm a React Developer based in the
              Boston MA area.
            </p>
          </Jumbotron>
        </Col>
        <Col lg={5}>
          <Card id="contact-card">
            <Card.Img variant="top" src={Headshot} />
            <Card.Body>
              <Card.Title>Sean Biller</Card.Title>
              <Card.Text>Find Me on LinkedIn and Github</Card.Text>
              <a
                href="https://www.linkedin.com/in/seanbiller/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>
              <span className="ml-3"></span>
              <a
                href="https://github.com/seanbiller"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row id="learning-cards">
        <Col lg={4}>
          <Card className="learning-card">
            <Card.Img variant="top" src={ReactLogo} />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>Start Here to Learn React</Card.Text>
              <Button variant="outline-success">Learn React</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="learning-card">
            <Card.Img variant="top" src={JavaScriptLogo} />
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
              <Card.Text>Start Here to Learn JavaScript</Card.Text>
              <Button variant="outline-success">Learn JavaScript</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="learning-card">
            <Card.Img variant="top" src={ReduxLogo} id="reduxlogo" />
            <Card.Body>
              <Card.Title>Redux</Card.Title>
              <Card.Text>Start Here to Learn Redux</Card.Text>
              <Button variant="outline-success">Learn Redux</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;

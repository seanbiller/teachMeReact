import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhatIsReact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 align="center">What is React JS?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <a href="https://reactjs.org/">
              <b> ReactJS.org </b>
            </a>
            React is a JavaScript library for building user interfaces.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIsReact;

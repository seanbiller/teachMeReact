import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhatIsJSX = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 align="center">What is JSX?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            JSX stands for JavaScript XML, it allows us to write HTML elements
            in JavaScript and place them in the DOM without any{" "}
            <code>createElement()</code> or <code>appendChild()</code> methods.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIsJSX;

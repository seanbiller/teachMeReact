import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prism from "prismjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/functionalVsClass.css";

const code1 = `const FunctionalComponent = () => {
  return (
    <FontAwesomeIcon icon={["far", "thumbs-up"]} size="6x" />
    )
}
`.trim();
<FontAwesomeIcon icon="thumbs-up" />;

const code2 = `
class ClassComponents extends React.Component {
  render() {
  return (
    <FontAwesomeIcon icon={["far", "thumbs-up"]} size="6x" />
  )
  }
}
`.trim();

const code3 = `
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

const code4 = `
class ClassComponents extends React.Component {
  state = {}
  render() {
  return (<div>Im a Class Component</div>)
  }
}
`.trim();

class FunctionalVsClass extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container>
        <Row className="p-3">
          <Col>
            <h1 align="center">Functional vs Class Components</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <h3 align="center">Functional Component</h3>
            <p>
              Here we have a basic Functional Component returning a Font Awesome
              thumbs up icon nothing special.
            </p>
            <pre>
              <code className="language-jsx line-numbers">{code1}</code>
            </pre>
          </Col>
          <Col lg={4} className="p-3">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a static like button with no functionality</p>
              <FontAwesomeIcon icon={["far", "thumbs-up"]} size="6x" />
            </div>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <h3 align="center">Class Component</h3>
            <p>Here we have a basic Class Component</p>
            <pre>
              <code className="language-jsx line-numbers">{code2}</code>
            </pre>
          </Col>
          <Col lg={4} className="p-3">
            <h3 align="center">Output</h3>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <h3 align="center">Functional Component State</h3>
            <p>Class based components handle state with ...</p>
            <pre>
              <code className="language-jsx line-numbers">{code4}</code>
            </pre>
          </Col>
          <Col lg={4} className="p-3">
            <h3 align="center">Class Component State</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FunctionalVsClass;

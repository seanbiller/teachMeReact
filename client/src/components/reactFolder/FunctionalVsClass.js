import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prism from "prismjs";

import FunctionalComponent, {
  FunctionalComponentCode,
} from "./functionVsClass/FunctionalComponent";
import ClassComponent, {
  ClassComponentCode,
} from "./functionVsClass/ClassComponent";

class FunctionalVsClass extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id="functional-vs-class">
        <Row className="p-3">
          <Col>
            <h1 align="center">Functional vs Class Components</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3>Functional Component</h3>
            <p>
              In react there are two types of Components, Functional and Class
              Components. They can produce the same output but they go about
              doing it in different ways. For example here we have a basic
              Functional Component returning a Font Awesome thumbs up icon.
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {FunctionalComponentCode}
              </code>
            </pre>
          </Col>
          <Col lg={2} className="mt-5">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a static like button with no functionality</p>
              <FunctionalComponent />
            </div>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3>Class Component</h3>
            <p>
              Here we have a basic Class Component returning the same Font
              Awesome thumbs up icon.
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {ClassComponentCode}
              </code>
            </pre>
          </Col>
          <Col lg={2} className="mt-5">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a static like button with no functionality</p>
              <ClassComponent />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FunctionalVsClass;

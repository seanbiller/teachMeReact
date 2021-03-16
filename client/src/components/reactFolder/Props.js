import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prism from "prismjs";
import ParentComponent, { ParentComponentCode } from "./props/ParentComponent";
import { ChildComponentCode } from "./props/ChildComponent";
import { ClassChildComponentCode } from "./props/ClassChildComponent";
import { ClassParentComponentCode } from "./props/ClassParentComponent";

class Props extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id="props">
        <Row className="p-3">
          <Col>
            <h1 align="center">Props</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <p>
              "Props" (which stands for properties) are arguments passed into
              React components. In the example below we have a Parent Component
              which passes a <code>prop</code> called name to its child
              components.
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {ParentComponentCode}
              </code>
            </pre>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <p>
              With a functional component you reference your <code>props</code>{" "}
              by passing the props argument and in our case referencing our name
              prop <code>props.name</code>
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {ChildComponentCode}
              </code>
            </pre>
          </Col>
        </Row>
        <Row>
          <Col>
            <ParentComponent />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <p>
              With Class based Components very little changes. You still pass
              props down from the parent in the exact same way.
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {ClassParentComponentCode}
              </code>
            </pre>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <p>
              In the Child Componet the only difference is you reference props
              prefixed with the <code>this</code> keyword.
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {ClassChildComponentCode}
              </code>
            </pre>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Props;

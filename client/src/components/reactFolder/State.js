import React from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import Prism from "prismjs";
import "../../css/functionalVsClass.css";

import ClassComponentWithState, {
  ClassComponentWithStateCode,
} from "./state/ClassComponentWithState";
import FunctionalComponentWithState, {
  FunctionalComponentWithStateCode,
} from "./state/FunctionalComponentWithState";
import ClassComponentWithStateConstructor, {
  ClassComponentWithStateConstructorCode,
} from "./state/ClassComponentWithStateConstructor";

class State extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id="state">
        <Row className="p-3">
          <Col>
            <h1 align="center">State</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3>Functional Component State (Hooks)</h3>
            <p>
              Now here's where the important difference between functional and
              class components comes in. The functional component handles state
              with the <code>useState</code> hook. The <code>useState</code>{" "}
              hook allows you to add State to a functional component. There's
              more hooks to learn about which can be found here.{" "}
              <a
                target="blank"
                href="https://reactjs.org/docs/hooks-intro.html"
              >
                React Hooks
              </a>
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {FunctionalComponentWithStateCode}
              </code>
            </pre>
          </Col>
          <Col lg={2} className="mt-5">
            <h3 align="center">Output</h3>
            <div align="center">
              <p>Displays a clickable like button</p>
              <p>Click Me!</p>
              <FunctionalComponentWithState />
            </div>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3>Class Component State</h3>
            <p>
              With Class Based Components state is created using a Class
              Constructor that assigns initial <code>this.state</code>. In class
              based components you have to bind the <code>this</code> keyword to
              our current Component "ClassComponentWithState". Arrow functions
              bind the <code>this</code> keyword to the Component. If you don't
              bind <code>this</code> with an arrow function you'll get this
              error
            </p>
            <Alert variant="danger">
              "TypeError: Cannot read property 'state' of undefined"
            </Alert>
            <pre>
              <code className="language-jsx line-numbers">
                {ClassComponentWithStateConstructorCode}
              </code>
            </pre>
          </Col>
          <Col lg={2} className="mt-5">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a clickable like button</p>
              <p>Click Me!</p>
              <ClassComponentWithStateConstructor />
            </div>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3>Class Component State With Babels Help</h3>
            <p>
              &ensp; The following code is equal to the code above but we're
              relying on BABEL to create the constructor behind the scenes for
              us. This article explains it in more detail.
            </p>
            <Alert variant="success">
              <Alert.Link
                href="https://www.geeksforgeeks.org/how-to-add-statefull-component-without-constructor-class-in-react/"
                target="_blank"
              >
                Go to GeeksforGeeks Article to Learn More about Class Components
              </Alert.Link>
            </Alert>
            <pre>
              <code className="language-jsx line-numbers">
                {ClassComponentWithStateCode}
              </code>
            </pre>
          </Col>
          <Col lg={2} className="mt-5">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a clickable like button</p>
              <p>Click Me!</p>
              <ClassComponentWithState />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default State;

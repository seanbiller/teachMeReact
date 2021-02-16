import React from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import Prism from "prismjs";
import "../../css/functionalVsClass.css";

import FunctionalComponent from "./reactSubComponents/FunctionalComponent";
import ClassComponent from "./reactSubComponents/ClassComponent";
import ClassComponentWithState from "./reactSubComponents/ClassComponentWithState";
import FunctionalComponentWithState from "./reactSubComponents/FunctionalComponentWithState";
import ClassComponentWithStateConstructor from "./reactSubComponents/ClassComponentWithStateConstructor";

const code1 = `
const FunctionalComponent = () => {
  return <FontAwesomeIcon icon={["far", "thumbs-up"]} size="6x" />;
};

export default FunctionalComponent;
`.trim();

const code2 = `
class ClassComponent extends React.Component {
  render() {
    return <FontAwesomeIcon icon={["far", "thumbs-up"]} size="6x" />;
  }
}

export default ClassComponent;
`.trim();

const code3 = `
const FunctionalComponentWithState = () => {
  // Here is where we declare the state using Hooks
  const [iconType, setIconType] = useState("far");

  const onClick = () => {
    if (iconType === "far") {
      setIconType("fas");
    } else if (iconType === "fas") {
      setIconType("far");
    }
  };

  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={[iconType, "thumbs-up"]} size="5x" />
    </Button>
  );
};
`.trim();

const code4 = `
class ClassComponentWithStateConstructor extends React.Component {
  // Here is where we declare the state with a class constructor
  constructor(props) {
    super(props);
    this.state = { iconType: "far" };
  }

  // Binding this.state with an arrow function
  onClick = () => {
    if (this.state.iconType === "far") {
      this.setState({ iconType: "fas" });
    } else if (this.state.iconType === "fas") {
      this.setState({ iconType: "far" });
    }
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        <FontAwesomeIcon icon={[this.state.iconType, "thumbs-up"]} size="5x" />
      </Button>
    );
  }
}
`.trim();

const code5 = `
class ClassComponentWithState extends React.Component {
  // Here is where we declare the state Babel creates the constructor for us
  state = { iconType: "far" };

  // Binding this.state with an arrow function
  onClick = () => {
    if (this.state.iconType === "far") {
      this.setState({ iconType: "fas" });
    } else if (this.state.iconType === "fas") {
      this.setState({ iconType: "far" });
    }
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        <FontAwesomeIcon icon={[this.state.iconType, "thumbs-up"]} size="5x" />
      </Button>
    );
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
          <Col lg={10} className="p-3">
            <h3 align="center">Functional Component</h3>
            <p>
              Here we have a basic Functional Component returning a Font Awesome
              thumbs up icon.
            </p>
            <pre>
              <code className="language-jsx line-numbers">{code1}</code>
            </pre>
          </Col>
          <Col lg={2} className="p-3">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a static like button with no functionality</p>
              <FunctionalComponent />
            </div>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3 align="center">Class Component</h3>
            <p>
              Here we have a basic Class Component returning the same Font
              Awesome thumbs up icon.
            </p>
            <pre>
              <code className="language-jsx line-numbers">{code2}</code>
            </pre>
          </Col>
          <Col lg={2} className="p-3">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a static like button with no functionality</p>
              <ClassComponent />
            </div>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3 align="center">Functional Component State</h3>
            <p>Functional components handle state with ...</p>
            <pre>
              <code className="language-jsx line-numbers">{code3}</code>
            </pre>
          </Col>
          <Col lg={2} className="p-3">
            <h3 align="center">Output</h3>
            <div className="center">
              <p>Displays a clickable like button</p>
              <p>Click Me!</p>
              <FunctionalComponentWithState />
            </div>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <h3 align="center">Class Component State</h3>
            <p>
              <br></br>
              &ensp; With Class Based Components state is created using a Class
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
              <code className="language-jsx line-numbers">{code4}</code>
            </pre>
          </Col>
          <Col lg={2} className="p-3">
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
            <h3 align="center">Class Component State With Babels Help</h3>
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
              <code className="language-jsx line-numbers">{code5}</code>
            </pre>
          </Col>
          <Col lg={2} className="p-3">
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

export default FunctionalVsClass;

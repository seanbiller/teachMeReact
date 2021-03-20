import React from "react";
import Prism from "prismjs";
import { Row, Col } from "react-bootstrap";

class Mounting extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Row>
        <Col lg={10}>
          <pre>
            <code className="language-jsx line-numbers">{this.props.code}</code>
          </pre>
        </Col>
      </Row>
    );
  }
}

export default Mounting;

export const MountingExampleCode = `
import React from "react";
import Prism from "prismjs";
import { Row, Col } from "react-bootstrap";

class Mounting extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Row>
        <Col lg={10}>
          <pre>
            <code className="language-jsx line-numbers">{this.props.code}</code>
          </pre>
        </Col>
      </Row>
    );
  }
}

export default Mounting;
`.trim();

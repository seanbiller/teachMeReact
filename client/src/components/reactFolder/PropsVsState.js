import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prism from "prismjs";
import ParentComponent from "./propsVsState/ParentComponent";
import ChildComponent from "./propsVsState/ChildComponent";
import StateComponent from "./propsVsState/StateComponent";

const code1 = `
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ChildComponent name="Coca-Cola" />
      <ChildComponent name="Pepsi" />
      <ChildComponent name="Mountain Dew" />
      <ChildComponent name="Dr Pepper" />
    </div>
  );
};

export default ParentComponent;
`.trim();

const code2 = `
import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <input type="radio" name="soda" />
      <label for="soda">{props.name}</label>
      <br />
    </div>
  );
};

export default ChildComponent;

`.trim();

const code3 = `
import React from "react";

class StateComponent extends React.Component {
  state = { sodaType: "Choose A Soda" };

  buyCocaCola = () => {
    this.setState({ sodaType: "Coca-Cola" });
  };

  buyPepsi = () => {
    this.setState({ sodaType: "Pepsi" });
  };

  buyMountainDew = () => {
    this.setState({ sodaType: "Mountain Dew" });
  };

  buyDrPepper = () => {
    this.setState({ sodaType: "Dr Pepper" });
  };

  render() {
    return (
      <div>
        <h1>Vending Machine</h1>
        <input onClick={this.buyCocaCola} type="radio" name="soda" />
        <label for="soda">Coca-Cola</label>
        <br />
        <input onClick={this.buyPepsi} type="radio" name="soda" />
        <label for="soda">Pepsi</label>
        <br />
        <input onClick={this.buyMountainDew} type="radio" name="soda" />
        <label for="soda">Mountain Dew</label>
        <br />
        <input onClick={this.buyDrPepper} type="radio" name="soda" />
        <label for="soda">Dr Pepper</label>
        <br />
        <h3>Soda Choice: {this.state.sodaType}</h3>
      </div>
    );
  }
}

export default StateComponent;
`.trim();

class PropsVsState extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container>
        <Row className="p-3">
          <Col>
            <h1 align="center">Props Vs State</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <p>
              "Props" (which stands for properties) are arguments passed into
              React components. In the example below we have a Parent Component
              which passes a <code>prop</code> to a Child Component.
            </p>
            <pre>
              <code className="language-jsx line-numbers">{code1}</code>
            </pre>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <p>The Child Component</p>
            <pre>
              <code className="language-jsx line-numbers">{code2}</code>
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
            <p>State Component</p>
            <pre>
              <code className="language-jsx line-numbers">{code3}</code>
            </pre>
          </Col>
        </Row>
        <Row>
          <Col>
            <StateComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PropsVsState;

import React from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import Prism from "prismjs";
import JSX from "./jsxFolder/JSX";
import WithoutJSX from "./jsxFolder/WithoutJSX";
import JSXFragment from "./jsxFolder/JSXFragment";

const code1 = `
import React from "react";

const myName = () => {
  return <p>My Name is JSX</p>;
};

const WithoutJSX = () => {
  return (
    <div>
      <h1>I'm a h1 tag using JSX!</h1>
      <p>I'm a p tag using JSX </p>
      {myName()}
    </div>
  );
};

export default WithoutJSX;
`.trim();

const code2 = `
import React from "react";

var myName = function myName() {
  return React.createElement("p", null, "My Name is JSX");
};

var WithoutJSX = function WithoutJSX() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "I'm a h1 tag using JSX!"),
    React.createElement("p", null, "I'm a p tag using JSX "),
    myName
  );
};

export default WithoutJSX;
`.trim();

const code3 = `
import React from "react";

const myName = () => {
  return <p>My Name is JSX</p>;
};

const WithoutJSX = () => {
  return (
    // The h1 and p tags aren't wrapped with a parent element causing an error
      <h1>I'm a h1 tag using JSX!</h1>
      <p>I'm a p tag using JSX </p>
      {myName()}
  );
};

export default WithoutJSX;
`.trim();

const code4 = `
import React from "react";

const JSXFragment = () => {
  return (
    <React.Fragment>
      <h1>If you inspect me theres no parent element!</h1>
      <p>React Fragments wrap your JSX without effecting the output</p>
    </React.Fragment>
  );
};

export default JSXFragment;
`.trim();

class WhatIsJSX extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container>
        <Row className="p-3">
          <Col>
            <h1 align="center">What is JSX?</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <p>
              JSX stands for JavaScript XML, it allows us to write HTML elements
              in JavaScript and place them in the DOM without any{" "}
              <code>createElement()</code> or <code>appendChild()</code>{" "}
              methods. It makes writing HTML in React so much cleaner. The Code
              below is an example of some basic JSX.
            </p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <pre>
              <code className="language-jsx line-numbers">{code1}</code>
            </pre>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <JSX />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <p>
              Now thanks to Babel which transpiles JSX into valid JavaScript for
              us we can write HTML in JavaScript without in a much shorter and
              cleaner format. If we didn't have Babel and had to write all this
              out ourselves then the code would look like this.
            </p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <pre>
              <code className="language-jsx line-numbers">{code2}</code>
            </pre>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <WithoutJSX />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <p>
              Now that has the same output but thats really ugly code. Without
              JSX we have to use <code>createElement()</code> everytime we want
              to create a use an HTML tag. JSX makes our lives so much easier,
              you can test out your own JSX code and see what it would look like
              in plain Javascript over on Babels website.{" "}
              <a
                target="_black"
                href="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAtgTwHIEM4FMYF4YAoCU2AfDAN4BQAkAE7pQCu1YMAPAA5ECyCMqGMASwgwAUgGUAGiwD0HcgF9y5UJFgB1AVAAWIelHETseQlhIVaDJnnIxWAEwEA3IlRZaAjEQCSAcjgwUGA8YKBQAcxh6CAEwCIMAQhkPF1tbdm8_AJg2EPDI6NjRSVZZFNTSRD50AkVKGQdncnwFIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Ces2015%2Ces2016%2Ces2017%2Creact%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3%2Ces2015-loose%2Ctypescript%2Cflow&prettier=true&targets=&version=7.13.8&externalPlugins="
              >
                Babeljs.io
              </a>
              One thing to always remember with JSX is that you must always wrap
              adjacent JSX elements in an enclosing tag.
            </p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <pre>
              <code className="language-jsx line-numbers">{code3}</code>
            </pre>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <p>
              Without the div tag to wrap the h1 and p tag you get a Syntax
              Error.
            </p>
            <Alert variant="danger">
              SyntaxError: Adjacent JSX elements must be wrapped in an enclosing
              tag. Did you want a JSX fragment <>...</>? (10:6)
            </Alert>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <p>
              Now you this error mentions something new JSX Fragment. A Fragment
              lets you group a list of children like a div, but without adding
              extra nodes to the DOM. What does that mean? It means it tells the
              DOM that its child elements are grouped, but unlike the div tag it
              is completly ignored otherwise. The div tag will appear in the
              DOM, the React.Fragment won't.
            </p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <pre>
              <code className="language-jsx line-numbers">{code4}</code>
            </pre>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={10}>
            <JSXFragment />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WhatIsJSX;

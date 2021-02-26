import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prism from "prismjs";
import MiniApp from "./reactComponents/MiniApp";
import MiniNavbar from "./reactComponents/MiniNavbar";
import MiniBlog from "./reactComponents/MiniBlog";
import MiniBlogTitle from "./reactComponents/MiniBlogTitle";
import MiniBlogArticle from "./reactComponents/MiniBlogArticle";

const code1 = `
import React from "react";
import MiniNavbar from "./MiniNavbar";
import MiniBlog from "./MiniBlog";

const MiniApp = () => {
  return (
    <div>
      <MiniNavbar />
      <MiniBlog />
    </div>
  );
};

export default MiniApp;
`.trim();

const code2 = `
import React from "react";

const MiniNavbar = () => {
  return (
    <div>
      <nav>
        NavBar
        <span> | </span>
        <button>Home</button>
        <span> | </span>
        <button>Blogs</button>
      </nav>
    </div>
  );
};

export default MiniNavbar;
`.trim();

const code3 = `
import React from "react";
import MiniBlogArticle from "./MiniBlogArticle";
import MiniBlogTitle from "./MiniBlogTitle";

const MiniBlog = () => {
  return (
    <div>
      <MiniBlogTitle />
      <MiniBlogArticle />
    </div>
  );
};

export default MiniBlog;
`.trim();

const code4 = `
import React from "react";

const MiniBlogTitle = () => {
  return (
    <div>
      <h3>Why React is Better Than Angular</h3>
    </div>
  );
};

export default MiniBlogTitle;

`.trim();

const code5 = `
import React from "react";
import MiniNavbar from './reactComponents/MiniNavbar';
import MiniBlogArticle from './ReactComponents';

const MiniBlogArticle = () => {
  return (
    <div>
      <p>
        React is better than Angular...
        <br></br>
        Like way better
        <br></br>
        You need Proof?
        <br></br>I knew a guy who said he was gonna learn Angular...
        <br></br>
        Next day a vending machine fell on him...
        <br></br>
        True story
      </p>
    </div>
  );
};

export default MiniBlogArticle;
`.trim();

class ReactComponents extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container>
        <Row className="p-3">
          <Col>
            <h1 align="center">React Components</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>
              One of the most powerful features of React is its ability to break
              up UI into reusable Components. What does that mean? Well, let’s
              have a look at an example of a very basic App called MiniApp.
            </p>
            <pre>
              <code className="language-jsx line-numbers">{code1}</code>
            </pre>
          </Col>
          <Col>
            <MiniApp />
          </Col>
        </Row>

        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>Navbar</p>
            <pre>
              <code className="language-jsx line-numbers">{code2}</code>
            </pre>
          </Col>
          <Col>
            <MiniNavbar />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>MiniBlog</p>
            <pre>
              <code className="language-jsx line-numbers">{code3}</code>
            </pre>
          </Col>
          <Col>
            <MiniBlog />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>MiniBlogTitle</p>
            <pre>
              <code className="language-jsx line-numbers">{code4}</code>
            </pre>
          </Col>
          <Col>
            <MiniBlogTitle />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>MiniBlogArticle</p>
            <pre>
              <code className="language-jsx line-numbers">{code5}</code>
            </pre>
          </Col>
          <Col>
            <MiniBlogArticle />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReactComponents;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prism from "prismjs";
import MiniApp, { MiniAppCode } from "./reactComponents/MiniApp";
import MiniNavbar, { MiniNavbarCode } from "./reactComponents/MiniNavbar";
import MiniBlog, { MiniBlogCode } from "./reactComponents/MiniBlog";
import MiniBlogTitle, {
  MiniBlogTitleCode,
} from "./reactComponents/MiniBlogTitle";
import MiniBlogArticle, {
  MiniBlogArticleCode,
} from "./reactComponents/MiniBlogArticle";

class ReactComponents extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id="react-components">
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
              MiniApp is made up of two components called MiniNavbar and
              MiniBlog.
            </p>
            <pre>
              <code className="language-jsx line-numbers">{MiniAppCode}</code>
            </pre>
          </Col>
          <Col className="mt-5">
            <MiniApp />
          </Col>
        </Row>

        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>
              Here we see the code for the Navbar Component, its very simply but
              it contains the logic for the Navbar in one concise location. This
              makes it very easy to edit should we want to make changes to it
              later, maybe add a new button.
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {MiniNavbarCode}
              </code>
            </pre>
          </Col>
          <Col className="mt-5">
            <MiniNavbar />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>
              Here we have the MiniBlog component thats made up of two more
              sub-components, MiniBlogTitle and MiniBlogArticle.
            </p>
            <pre>
              <code className="language-jsx line-numbers">{MiniBlogCode}</code>
            </pre>
          </Col>
          <Col className="mt-5">
            <MiniBlog />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>MiniBlogTitle has the self contained title.</p>
            <pre>
              <code className="language-jsx line-numbers">
                {MiniBlogTitleCode}
              </code>
            </pre>
          </Col>
          <Col className="mt-5">
            <MiniBlogTitle />
          </Col>
        </Row>
        <Row className="p-3">
          <Col lg={8} className="p-3">
            <p>
              MiniBlogArticle has the self contained article, thats the beauty
              of React. You can break down all the features of your app into
              their smaller pieces. Easy to read, easy to update and most
              importantly easy to reuse.
            </p>
            <pre>
              <code className="language-jsx line-numbers">
                {MiniBlogArticleCode}
              </code>
            </pre>
          </Col>
          <Col className="mt-5">
            <MiniBlogArticle />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReactComponents;

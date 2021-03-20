import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import LessonHeading from "../../teachingComponents/LessonHeading";
import LessonArticle from "../../teachingComponents/LessonArticle";
import ClassicDomIMG from "../../../images/classicDom.png";
import VirtualDomIMG from "../../../images/virtualDom.png";

const Article = (
  <p>
    The DOM aka the Document Object Model is an abstraction of HTML code.
    Elements of HTML become nodes in the DOM. The modern web app is made of
    thousands of HTML elements so that means thousands of nodes in the DOM. The
    downside of the DOM is when one node is updated they all update. This can be
    extremly slow depending on how many nodes need to update in your app.
  </p>
);
const Article2 = (
  <p>
    So we dont want all our nodes updating when only one has been changed. Thats
    where the Virtual DOM comes in, the Virtual DOM creates a snapshot of the
    Real DOM. This allows React to compare the Virtual DOM snapshot with the
    Real DOM to see whats changed, this process is called 'diffing'. It then
    only updates the node that has changed.
  </p>
);

class VirtualDom extends React.Component {
  render() {
    return (
      <Container>
        <LessonHeading heading="Real DOM" />
        <LessonArticle article={Article} />
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <img src={ClassicDomIMG} alt="Real DOM" />
          </Col>
        </Row>
        <LessonHeading heading="Virtual DOM" />
        <LessonArticle article={Article2} />
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <img src={VirtualDomIMG} alt="Virtual DOM" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VirtualDom;

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LessonHeading from "../../teachingComponents/LessonHeading";
import LessonArticle from "../../teachingComponents/LessonArticle";
import LessonCode from "../../teachingComponents/LessonCode";
import UpdatingExample, { UpdatingExampleCode } from "./UpdatingExample";

const Article = (
  <p>
    The <code>componentDidUpdate()</code> lifecycle method
  </p>
);

class Updating extends React.Component {
  render() {
    return (
      <Container id="updating">
        <LessonHeading heading="ComponentDidUpdate()" />
        <LessonArticle article={Article} />
        <LessonCode code={UpdatingExampleCode} />
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <UpdatingExample />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Updating;

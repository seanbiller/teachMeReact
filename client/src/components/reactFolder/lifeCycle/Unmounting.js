import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LessonHeading from "../../teachingComponents/LessonHeading";
import LessonArticle from "../../teachingComponents/LessonArticle";
import LessonCode from "../../teachingComponents/LessonCode";
import UnmountingExample, { UnmountingExampleCode } from "./UnmountingExample";

const Article = <p>The componentWillUnmount()</p>;

class Unmounting extends React.Component {
  render() {
    return (
      <Container id="unmounting">
        <LessonHeading heading="ComponentWillMount()" />
        <LessonArticle article={Article} />
        <LessonCode code={UnmountingExampleCode} />
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <UnmountingExample />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Unmounting;

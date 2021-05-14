import React from "react";
import LessonHeading from "../../teachingComponents/LessonHeading";
import { Container, Row } from "react-bootstrap";
import LessonArticle from "../../teachingComponents/LessonArticle";
import LessonCode from "../../teachingComponents/LessonCode";
import ThisClass from "./ThisClass";
import ThisConstructor from "./ThisConstructor";

const thisKeywordArticle = <p></p>;

class ThisKeyword extends React.Component {
  state = { color: "red" };

  render() {
    return (
      <Container id="this-keyword">
        <LessonHeading heading="This Keyword" />
        <LessonArticle article={thisKeywordArticle} />
        <LessonCode code={thisKeywordArticle} />
        <Row className="p-3">
          <ThisClass />
        </Row>
        <Row className="p-3">
          <ThisConstructor />
        </Row>
      </Container>
    );
  }
}

export default ThisKeyword;

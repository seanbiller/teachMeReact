import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import LessonHeading from "../../teachingComponents/LessonHeading";
import LessonArticle from "../../teachingComponents/LessonArticle";
import LessonCode from "../../teachingComponents/LessonCode";
import EventsClassExample, {
  EventsClassExampleCode,
} from "./EventsClassExample";

const Article = (
  <p>
    With a Class Component its very similar. Except you define the method using
    an IFFE (Immediately Invoked Function Expression) inside the component above
    the render method. You then call it inside the curcly braces but prefixing
    it with the <code>this</code> keyword.
  </p>
);

class EventsClass extends React.Component {
  render() {
    return (
      <Container id="events-class">
        <LessonHeading heading="Events Class" />
        <LessonArticle article={Article} />
        <LessonCode code={EventsClassExampleCode} />
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <EventsClassExample />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventsClass;

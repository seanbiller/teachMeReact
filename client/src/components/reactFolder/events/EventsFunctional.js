import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LessonHeading from "../../teachingComponents/LessonHeading";
import LessonArticle from "../../teachingComponents/LessonArticle";
import LessonCode from "../../teachingComponents/LessonCode";
import EventsFunctionalExample, {
  EventsFunctionalExampleCode,
} from "./EventsFunctionalExample";

const sayHello = () => {
  return <div>Hello</div>;
};
const Article = (
  <p>
    Events in React like the OnClick event are written in camelCase:{" "}
    <code>onClick()</code> instead of <code>onclick()</code>.<br></br>
    React event handlers are written inside curly braces. With a Functional
    Component you define the the event handler as a method inside the component
    above the return statement. You then then call the event handler inside the
    curly braces.
  </p>
);
class EventsFunctional extends React.Component {
  render() {
    return (
      <Container id="events-functional">
        <LessonHeading heading="Events Functional with Functional" />
        <LessonArticle article={Article} />
        <LessonCode code={EventsFunctionalExampleCode} />
        <Row className="p-3">
          <Col lg={10} className="p-3">
            <EventsFunctionalExample />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventsFunctional;

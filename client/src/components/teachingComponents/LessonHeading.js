import React from "react";
import { Row, Col } from "react-bootstrap";

class LessonHeading extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={10} className="p-3">
          <h3>{this.props.heading}</h3>
        </Col>
      </Row>
    );
  }
}

export default LessonHeading;

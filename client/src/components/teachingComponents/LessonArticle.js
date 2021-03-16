import React from "react";
import { Row, Col } from "react-bootstrap";

class LessonArticle extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={10}>{this.props.article}</Col>
      </Row>
    );
  }
}

export default LessonArticle;

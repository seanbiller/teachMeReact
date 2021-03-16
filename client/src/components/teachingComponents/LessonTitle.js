import React from "react";
import { Row, Col, Container } from "react-bootstrap";

class LessonTitle extends React.Component {
  render() {
    return (
      <Container id={this.props.hash}>
        <Row>
          <Col>
            <h1 align="center">{this.props.title}</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LessonTitle;

import React from "react";
import LessonTitle from "../teachingComponents/LessonTitle";
import BasicRedux from "./basicRedux/BasicRedux";
import { Container } from "react-bootstrap";

class ReduxMaster extends React.Component {
  render() {
    return (
      <Container>
        <LessonTitle hash="redux" title="Redux" />
        <BasicRedux />
      </Container>
    );
  }
}

export default ReduxMaster;

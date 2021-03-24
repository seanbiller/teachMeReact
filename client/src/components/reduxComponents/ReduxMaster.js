import React from "react";
import LessonTitle from "../teachingComponents/LessonTitle";
import BasicRedux from "./basicRedux/BasicRedux";

class ReduxMaster extends React.Component {
  render() {
    return (
      <div>
        <LessonTitle hash="redux" title="Redux" />
        <BasicRedux />
      </div>
    );
  }
}

export default ReduxMaster;

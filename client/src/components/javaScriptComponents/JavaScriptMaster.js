import React from "react";
import ThisKeyword from "./thisKeyword/ThisKeyword";
import LessonTitle from "../teachingComponents/LessonTitle";

class JavaScriptMaster extends React.Component {
  render() {
    return (
      <>
        <LessonTitle hash="javascript" title="JavaScript" />
        <ThisKeyword />
      </>
    );
  }
}

export default JavaScriptMaster;

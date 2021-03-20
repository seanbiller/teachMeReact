import React from "react";
import { Container } from "react-bootstrap";
import LessonHeading from "../../teachingComponents/LessonHeading";
import LessonArticle from "../../teachingComponents/LessonArticle";
import LessonCode from "../../teachingComponents/LessonCode";
import { MountingExampleCode } from "./MountingExample";

const Article = (
  <p>
    The <code>componentDidMount()</code> lifecycle method is called after a
    component is rendered. It is the most commonly used lifecycle method because
    it allows you to run functions the moment the component has finished
    rendering. In the example below <code>componentDidMount()</code> is used to
    call the PrismJS library which highlights the code below so it looks like a
    text editor.
  </p>
);

class Mounting extends React.Component {
  render() {
    return (
      <Container id="mounting">
        <LessonHeading heading="ComponentDidMount()" />
        <LessonArticle article={Article} />
        <LessonCode code={MountingExampleCode} />
      </Container>
    );
  }
}

export default Mounting;

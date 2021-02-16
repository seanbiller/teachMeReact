import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

class ClassComponent extends React.Component {
  render() {
    return (
      <Button>
        <FontAwesomeIcon icon={["far", "thumbs-up"]} size="5x" />
      </Button>
    );
  }
}

export default ClassComponent;

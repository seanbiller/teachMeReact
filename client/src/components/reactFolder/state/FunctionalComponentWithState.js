import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const FunctionalComponentWithState = () => {
  // Here is where we declare the state using Hooks
  const [iconType, setIconType] = useState("far");

  const onClick = () => {
    if (iconType === "far") {
      setIconType("fas");
    } else if (iconType === "fas") {
      setIconType("far");
    }
  };

  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={[iconType, "thumbs-up"]} size="5x" />
    </Button>
  );
};

export default FunctionalComponentWithState;

export const FunctionalComponentWithStateCode = `
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const FunctionalComponentWithState = () => {
  // Here is where we declare the state using Hooks
  const [iconType, setIconType] = useState("far");

  const onClick = () => {
    if (iconType === "far") {
      setIconType("fas");
    } else if (iconType === "fas") {
      setIconType("far");
    }
  };

  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={[iconType, "thumbs-up"]} size="5x" />
    </Button>
  );
};

export default FunctionalComponentWithState;
`.trim();

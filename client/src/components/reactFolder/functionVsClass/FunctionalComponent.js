import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const FunctionalComponent = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={["far", "thumbs-up"]} size="5x" />
    </Button>
  );
};

export default FunctionalComponent;

export const FunctionalComponentCode = `
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const FunctionalComponent = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={["far", "thumbs-up"]} size="5x" />
    </Button>
  );
};

export default FunctionalComponent;
`.trim();

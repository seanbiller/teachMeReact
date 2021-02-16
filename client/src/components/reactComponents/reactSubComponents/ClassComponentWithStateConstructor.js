import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

class ClassComponentWithStateConstructor extends React.Component {
  // Here is where we declare the state with a class constructor
  constructor(props) {
    super(props);
    this.state = { iconType: "far" };
  }

  // Binding this.state with an arrow function
  onClick = () => {
    if (this.state.iconType === "far") {
      this.setState({ iconType: "fas" });
    } else if (this.state.iconType === "fas") {
      this.setState({ iconType: "far" });
    }
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        <FontAwesomeIcon icon={[this.state.iconType, "thumbs-up"]} size="5x" />
      </Button>
    );
  }
}

export default ClassComponentWithStateConstructor;

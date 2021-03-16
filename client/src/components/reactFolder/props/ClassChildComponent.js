import React from "react";

class ClassChildComponent extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" name="soda" />
        <label for="soda">{this.props.name}</label>
        <br />
      </div>
    );
  }
}

export default ClassChildComponent;

export const ClassChildComponentCode = `
import React from "react";

class ClassChildComponent extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" name="soda" />
        <label for="soda">{this.props.name}</label>
        <br />
      </div>
    );
  }
}

export default ClassChildComponent;
`.trim();

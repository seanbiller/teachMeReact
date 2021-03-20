import React from "react";

class UpdatingExample extends React.Component {
  state = { hasUpdated: "No" };
  componentDidUpdate() {
    return this.setState({ hasUpdated: "Yes" });
  }
  render() {
    return <h3>Has The Component Updated: {this.state.hasUpdated}</h3>;
  }
}

export default UpdatingExample;

export const UpdatingExampleCode = `
import React from "react";

class UpdatingExample extends React.Component {
  state = { hasUpdated: "No" };
  componentDidUpdate() {
    this.setState({ hasUpdated: "Yes" });
  }
  render() {
    return <h3>Has The Component Updated: {this.state.hasMounted}</h3>;
  }
}

export default UpdatingExample;
`.trim();

import React from "react";

class UnmountingExample extends React.Component {
  state = { unmounted: "no" };

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ unmounted: "yes" });
    }, 1000);
  }

  render() {
    return <div>Has the Component UnMounted: {this.state.unmounted} </div>;
  }
}

export default UnmountingExample;

export const UnmountingExampleCode = `
import React from "react";

class UnmountingExample extends React.Component {
  state = { unmounted: "no" };

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ unmounted: "yes" });
    }, 1000);
  }

  render() {
    return <div>Has the Component Mounted: {this.state.unmounted} </div>;
  }
}

export default UnmountingExample;
`.trim();

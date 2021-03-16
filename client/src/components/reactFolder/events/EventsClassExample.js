import React from "react";

class EventsClassExample extends React.Component {
  sayHello() {
    alert("Hello!");
  }
  render() {
    return <button onClick={this.sayHello}>Click To Say Hello</button>;
  }
}

export default EventsClassExample;

export const EventsClassExampleCode = `
import React from "react";

class EventsClassExample extends React.Component {
  sayHello() {
    alert("Hello!");
  }
  render() {
    return <button onClick={this.sayHello}>Click To Say Hello</button>;
  }
}

export default EventsClassExample;
`.trim();

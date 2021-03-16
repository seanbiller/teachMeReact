import React from "react";
import ClassChildComponent from "./ClassChildComponent";

class ClassParentComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Vending Machine</h1>
        <ClassChildComponent name="Coca-Cola" />
        <ClassChildComponent name="Pepsi" />
        <ClassChildComponent name="Mountain Dew" />
        <ClassChildComponent name="Dr Pepper" />
      </div>
    );
  }
}

export default ClassParentComponent;

export const ClassParentComponentCode = `
import React from "react";
import ClassChildComponent from "./ClassChildComponent";

class ClassParentComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Vending Machine</h1>
        <ClassChildComponent name="Coca-Cola" />
        <ClassChildComponent name="Pepsi" />
        <ClassChildComponent name="Mountain Dew" />
        <ClassChildComponent name="Dr Pepper" />
      </div>
    );
  }
}

export default ClassParentComponent;
`.trim();

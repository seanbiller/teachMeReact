import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ChildComponent name="Coca-Cola" />
      <ChildComponent name="Pepsi" />
      <ChildComponent name="Mountain Dew" />
      <ChildComponent name="Dr Pepper" />
    </div>
  );
};

export default ParentComponent;

export const ParentComponentCode = `
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ChildComponent name="Coca-Cola" />
      <ChildComponent name="Pepsi" />
      <ChildComponent name="Mountain Dew" />
      <ChildComponent name="Dr Pepper" />
    </div>
  );
};

export default ParentComponent;
`.trim();

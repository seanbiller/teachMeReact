import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <input type="radio" name="soda" />
      <label for="soda">{props.name}</label>
      <br />
    </div>
  );
};

export default ChildComponent;

export const ChildComponentCode = `
import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <input type="radio" name="soda" />
      <label for="soda">{props.name}</label>
      <br />
    </div>
  );
};

export default ChildComponent;
`.trim();

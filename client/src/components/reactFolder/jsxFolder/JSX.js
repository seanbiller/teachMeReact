import React from "react";

const javaScriptFunction = () => {
  return <p>This is a function with JSX!</p>;
};

const JSX = () => {
  return (
    <div>
      <h3>This is a h3 tag using JSX!</h3>
      <p>This is a p tag using JSX!</p>
      {javaScriptFunction()}
    </div>
  );
};

export default JSX;

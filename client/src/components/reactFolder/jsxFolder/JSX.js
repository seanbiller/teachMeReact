import React from "react";

const myName = () => {
  return <p>My Name is JSX</p>;
};

const WithoutJSX = () => {
  return (
    <div>
      <h1>I'm a h1 tag using JSX!</h1>
      <p>I'm a p tag using JSX </p>
      {myName()}
    </div>
  );
};

export default WithoutJSX;

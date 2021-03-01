import React from "react";

var myName = function myName() {
  return React.createElement("p", null, "My Name is JSX");
};

var WithoutJSX = function WithoutJSX() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "I'm a h1 tag using JSX!"),
    React.createElement("p", null, "I'm a p tag using JSX "),
    myName()
  );
};

export default WithoutJSX;

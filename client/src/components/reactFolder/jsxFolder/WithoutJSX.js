import React from "react";

var javaScriptFunction = function javaScriptFunction() {
  return React.createElement("p", null, "This is a function with JSX!");
};

var WithoutJSX = function WithoutJSX() {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "This is a h3 tag using JSX!"),
    React.createElement("p", null, "This is a p tag using JSX!"),
    javaScriptFunction()
  );
};

export default WithoutJSX;

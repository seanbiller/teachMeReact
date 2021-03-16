import React from "react";

const EventsFunctionalExample = () => {
  const sayHello = () => {
    alert("Hello!");
  };
  return <button onClick={sayHello}>Click To Say Hello</button>;
};

export default EventsFunctionalExample;

export const EventsFunctionalExampleCode = `
import React from "react";

const EventsFunctionalExample = () => {
  const sayHello = () => {
    alert("Hello!");
  };
  return <button onClick={sayHello}>Click To Say Hello</button>;
};

export default EventsFunctionalExample;
`.trim();

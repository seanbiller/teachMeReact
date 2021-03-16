import React from "react";
import MiniNavbar from "./MiniNavbar";
import MiniBlog from "./MiniBlog";
import "./miniApp.css";

const MiniApp = () => {
  return (
    <div id="mini-app">
      <h3>MiniApp</h3>
      <MiniNavbar />
      <MiniBlog />
    </div>
  );
};

export default MiniApp;

export const MiniAppCode = `
import React from "react";
import MiniNavbar from "./MiniNavbar";
import MiniBlog from "./MiniBlog";
import "./miniApp.css";

const MiniApp = () => {
  return (
    <div id="mini-app">
      <h3>MiniApp</h3>
      <MiniNavbar />
      <MiniBlog />
    </div>
  );
};

export default MiniApp;
`.trim();

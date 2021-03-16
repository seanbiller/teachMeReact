import React from "react";
import "./miniApp.css";

const MiniNavbar = () => {
  return (
    <div id="mini-navbar">
      <nav>
        NavBar
        <span> | </span>
        <button className="myButton">Home</button>
        <span> | </span>
        <button className="myButton">Blogs</button>
      </nav>
    </div>
  );
};

export default MiniNavbar;

export const MiniNavbarCode = `import React from "react";
import "./miniApp.css";

const MiniNavbar = () => {
  return (
    <div id="mini-navbar">
      <nav>
        NavBar
        <span> | </span>
        <button className="myButton">Home</button>
        <span> | </span>
        <button className="myButton">Blogs</button>
      </nav>
    </div>
  );
};

export default MiniNavbar;
`.trim();

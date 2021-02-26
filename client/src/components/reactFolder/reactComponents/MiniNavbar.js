import React from "react";

const MiniNavbar = () => {
  return (
    <div>
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

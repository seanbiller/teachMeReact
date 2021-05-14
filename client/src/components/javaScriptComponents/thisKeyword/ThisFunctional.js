import React from "react";

const ThisFunctional = (props) => {
  return (
    <div>
      <p>This Keyword:</p>
      {console.log(this)}
    </div>
  );
};

export default ThisFunctional;

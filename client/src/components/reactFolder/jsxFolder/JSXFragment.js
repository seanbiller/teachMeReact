import React from "react";

const JSXFragment = () => {
  return (
    <React.Fragment>
      <h3>
        These two elements are wrapped with a React Fragment so React won't
        throw an error
      </h3>
      <p>
        React Fragments wrap your JSX without effecting the output, no
        unnecessary div tags
      </p>
    </React.Fragment>
  );
};

export default JSXFragment;

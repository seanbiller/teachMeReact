import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers);
class IndexJS extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default IndexJS;

export const IndexJSCode = `
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
`.trim();

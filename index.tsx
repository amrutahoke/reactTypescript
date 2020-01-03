import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./src/components/App";
import store from "./src/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
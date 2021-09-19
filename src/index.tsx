import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ChecksProvider from "./context/ChecksContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChecksProvider>
      <App />
    </ChecksProvider>
  </React.StrictMode>,
  rootElement
);

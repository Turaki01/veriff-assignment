import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import ChecksProvider from "./context/ChecksContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} gutter={8} />
    <ChecksProvider>
      <App />
    </ChecksProvider>
  </React.StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/techground-team/">
      <App />
    </HashRouter>
    {/* <BrowserRouter> */}

    {/* </BrowserRouter> */}
  </React.StrictMode>
);

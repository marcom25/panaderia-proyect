import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./$-context/Context";

ReactDOM.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>,
  document.getElementById("root")
);

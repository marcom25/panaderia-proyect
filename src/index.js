import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./$-context/Context";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <ParallaxProvider>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </ParallaxProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./contexts/Context";
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-snackbar-material-ui";


ReactDOM.render(
  <AlertProvider template={AlertTemplate} >
    <ParallaxProvider>
      <Context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context>
    </ParallaxProvider>
  </AlertProvider>,
  document.getElementById("root")
);

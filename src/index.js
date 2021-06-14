import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { defineCustomElements, addTheme } from "@scania/components";
import { theme as scania } from "@scania/theme-light";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <sdds-theme></sdds-theme>
    <App />
  </StrictMode>,
  rootElement
);

defineCustomElements();
addTheme(scania);

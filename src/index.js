import React from "react";
import ReactDOM from "react-dom";
import MaterialTableDemo from "./demo";

//ReactDOM.render(<Demo />, document.querySelector("#root"));

import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'OneShinhan',
  },
});

axios.defaults.baseURL = 'http://20.41.82.195:8000';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App/>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

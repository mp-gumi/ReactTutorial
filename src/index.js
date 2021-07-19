import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Tutorial } from "./Tutorial";
//import { Quiz } from "./quiz";
//import { Popup } from "./Popup";

ReactDOM.render(
  <React.StrictMode>
    <Tutorial />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

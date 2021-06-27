import React from "react";
import ReactDOM from "react-dom";
import DashboardScreen from "./DashboardScreen";
import "./index.css";
import Header from "./shared/Header";

ReactDOM.render(
  <React.StrictMode className="">
    <Header />
    <div className="viewer animate__animated animate__zoomInDown">
      <DashboardScreen />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

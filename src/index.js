import React from "react";
import ReactDOM from "react-dom";
import DashboardScreen from "./DashboardScreen";
import "./index.css";
import Header from "./shared/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="body">
      <DashboardScreen />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

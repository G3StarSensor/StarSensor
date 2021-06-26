import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import DashboardScreen from './DashboardScreen';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <DashboardScreen />
  </React.StrictMode>,
  document.getElementById('root')
);
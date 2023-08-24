import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './Test';
import HealthApp from './HealthDashboard/HealthApp';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import ReactDOM from 'react-dom';
// import TestComponent from './components/TestComponent'; // Adjust the import path as needed

// ReactDOM.render(<TestComponent />, document.getElementById('root'));


// import ClassComponent from './components/ClassComponent'; // Adjust the import path as needed

// ReactDOM.render(<ClassComponent />, document.getElementById('root'));
import MainElearning from './elearning/MainElearning';
import SportsDashboard from './sports_analytics/SportsDashboard';
import TailwindExample1 from './tailwind_examples/TailwindExample1';
import MultiplayerGamePlatform from './gaming/MultiplayerGamePlatform';
import GameDashboard from './gaming/GameDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      {/* <HealthApp /> */}
      {/* <MainElearning /> */}
      {/* <SportsDashboard /> */}
      {/* <MultiplayerGamePlatform /> */}
      <GameDashboard />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

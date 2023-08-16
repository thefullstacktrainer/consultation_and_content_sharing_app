import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import ReactDOM from 'react-dom';
// import TestComponent from './components/TestComponent'; // Adjust the import path as needed

// ReactDOM.render(<TestComponent />, document.getElementById('root'));


// import ClassComponent from './components/ClassComponent'; // Adjust the import path as needed

// ReactDOM.render(<ClassComponent />, document.getElementById('root'));
import { AppProvider } from './components/context/AppContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

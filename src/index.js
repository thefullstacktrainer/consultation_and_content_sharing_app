import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import Main from './components/Main';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UseRefExample1 from './components/hooks_examples/UseRefExample1';
import UseReducerExample from './components/hooks_examples/UseReducerExample';
import UseCallbackExample from './components/hooks_examples/UseCallbackExample';
import UseMemoExample from './components/hooks_examples/UseMemoExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    {/* <UseRefExample1 /> */}
    {/* <UseReducerExample /> */}
    {/* <UseCallbackExample /> */}
    <UseMemoExample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

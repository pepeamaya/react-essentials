import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AppTwo() {
  return <h1>This is the second app</h1>;
}

ReactDOM.render(
  // React.createElement("h1", { style: {color: "blue"} }, "Hello Pepe"), // first element is what we want to create
  
  // React.createElement(
  //   "ul", 
  //   null, 
  //   React.createElement("li", null, "Monday"),
  //   React.createElement("li", null, "Tuesday"),
  //   React.createElement("li", null, "Wednesday")
  //   ),
  
  // -> JSX
  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  //   <li>Wednesday</li>
  // </ul>,
  
  // Fragments
  // <React.Fragment>
  //   <App />
  //   <AppTwo />
  // </React.Fragment>,
  <>
    <App authorized={true}/>
    <AppTwo />
  </>,
  document.getElementById('root') // where we want to put it
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

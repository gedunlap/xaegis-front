import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import skeleton & normalize
import './skeleton.css'
import './normalize.css'
// Import BrowserRouter component as Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Wrap App inside router
  // Pass app component into Route to give access to rp
  <Router>
    <React.StrictMode>
      <Route path='/' component={App} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

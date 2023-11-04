import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import { BrowserRouter as Router, Route } from 'react-router-dom'; */
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route path='/' Component={App}/>
    </Router>
  </React.StrictMode>
); */


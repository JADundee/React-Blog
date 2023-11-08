import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import { BrowserRouter as Router, Route } from 'react-router-dom'; */
/* import { createRoot } from 'react-dom/client'; */
import { StoreProvider } from 'easy-peasy';
import store from './store';

/* const container = document.getElementById('root');
const root = createRoot(container); */

/* root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
); */

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Route path='/' Component={App}/>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


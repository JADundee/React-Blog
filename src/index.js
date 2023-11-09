import React from 'react';
/* import ReactDOM from 'react-dom'; */
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'easy-peasy';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container);

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
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
 /*  document.getElementById('root') */
);


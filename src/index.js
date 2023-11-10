import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'easy-peasy';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </Router>
    </StoreProvider>
);


// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import RandomGreeting from './routes/RandomGreeting';
import Layout from './components/Layout';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="greeting" element={<RandomGreeting />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
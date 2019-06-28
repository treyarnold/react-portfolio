import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;

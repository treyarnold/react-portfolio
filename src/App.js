import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Portfolio from './containers/Portfoilo/Portfolio'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Portfolio />
      </div>
    </BrowserRouter>
  );
}

export default App;

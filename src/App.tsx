import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">the counter is available</h1>
      <button data-test="increment-button">Increment Button</button>
    </div>
  );
}

export default App;

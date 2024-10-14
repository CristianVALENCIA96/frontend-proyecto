// src/App.js
import React from 'react';
import Login from './components/Login';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Proyecto Frontend</h1>
      <Login />
      <Productos />
      <Carrito />
    </div>
  );
}

export default App;

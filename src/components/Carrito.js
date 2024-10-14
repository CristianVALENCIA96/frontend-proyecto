// src/components/Carrito.js
import React, { useState } from 'react';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>{producto}</li>
          ))}
        </ul>
      )}
      <button onClick={() => agregarProducto('Producto de Ejemplo')}>
        Agregar Producto
      </button>
    </div>
  );
};

export default Carrito;

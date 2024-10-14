// src/components/Productos.js
import React from 'react';

const Productos = () => {
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200 },
    { id: 2, nombre: 'Monitor', precio: 300 },
    { id: 3, nombre: 'Teclado', precio: 50 },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;

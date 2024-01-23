import React from 'react';
import './Card.css';
import pantalon1 from "../src/assets/pantalon1.webp";
import Popup from "../Popup"
const Card = () => {
  const verDetalles = (productId) => {
    // Lógica para ver detalles, si es necesario
    console.log(`Detalles del producto ${productId}`);
  };

  return (
    <div className="product-card" id="product1">
      <div className="imgproduct">
        <img src={pantalon1} alt="Producto 1" />
      </div>
      <div className="description">
        <h3>Pantalon de chàndal color block</h3>
        <div className="catprice">
        <p className="category">Ropa Deportiva</p>
        <p className="price">9.99€</p>
        </div>
      </div> 
        <button onClick={() => verDetalles('productId')}>Ver Detalles</button>
    <Popup/>
    </div>
  );
};

export default Card;
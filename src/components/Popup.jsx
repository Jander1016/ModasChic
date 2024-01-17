// Popup.js
import React, { useState, useEffect } from 'react';
import './Popup.css';  // Importa el archivo CSS

const Popup = ({ productId, onClose }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Hacer una solicitud a la API para obtener los detalles del producto por ID
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${productId}`);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error al obtener datos del producto:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <div className="popup">
      {productData && (
        <>
          <img src={productData.image} alt={productData.name} />
          <p>{productData.description}</p>
          <button onClick={onClose}>Leer menos</button>
        </>
      )}
    </div>
  );
};

export default Popup;

 // Popup.js
import React, { useState, useEffect } from 'react';
import './Popup.css';  // Importa el archivo CSS


const Popup = ({ productId }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Hacer una solicitud a la API para obtener los detalles del producto por ID
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/Products/${6}`);
        const data = await response.json()
        setProductData(data);
        console.log(data)
      } catch (error) {
        console.error('Error al obtener datos del producto:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <section className="pop up">

      {productData && (
        <>
          <div className='container'>
            <div className='img'>
              <img src={productData.image} alt={productData.name} /> </div>
            <div className='text'>
              <h5>{productData.title}</h5>
              <div className='price'>
                <p className='category'>{productData.category}</p>
                <p className='price'>{productData.price}</p>
                </div>
              <p>{productData.description}</p>
             </div>
         
          <button>Cerrar</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Popup;

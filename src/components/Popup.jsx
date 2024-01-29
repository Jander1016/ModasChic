import './Popup.css';  // Importa el archivo CSS
import { useProducts } from '../hooks/useProducts';
import { useEffect } from 'react';
// import { useProductContext } from '../context/productContext'; 


// eslint-disable-next-line react/prop-types
const Popup = ({ productId, isOpen, onClose}) => {

  const { getProductsById, productById } = useProducts()

  useEffect(() => {
    getProductsById(productId)
  }, [getProductsById, productId]);

  if (!isOpen){return null} 


  return (
    
    <section className="pop-up">


      {productById && (
        <>
        <div className="overlay" onClick={onClose}></div>
          <div className='popup'>
            
            <div className='img'>
              <img src={productById.image} alt={productById.name} /> </div>
            <div className='text'>
              <h3>{productById.title}</h3>
              <div className='subtitle'>
                <p className='category'>{productById.category}</p>
                <p className='price'>{productById.price}</p>
                </div>
              <p className='content'>{productById.description}</p>
             </div>
         
          <button onClick ={onClose}>Cerrar
            </button>
          </div>
        </>
      )}
      
    </section>
    
  );
};

export default Popup;

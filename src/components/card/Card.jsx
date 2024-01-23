import './Card.css';

const Card = ({productData}) => {
/*  const verDetalles = (productId) => {
    // Lógica para ver detalles, si es necesario
    console.log(`Detalles del producto ${productId}`);
  };
*/

  return (
    <div className="product-card" id="product1">
      <div className="imgproduct">
        <img src={productData.image} alt={productData.name} />
      </div>
      <div className="description">
        <h3>{productData.title}</h3>
        <div className="catprice">
        <p className="category">{productData.category}</p>
        <p className="price">{productData.price}</p>
        </div>
      </div> 
        <button onClick={() => verDetalles('product1')}>Ver Detalles</button>
      
    </div>
  );
};

export default Card;
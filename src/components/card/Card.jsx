import './Card.css';
import OpenModalForm from '../OpenModalForm';
const Card = ({productData}) => {
  const { isModalOpen, openModal, closeModal } = OpenModalForm()
/*  const verDetalles = (productId) => {
import pantalon1 from "../src/assets/pantalon1.webp";
import Popup from "../Popup"
const Card = () => {
  const verDetalles = (productId) => {
    // Lógica para ver detalles, si es necesario
    console.log(`Detalles del producto ${productId}`);
  };
*/
const handlerEdit = (event) =>{
  event.preventDefault()
/*   console.log(event.target.files) */
  openModal();
}
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
        <button onClick={ () => verDetalles('productId')}>Ver Detalles</button>
        {isModalOpen &&
    <Popup isOpen={isModalOpen} onClose={closeModal}/>}
    </div>
  );
};

export default Card;
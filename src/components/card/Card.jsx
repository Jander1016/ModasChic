/* eslint-disable react/prop-types */
import "./Card.css";
import OpenModalForm from "../OpenModalForm";
import Popup from "../Popup";

const Card = ({ product }) => {
  const { isModalOpen, openModal, closeModal } = OpenModalForm();

  const handlerShow = (event) => {
    event.preventDefault();
    openModal();
  };

  return (
    <>
    <div className="product-card">
      <div className="imgproduct">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="description">
        <h3>{product.title}</h3>
        <div className="catprice">
          <p className="category">{product.category}</p>
          <p className="price">{product.price}</p>
        </div>
      </div>
      <button className="details" onClick={handlerShow}>Ver Detalles</button>
      { isModalOpen && 
          <Popup
           isOpen={isModalOpen} 
           onClose={closeModal} 
           productId={product.id}
      /> }
    </div>
    </>
  );
};

export default Card;

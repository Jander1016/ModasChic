/* eslint-disable react/prop-types */
import  { useEffect } from "react";
import './EditForm.css'
import { useProducts } from "../../hooks/useProducts";



const EditFormOpen = ({ isOpen, onClose, children }) => {

    const { getProductsById, productById } = useProducts()

    useEffect(() => {
        getProductsById(2)    
    }, [getProductsById])


    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay" >
        <div className="modal">
  
              <div>
                  <h4 className="titles">Añadir imagen</h4>
                  <input value={productById.image} className="archive-input" type="file" accept="image/*" />
              </div>
              <div>
                  <h4 className="titles">Título de producto</h4>
                  <input value={productById.title} className="title-input" type="text" />
              </div>
              <div className="category-selection">
                  <h4>Categoria</h4>
                  <select value={productById.category}  className="category-input" name="Category" id="category">
                      <option value="Sudaderas">Sudaderas</option>
                      <option value="Camisetas">Camisetas</option>
                      <option value="Pantalontes">Pantalontes</option>
                  </select>
              </div>
              <div>
                  <h4 className="titles">Descripcion</h4>
                  <input value={productById.description} id="description" className="description-input" type="text" />
              </div>
  
              <div className="prizeStock-container">
                  <div className="prizeStock">
                      <h4>Precio</h4>
                      <input value={productById.price} type="number" /><p>€</p>
                  </div>
                  <div className="prizeStock">
                      <h4>Stock</h4>
                      <input value={productById.stock} type="number" /><p>ud.</p>
                  </div>
              </div>
              <div className="buttons-container">
                  <button className="add">EDITAR</button>
                  <button className="cancel " onClick={onClose}>CANCELAR</button>
                  
              </div>
          </div>
          {children}
  
      </div>
      
    );
  };
export default EditFormOpen
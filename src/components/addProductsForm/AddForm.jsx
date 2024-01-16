import React from "react";
import './AddForm.css'



const AddForm =() => {
    return (

        <div className="container">
            <div>
                <h4 className="titles">Añadir imagen</h4>
                <input className="archive-input" type="file" accept="image/*" />
            </div>
            <div>
                <h4 className="titles">Título de producto</h4>
                <input className="title-input" type="text" />
            </div>
            <div className="category-selection">
                <h4>Categoria</h4>
                <select className="category-input" name="Categorias" id="category">
                    <option value="Sudaderas">Sudaderas</option>
                    <option value="Camisetas">Camisetas</option>
                    <option value="Pantalontes">Pantalontes</option>
                </select>
            </div>
            <div>
                <h4 className="titles">Descripcion</h4>
                <input id="description" className="description-input" type="text" />
            </div>

            <div className="prizeStock-container">
                <div className="prizeStock">
                    <h4>Precio</h4>
                    <input type="number" /><p>€</p>
                </div>
                <div className="prizeStock">
                    <h4>Stock</h4>
                    <input type="number" /><p>ud.</p>
                </div>
            </div>
            <div className="buttons-container">
                <button className="add">AGREGAR</button>
                <button className="cancel">CANCELAR</button>
            </div>
        </div>





    );
}
export default AddForm
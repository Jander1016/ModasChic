/* eslint-disable react/prop-types */
import { useState } from 'react';
import './AddForm.css'

import { v4 as uuidv4 } from 'uuid';

const AddForm = ({ isOpen, onClose }) => {

console.log(uuidv4())

   const [datos, setDatos] = useState({
        "title": "",
        "price": 0,
        "description": "",
        "category": "",
        "image": "",
        "stock": 0
    });

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const URL = "http://localhost:3001/Products";

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            });

            if (response.ok) {
                // Puedes mostrar un mensaje de éxito al usuario aquí
                console.log("Datos actualizados con éxito");
                onClose(); // Cierra el formulario después de agregar
            } else {
                // Puedes mostrar un mensaje de error al usuario aquí
                console.error("Error al enviar datos a la API");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };


    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <form onSubmit={handleSubmit} className="modal">

                <div>
                    <h4 className="titles">Añadir imagen</h4>
                    <input
                        className="archive-input"
                        type="file"
                        accept="image/*"

                    />
                </div>
                <div>
                    <h4 className="titles">Título de producto</h4>
                    <input
                        name="title"
                        value={datos.title}
                        className="title-input"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div className="category-selection">
                    <h4>Categoria</h4>
                    <select
                    value={datos.category}
                        className="category-input"
                        name="category"
                        id="category">
                        <option value="Sudaderas">Sudaderas</option>
                        <option value="Camisetas">Camisetas</option>
                        <option value="Pantalontes">Pantalontes</option>
                    </select>
                </div>
                <div>
                    <h4 className="titles">Descripcion</h4>
                    <input
                    value={datos.description}
                        name='description'
                        id="description"
                        className="description-input"
                        type="text"
                        onChange={handleChange}
                    />
                </div>

                <div className="prizeStock-container">
                    <div className="prizeStock">
                        <h4>Precio</h4>
                        <input
                        value={datos.price}
                            name='price'
                            onChange={handleChange}
                            type="number"
                        /><p>€</p>
                    </div>
                    <div className="prizeStock">
                        <h4>Stock</h4>
                        <input
                        value={datos.stock}
                            name='stock'
                            onChange={handleChange}
                            type="number"
                        /><p>ud.</p>
                    </div>
                </div>
                <div className="buttons-container">
                    <button type='submit' onClick={onClose} className="add">AGREGAR</button>
                    <button className="cancel " onClick={onClose}>CANCELAR</button>

                </div>
            </form>


        </div>

    );
};
export default AddForm
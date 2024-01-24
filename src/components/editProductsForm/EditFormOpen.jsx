/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import './EditForm.css'
import { useProducts } from "../../hooks/useProducts";



const EditFormOpen = ({ isOpen, onClose, id }) => {

    const { getProductsById, productById } = useProducts()

    const { datos, setDatos} = useState(
        {

            "title": "",
            "price": 0,
            "description": "",
            "category": "",
            "image": "",
            "stock": 0
    
        }
    )

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    let getProduct = async () => {
        await getProductsById(id)
        setDatos(productById)

    }


    useEffect(() => {
        getProduct()
    }, [getProduct])

    const handleChangeTitle = (e) => {
        e.preventDefault()
        const value = e.target.value
        setTitle(value)
    
    }
    const handleChangeDescription = (e) => {
        e.preventDefault()
        const value = e.target.value
        setDescription(value)
    
    }
    const handleChangePrice = (e) => {
        e.preventDefault()
        const value = e.target.value
        setPrice(value)
    
    }
    const handleChangeStock = (e) => {
        e.preventDefault()
        const value = e.target.value
        setStock(value)
    
    }

/* 
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        

        setDatos({
            ...datos,

            [name]: value
        })
        console.log(datos)
        
    } */


    const handleSubmit = async (e) => {
        e.preventDefault()
      
        const URL = "http://localhost:3001/Products"
        let product = {

            "title": title,
            "price": price,
            "description": description,
            "category": "",
            "image": "",
            "stock": stock
    
        }
        console.log(product)

        fetch(URL, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)

        })
            .then((respose) => respose.json())
            .then((res) => {
                alert("Datos actualizados")

            })
            .catch((error) => {
                console.log(error)
            })

    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" >
            <form className="modal" onSubmit={handleSubmit}>

                <div>
                    <h4 className="titles">Añadir imagen</h4>
                    <input

                        className="archive-input"
                        type="file"
                        name="image"
                        accept="image/*"
                   

                    />
                </div>
                <div>
                    <h4 className="titles">Título de producto</h4>
                    <input
                        required
                        onChange={handleChangeTitle}
                        placeholder={datos.title}
                        className="title-input"
                        name="title"
                        type="text"
                   

                    />
                </div>
                <div className="category-selection">
                    <h4>Categoria</h4>
                    <select
                        required
                        
                        className="category-input"
                        name="category"
                        id="category"
                   
                    >

                        <option placeholder="Sudaderas">Sudaderas</option>
                        <option value="Camisetas">Camisetas</option>
                        <option value="Pantalontes">Pantalontes</option>
                    </select>
                </div>
                <div>
                    <h4 className="titles">Descripcion</h4>
                    <input
                        required
                        placeholder={datos.description}
                        id="description"
                        name="description"
                        className="description-input"
                        type="text"
                        onChange={handleChangeDescription}
                    />
                </div>

                <div className="prizeStock-container">
                    <div className="prizeStock">
                        <h4>Precio</h4>
                        <input
                            required
                            onChange={handleChangeStock}
                            placeholder={datos.price}
                            name="price"
                            type="number"
                       
                        />
                        <p>€</p>
                    </div>
                    <div className="prizeStock">
                        <h4>Stock</h4>
                        <input
                            required
                            onChange={handleChangePrice}
                            placeholder={datos.stock}
                            name="stock"
                            type="number"
                       
                        />
                        <p>ud.</p>
                    </div>
                </div>
                <div className="buttons-container">
                    <button className="add" type="submit">EDITAR</button>
                    <button className="cancel " onClick={onClose}>CANCELAR</button>

                </div>
            </form>
            {/*   {children} */}

        </div>

    );
};
export default EditFormOpen
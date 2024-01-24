/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import './EditForm.css'
import { useProducts } from "../../hooks/useProducts";



const EditFormOpen = ({ isOpen, onClose, id }) => {

    const { getProductsById, productById } = useProducts()

    const { datos, setDatitos} = useState(
        {

            "title": productById.title,
            "price": productById.price,
            "description": productById.description,
            "category": productById.category,
            "image":productById.image,
            "stock": productById.stock
    
        }
    )

    
    const [title, setTitle] = useState(productById.title);
    const [description, setDescription] = useState(productById.description);
    const [price, setPrice] = useState(productById.price);
    const [stock, setStock] = useState(productById.stock);
    const [category, setCategory] = useState(productById.category);
    const [image, setImage] = useState(productById.image);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    // id = Event.target
    console.log(id)

    useEffect(() => {
        getProductsById(id)
    }, [getProductsById,id])

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

    const handleChangeCategory= (e) => {
        e.preventDefault()
        const value = e.target.value
        setCategory(value)
    
    }


    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        
        console.log(value)

        setDatitos({...datos, [name]: value })
    } 


    const handleSubmit = async (e) => {
        e.preventDefault()
      
        const URL = "http://localhost:3001/Products/"+ id
        let product = {

            "title": title,
            "price": price,
            "description": description,
            "category": category,
            "image": image,
            "stock": stock
    
        }
        console.log(product)
//https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        fetch(URL, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(Object.assign(product))

        })
            .then((respose) => respose.json())
            .then((res) => {
                    const jsonData = JSON.parse(Object.assign(res)); // Aquí se intenta analizar el texto como JSON
                      console.log(jsonData);
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
                        onChange={handleImageChange}
                        // value={image}
                    />
                </div>
                <div>
                    <h4 className="titles">Título de producto</h4>
                    <input
                        required
                        onChange={handleChangeTitle}
                        placeholder={productById.title}
                        // value={productById.title}
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
                        // value={datos.category}
                        onChange={handleChangeCategory}
                    >

                        <option value="Sudaderas">Sudaderas</option>
                        <option value="Camisetas">Camisetas</option>
                        <option value="Pantalontes">Pantalontes</option>
                    </select>
                </div>
                <div>
                    <h4 className="titles">Descripcion</h4>
                    <input
                        required
                        placeholder={productById.description}
                        // value={datos.description}
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
                            placeholder={productById.price}
                            // value={datos.price}
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
                            placeholder={productById.stock}
                            // value={datos.stock}
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
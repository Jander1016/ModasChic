/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import "./EditForm.css";
import { useProducts } from "../../hooks/useProducts";
import { useProductContext } from "../../context/productContext";

const EditFormOpen = ({ isOpen, onClose, id }) => {
  const { getProductsById, productById } = useProducts();
  const { getProducts } =useProductContext()

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

  useEffect(() => {
    getProductsById(id);
  }, [getProductsById, id]);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTitle(value);
  };
  const handleChangeDescription = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setDescription(value);
  };
  const handleChangePrice = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPrice(value);
  };
  const handleChangeStock = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setStock(value);
  };

  const handleChangeCategory = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCategory(value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "https://fakeapi-dusky.vercel.app/product/" + id;
    let product = {
      title,
      price,
      description,
      category,
      image,
      stock,
    };
    fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((respose) => respose.json())
      .then((res) => {
          getProducts();
          onClose();
          res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <h4 className="titles">Añadir imagen</h4>
          <input
            className="archive-input"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <h4 className="titles">Título de producto</h4>
          <input
            onChange={handleChangeTitle}
            placeholder={productById.title}
            className="title-input"
            name="title"
            type="text"
          />
        </div>
        <div className="category-selection">
          <h4>Categoria</h4>
          <select
            className="category-input"
            name="category"
            id="category"
            onChange={handleChangeCategory}
          >
            <option value="Sudaderas">Sudaderas</option>
            <option value="Camisetas">Camisetas</option>
            <option value="Pantalontes">Pantalontes</option>
          </select>
        </div>
        <div>
          <h4 className="titles">Descripción</h4>
          <textarea
            placeholder={productById.description}
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
              onChange={handleChangePrice}
              placeholder={productById.price}
              name="price"
              type="number"
            />
            <p>€</p>
          </div>
          <div className="prizeStock">
            <h4>Stock</h4>
            <input
              onChange={handleChangeStock}
              placeholder={productById.stock}
              name="stock"
              type="number"
            />
            <p>ud.</p>
          </div>
        </div>
        <div className="buttons-container">
          <button className="add" type="submit">
            EDITAR
          </button>
          <button className="cancel" onClick={onClose}>
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditFormOpen;

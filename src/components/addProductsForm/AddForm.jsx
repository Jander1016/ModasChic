/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AddForm.css";
import { v4 as uuidv4 } from "uuid";
import { useProductContext } from "../../context/productContext";

const AddForm = ({ isOpen, onClose }) => {
  const { getProducts } = useProductContext();

  const [datos, setDatos] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    stock: 0,
    id: uuidv4(),
  });

  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleChange = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      image,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "https://fakeapi-dusky.vercel.app/product/";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (response.ok) {
        console.log("Datos actualizados con éxito");
        getProducts();
        onClose();
      } else {
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
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="modal"
      >
        <div>
          <h4 className="titles">Añadir imagen</h4>
          <input
            className="archive-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <h4 className="titles">Título de producto</h4>
          <input
            name="title"
            className="title-input"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="category-selection">
          <h4>Categoria</h4>
          <select
            className="category-input"
            name="category"
            id="category"
            onChange={handleChange}
          >
            <option value="sudaderas">Sudaderas</option>
            <option value="camisetas">Camisetas</option>
            <option value="pantalones">Pantalones</option>
          </select>
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            className="description-input"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="prizeStock-container">
          <div className="prizeStock">
            <h4>Precio</h4>
            <input name="price" onChange={handleChange} type="number" />
            <p>€</p>
          </div>
          <div className="prizeStock">
            <h4>Stock</h4>
            <input name="stock" onChange={handleChange} type="number" />
            <p>ud.</p>
          </div>
        </div>
        <div className="buttons-container">
          <button type="submit" className="add">
            AGREGAR
          </button>
          <button className="cancel " onClick={onClose}>
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddForm;

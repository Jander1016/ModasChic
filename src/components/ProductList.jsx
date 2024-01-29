/* eslint-disable react/prop-types */

import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import OpenModalForm from "./OpenModalForm";
import EditFormOpen from "./editProductsForm/EditFormOpen";
import AddForm from "./addProductsForm/AddForm";
import "../pages/products.css";
import { useProductContext } from "../context/productContext";

function ProductRow({ product }) {
  const { isModalOpen, openModal, closeModal } = OpenModalForm();

  const {getProducts} = useProductContext()

  const productName = product.stock ? (
    product.title
  ) : (
    <span style={{ textDecorationLine: "line-through", color: "red" }}>
      {product.title}
    </span>
  );

  const handlerEdit = (event) => {
    event.preventDefault();
    openModal();
  };

  const handleDelete =  (product, e) => {
    e.preventDefault();
    if (!window.confirm("¿Desea eliminar este producto?")) {
      return;
    }
    const URL = "https://fakeapi-dusky.vercel.app/product/" + product.id;

    fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.assign(product)),
    })
      .then((respose) => respose.json())
      .then((res) =>{
          getProducts()
          res
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <tr className="product" key={product.id}>
        {/*   <th className="product__id" scope="row">
        {product.id}
      </th> */}
        <td>
          <figure>
            <img
              className="img img-thumbnail rounded mx-auto d-block"
              src={product.image}
              alt={product.title}
              loading="lazy"
              width={100}
              height={100}
            />
          </figure>
        </td>
        <td className="product__title">{productName}</td>
        <td className="product__category">{product.category}</td>
        <td className="product__price">{product.price}</td>
        <td className="product__stock">{product.stock}</td>
        <td className="product__actions text-center">
          <button
            onClick={handlerEdit}
            className="btn btn-primary"
            type="button"
          >
            <FaRegEdit />
          </button>
          <button
            onClick={(e) => handleDelete(product, e)}
            className="btn btn-danger"
            type="button"
          >
            <FaRegTrashAlt />
          </button>
        </td>
      </tr>
      {isModalOpen && 
        <EditFormOpen
          isOpen={isModalOpen}
          onClose={closeModal}
          id={product.id}
        />
      }
    </>
  );
}

function ProductList({ products }) {
  const { isModalOpen, openModal, closeModal } = OpenModalForm();

  return (
    <section className="container">
      <button className="btn__Addnew" onClick={openModal}>
        Agregar Producto
      </button>
      {isModalOpen && <AddForm isOpen={isModalOpen} onClose={closeModal} />}
      <table className="table caption-top table-reponsive table-dark">
        <caption className="dark">Lista de Productos</caption>
        <thead className="table-dark">
          <tr>
            {/*       <th scope="col">#</th> */}
            <th scope="col">Imagen</th>
            <th scope="col">Producto</th>
            <th scope="col">Categoria</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Accciones</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

function NoProductsResults() {
  return <p> No se encontraron productos para esta busqueda</p>;
}

export function Products({ products }) {
  const hasProducts = products?.length > 0;
  return hasProducts ? (
      <ProductList products={products} />
  ) : (
    <NoProductsResults />
  );
}

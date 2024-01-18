/* eslint-disable react/prop-types */

import { FaRegEdit,FaRegTrashAlt } from "react-icons/fa"

function ProductRow({ product }) {
  const productName = product.stock ? (
    product.title
  ) : (
    <span style={{ textDecorationLine: "line-through", color: "red"}}>{product.title}</span>
  );
    
  return (
    <tr className="product" key={product.id}>
      <th className="product__id" scope="row">
        {product.id}
      </th>
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
        <button className="btn btn-primary" type="button">
          <FaRegEdit />
        </button>
        <button className="btn btn-danger" type="button">
          <FaRegTrashAlt />
        </button>
      </td>
    </tr>
  );
}

function ProductList({ products }) {
  return (
    <section className="products container">
      <table className="table caption-top table-reponsive table-dark">
        <caption className="dark">Lista de Productos</caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
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

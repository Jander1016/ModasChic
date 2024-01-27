/* eslint-disable react/prop-types */
import Card from "../card/Card";
import "./cards.css";

function ProductCards({ products }) {
  return (
    <>
      <ul className="container-cards">
        {products &&
          products.map((productData) => (
            <li className="productItem" key={productData.id}>
              <Card product={productData} />
            </li>
          ))}
      </ul>
    </>
  );
}

function NoProductsResults() {
  return <p> No se encontraron productos</p>;
}

export function ProductsCards({ products }) {
  const hasProducts = products?.length > 0;
  return hasProducts ? (
    <ProductCards products={products} />
  ) : (
    <NoProductsResults />
  );
}

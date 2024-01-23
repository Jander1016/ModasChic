/* eslint-disable react/prop-types */
import Card from "../card/Card"

function ProductCards({products}) {
 
    return (
    <section className="products"> 
          <ul className="productsList">
            {
            products?.map((productData) =>{
                <li key={productData.id}>
                    <Card productData={productData} />
                </li>
            })
        }
            </ul>
     </section>
  )
}

function NoProductsResults(){
  return(
    <p> No se encontraron productos</p>
  )
}

export function ProductsCards({products}){
  const hasProducts = products?.length > 0
  return(
    hasProducts
      ?<ProductCards products={products} />
      :<NoProductsResults />
  )
}
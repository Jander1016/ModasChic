/* eslint-disable react/prop-types */

 function ProductList({products}) {
 
    return (
    <section className="products"> 
      {
        products?.map(product => (
        <article className="product" key={product.id }>
          <div>{ product.title }</div>
          <div>{ product.category }</div>
          {/* <p>{ product.description }</p> */}
          <div><img src={ product.image } alt={ product.title }/></div>
        </article>
        ))
       }
     </section>
  )
}

function NoProductsResults(){
  return(
    <p> No se encontraron productos para esta busqueda</p>
  )
}

export function Products({products}){
  const hasProducts = products?.length > 0
  return(
    hasProducts
      ?<ProductList products={products} />
      :<NoProductsResults />
  )
}
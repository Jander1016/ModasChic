import { useEffect } from "react"
import { useProducts } from "../hooks/useProducts"
import { ProductsCards } from "../components/cards/cards"

function ProductsFront() {
  const { products, loading, getProducts  } = useProducts()

  
  useEffect(() => {
    getProducts()
  }, [getProducts])
  
  return (
    <>
        {
          loading
          ? <article className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
             </article>
          :<ProductsCards products={products}/>
        } 
    </>
  )
}

export default ProductsFront
import { useEffect } from "react"
import { useProducts } from "../hooks/useProducts"
import { Products } from "../components/ProductList"

function ProductsDashboard() {
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
          :<Products products={products}/>
        } 
    </>
  )
}

export default ProductsDashboard
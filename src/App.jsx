import {Products} from './components/ProductList'
import { useProducts } from './hooks/useProducts'
import './App.css'
import { useEffect } from 'react'
// import { useEffect } from 'react'

function App() {
  const { products, loading, getProducts  } = useProducts()
  
  useEffect(() => {
    
    getProducts()
   
  }, [getProducts])
  

  return (
    <>
      <main> 
        {
          loading
          ? <article className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
             </article>
          :<Products products={products}/>
        } 
      </main>
    </>
  )
}

export default App

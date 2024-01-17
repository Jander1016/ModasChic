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
          ? <p>Cargando.....</p>
          :<Products products={products}/>
        } 
      </main>
    </>
  )
}

export default App

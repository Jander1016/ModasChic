//import {Products} from './components/ProductList'
import { useProducts } from './hooks/useProducts'
import './App.css'
import { useEffect } from 'react'
import { ProductsCards } from './components/cards/cards'
import ProductsDashboard from './pages/products'
import OpenModalForm from './components/OpenModalForm'
import AddForm from './components/addProductsForm/AddForm.jsx'
import Popup from "./components/Popup";
// import { useEffect } from 'react'
  
  

  export default function App() {
  const { products, loading, getProducts  } = useProducts()
  const { isModalOpen, openModal, closeModal } = OpenModalForm()
  
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
          :<ProductsCards products={products}/>
        } 
      </main>
    </>
  )
}

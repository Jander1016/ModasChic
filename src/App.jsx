import './App.css'
import ProductsDashboard from './pages/products'
import OpenModalForm from './components/OpenModalForm'
import AddForm from './components/addProductsForm/AddForm.jsx'
import Popup from "./components/Popup";

 





export default function App() {
  const { isModalOpen, openModal, closeModal } = OpenModalForm()
  
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

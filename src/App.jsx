import './App.css'
import ProductsDashboard from './pages/products'
import OpenModalForm from './components/OpenModalForm'
import AddForm from './pages/addProductsForm/AddForm.jsx'

function App() {
  const { isModalOpen, openModal, closeModal } = OpenModalForm()


  return (
    <>
      <button onClick={openModal}>Open Create Modal</button>

      <ProductsDashboard /> 

      <AddForm isOpen={isModalOpen} onClose={closeModal}></AddForm>

    </>
  )
}

export default App

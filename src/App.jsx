import './App.css'
import ProductsDashboard from './pages/products'
import { useState } from 'react'
import AddForm from './components/addProductsForm/AddForm'
import EditFormOpen  from './components/editProductsForm/EditFormOpen'
import OpenModalForm from './components/OpenModalForm'

function App() {
  const {isModalOpen, openModal, closeModal} = OpenModalForm()

  return (
    <>
        {
         <ProductsDashboard />
        } 
    {/* Botón para abrir modal de editar producto <button onClick={openModal}>Open Modal</button> */}

     <EditFormOpen isOpen={isModalOpen} onClose={closeModal}></EditFormOpen>
    </>
  )
}

export default App

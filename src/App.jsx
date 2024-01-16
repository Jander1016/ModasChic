import { useState } from 'react'
import AddForm from './components/addProductsForm/AddForm'
import EditForm  from './components/editProductsForm/EditForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddForm></AddForm>
      <EditForm></EditForm>
    </>
  )
}

export default App

/* eslint-disable no-unused-vars */
import { useCallback,  useState } from 'react'
import { productsList } from '../services/productsList'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getProducts = useCallback( async() =>{
    try {
      setLoading(true)
      setError(null)
      const newProducts = await productsList('http://localhost:3001/Products')
      setProducts(newProducts)
    } catch (e) {
      setError(e.errorMessage)
    } finally {
      setLoading(false)
    }    
  },[])

  const getProductsById = useCallback( async(id) =>{
      try {
        setLoading(true)
        setError(null)
        const newProducts = await productsList('http://localhost:3001/Products/'+ id)
        setProducts([newProducts])
      } catch (e) {
        setError(e.errorMessage)
      } finally {
        setLoading(false)
      }    
    },[])


  return { products, loading, getProducts, getProductsById, error }

}
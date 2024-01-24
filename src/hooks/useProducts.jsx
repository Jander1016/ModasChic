/* eslint-disable no-unused-vars */
import { useCallback,  useState } from 'react'
import { productsList } from '../services/productsList'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [productById, setProductById] = useState([])

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
        const newProduct = await productsList('http://localhost:3001/Products/'+ id)
        setProductById(newProduct)
      } catch (e) {
        setError(e.errorMessage)
      } finally {
        setLoading(false)
      }    
    },[])


  return { products, productById, loading, getProducts, getProductsById, error }

}
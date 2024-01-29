/* eslint-disable no-unused-vars */
import { useCallback,  useState } from 'react'
import { productsList } from '../services/productsList'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [productById, setProductById] = useState({})

  const getProducts = useCallback( async() =>{
    try {
      setLoading(true)
      setError(null)
      const newProducts = await productsList('https://fakeapi-dusky.vercel.app/product/')
      setProducts(newProducts)
    } catch (e) {
      setError(e.errorMessage)
    } finally {
      setLoading(false)
    }    
  },[])

  const getProductsById = useCallback( async(id) =>{
    if(id === undefined || id === null || id === ""){
      return;
    }
      try {
        setLoading(true)
        setError(null)
        const newProduct = await productsList('https://fakeapi-dusky.vercel.app/product/'+ id)
        setProductById(newProduct)
      } catch (e) {
        setError(e.errorMessage)
      } finally {
        setLoading(false)
      }    
    },[])


  return { products, productById, loading, getProducts, getProductsById, error }

}
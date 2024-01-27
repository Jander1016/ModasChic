export const productsList = async (url) =>{
  if(url === '') return null

  try {
    const response = await fetch(url)
    const products = await response.json()
    return products
  } catch (error) {
    throw new Error('Error carga Productos: ' + error.message)
  }
}
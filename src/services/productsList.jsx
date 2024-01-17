export const productsList = async (url) =>{
  if(url === '') return null

  try {
    const response = await fetch(url)
    const products = await response.json()

    return products?.map(product =>({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    }))
  } catch (error) {
    throw new Error('Error carga Productos: ' + error.message)
  }

}
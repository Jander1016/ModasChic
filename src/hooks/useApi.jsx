import { useState } from 'react'

const useApi = async (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  try {
    const fetchData = await fetch(url)
    const response = await fetchData.json();
  
    if (response) setData(response);
  } catch (error) {
    setError(error);
  }

  return { data, error }
}

export default useApi
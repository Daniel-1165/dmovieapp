import React, { useEffect, useState } from 'react'

const useFetch = (apiPath, queryTerm = '') => {
    
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    
   const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${API_KEY}&query=${queryTerm}`;

    useEffect(() => {
      async function fetchMovies(params) {
        fetch(url).then((res) => res.json())
        .then((jsonData) => setData(jsonData.results))
        .catch((error) => setErrorMessage(error.message));
      }
      fetchMovies()
    }, [url]);
  return (
    {data}
  
  )
}

export default useFetch
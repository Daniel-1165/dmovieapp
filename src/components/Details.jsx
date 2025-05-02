import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [movie, setMovie] = useState([]);

    
        const API_KEY = import.meta.env.VITE_API_KEY;
        const params = useParams();
        const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`;

        useEffect(() => {
          async function fetchMovie() {
            try {
              const response = await fetch(url);
              const jsonData = await response.json();
              setMovie(jsonData);
            } catch (error) {
              console.error("Error fetching movie:", error);
            }
          }
          fetchMovie();
        }, [url]);
    
    
    useEffect(() => {
        document.title = `${movie.title}`;
    });

    return (
   <main className='container'>
     <h5 className='text-danger my-4 py-3'>{movie.title}</h5>
        <div className="row">
            <div className="col-md-4">
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/150"} className="card-img-top" alt="Movie Poster" />
            </div>
            <div className="col-md-8">
                <h5 className='text-danger'>{movie.title}</h5>
                <p>{movie.overview}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Language:</strong> {movie.original_language}</p>
                <p><strong>Rating:</strong> {movie.vote_average} | {movie.vote_count} reviews</p>
                {movie.genre ? <p className='d-flex gap-3'>
                  {movie.genre.map((genre) => (
                    <span key={genre.id} className='badge bg-danger'>{genre.name}</span>
                  ))}
                </p>:''}
                <p className='mt-2'>
                  <i className='bi bi-star-fill text-warning'></i>{movie.vote_average} |
                  <i className='bi bi-people-fill text-success'></i>{movie.vote_count} reviews

                </p>
            </div>
        </div>
   </main>
  )
}

export default Details
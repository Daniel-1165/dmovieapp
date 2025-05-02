import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({movie}) => {
  const {title, vote_average, vote_count, id, poster_path} = movie;
  return (
    <div>
        <div className="col">
        
            <div className="card shadow-sm" title={title}>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://via.placeholder.com/150"} className="card-img-top" alt="Movie Poster" />
                <div className="card-body">
                    <h5 className="cardfix">{title}</h5>
                    <p className="cardfix2">{movie.overview}</p>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="card-text mb-0"><small className="text-muted">Release Date: {movie.release_date.split('-')[0]}</small></p>
                    <p className="card-text"><small className="text-muted">Language: {movie.original_language.charAt(0).toUpperCase() + movie.original_language.slice(1)}</small></p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">

                       <Link to={`/movie/${id}`} className='btn btn-sm btn-outline-primary stretched-link'>View Details</Link> 
                      <small>
                        <i className='bi bi-star-fill text-warning'></i>{vote_average} | {vote_count} reviews
                      </small> 
                    </div>
                </div>
                
            </div>
           
        </div>
    </div>
  )
}

export default Card
import { useState, useEffect } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import useFetch from "/hooks/useFetch";
// import movies from "../data/movies.json";


 


const Movielist = ({title, apiPath}) => {
  const {data: movies} = useFetch(apiPath);
  useEffect(() => {
    document.title = title;
  }, [title]);
 
const navigator = useNavigate();
  return (
    <div >
      <main className="container my-4">
        <h5 className="my-5 py-4">{title}</h5>
        {title == "Home of Movies" ? 
          <div className="bg-body-tertiary border rounded-3 p-3 my-4">
            <h3 className="bg-body-primary p-5 text-primary">Welcome to CineScope</h3>
            <p>Explore a wide range of movies and enjoy your cinematic journey!</p>
            <button className="btn btn-primary" onClick={() => navigator('/movies/upcoming')}>Wait List</button>
          </div>: null}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-2">
        {movies.map((movie) => (
          
            <Card movie={movie} key={movie.id} />
          
        ))}
      </div>
      </main>
    </div>
  )
};

export default Movielist;
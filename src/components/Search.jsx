import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import useFetch from '/hooks/useFetch' 
import Card from './Card'

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('query');
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search results for ${queryTerm}`;
  }, [queryTerm]);

  if (!queryTerm) {
    return <div>No search term provided.</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <main className="container my-4">
      <div className="my-5 py-2">Search Results for "{queryTerm}"</div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-2">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
};

export default Search
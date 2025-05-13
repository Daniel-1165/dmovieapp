import React from 'react'
import Movielist from '../components/Movielist'
import Search from '../components/Search'
import Nopage from '../components/Nopage'
import { Route, Routes } from 'react-router-dom'
import Details from '../components/Details'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Movielist title="Home of Movies" apiPath='movie/now_playing' />} /> 
            <Route path='movies/popular' element={<Movielist title="Popular Movies" apiPath='movie/popular' />} /> 
            <Route path='movies/top' element={<Movielist title="Top Rated Movies" apiPath='movie/top_rated' />} /> 
            <Route path='movies/upcoming' element={<Movielist title="Upcoming Movies" apiPath='movie/upcoming' />} /> 
            <Route path='search' element={<Search apiPath='search/movie' />} />
            <Route path='/movie/:id' element={<Details/>} />
        </Routes>
    </div>
  )
}

export default Allroutes
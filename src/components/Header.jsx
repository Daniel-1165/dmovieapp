import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigator = useNavigate();    
    const handleSearch = (e) => {
        e.preventDefault();
        const queryTerm = e.target.search.value;
        e.target.reset();
        return navigator(`/search?query=${queryTerm}`);
    };
  return (

    <div className="container-fluid mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">CineScope Movies</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies/top">Top Rated</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies/popular">Popular</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies/upcoming">Upcoming</NavLink>
                </li>
                </ul>
                <form className="d-flex" onSubmit={handleSearch} >
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" name="search" />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
            </div>
        </nav>
    </div>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

// returns back to home
const Navigation = (movie) => {
  return (
    <div className="main-navigation">
      <div className="main-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{movie.original_title}</p>
      </div>
    </div>
  )
}

export default Navigation;
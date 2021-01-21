import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../elements/NavBar';

// shows the header on each page
const Header = () => {
  return (
    <div className="movie-site-header">
      <div className="movie-site-header-content">
        <Link to="/"><img className="movie-site-logo" src="/../images/database_logo_green.png" alt="movie-site-logo" /></Link>
          <div className="nav-bar-styling">
            <NavBar />
          </div>
      </div>

    </div>
  )
}

export default Header;
// Header - Shows the header on each page

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../elements/NavBar';

const Header = () => {
  return (
    <div className="movie-site-header">
      <div className="movie-site-header-content">
<<<<<<< Updated upstream
        <Link to="/"><img className="movie-site-logo" src="../../images/filmdex_logo_large.png" alt="React Movie Logo" /></Link>
=======
        <Link to="/"><img className="movie-site-logo" src="../../images/database_logo_green.png" alt="React Movie Logo" /></Link>
>>>>>>> Stashed changes
        <div className="nav-bar-styling">
          <NavBar />
        </div>
      </div>

    </div>
  )
}

export default Header;
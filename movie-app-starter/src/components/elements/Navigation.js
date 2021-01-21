import React from 'react';
import { Link } from 'react-router-dom';

// returns back to home
const Navigation = (props) => {
  return (
    <div className="main-navigation">
      <div className="main-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  )
}

export default Navigation;
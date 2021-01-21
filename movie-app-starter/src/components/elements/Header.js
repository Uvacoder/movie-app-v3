import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../elements/NavBar';
//import './Header.css';
//import '../../styles.scss';

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/"><img className="rmdb-logo" src="/../images/database_logo_green.png" alt="react-logo" /></Link>
        <NavBar />
      </div>
      
    </div>
  )

}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
//import './Header.css';
//import '../../styles.scss';

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/"><img className="rmdb-logo" src="/../images/database_logo_green.png" alt="react-logo" /></Link>
        <button className="btn-main-nav">
					<span className="hamburger-icon">
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</span>
					<span className="sr-only">Menu</span>
				</button>
      </div>
      
    </div>
  )

}

export default Header;
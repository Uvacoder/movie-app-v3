// With custom items
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Link } from 'react-router-dom';
 
const NavBar = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <div className="side-home-button">
        <div className="side-home-logo">
            <Link to={'/'}><img src="/../images/home_button_icon.png" alt="Home Button Icon" /></Link>
        </div>
        <Link to={'/'}><div className="side-home-name">Home</div></Link>
    </div>,
    <div className="side-favourites-button">
        <div className="side-favourites-logo">
            <Link to={'/favourites'}><img src="/../images/favourite_icon.png" alt="Favourite Icon" /></Link>
        </div>
        <div className="side-favourites-link">
            <Link to={'/favourites'}><div className="side-favourites-name">Favourites</div></Link>
        </div>
    </div>,
    <div className="side-about-button">
        <div className="side-about-logo">
            <Link to={'/about'}><img src="/../images/about_icon.png" alt="About Icon" /></Link>
        </div>
        <div className="side-about-link">
            <Link to={'/about'}><div className="side-about-name">About</div></Link>
        </div>
    </div>,
  ];
 
  const title =  <Link to={'/'}><img className="side-logo" src="/../images/database_logo_green.png" alt='Movie Database Logo' /></Link>;
            
 
  return (
    <div className="nav-bar-styling">
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} />
    </div>
  );

};
export default NavBar;
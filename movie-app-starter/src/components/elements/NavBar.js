// With custom items
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
 
const NavBar = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <a target="_blank" href="someLink">
      Link1
    </a>,
    <a target="_blank" href="someLink">
      Link2
    </a>,
    <a target="_blank" href="someLink">
      Link3
    </a>,
  ];
 
  const title = <h1>Hello octo </h1>;
 
  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} />
    </div>
  );

};
export default NavBar;
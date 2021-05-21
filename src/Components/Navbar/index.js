  
import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
    <>
      <Nav >
        <NavLink style={{zIndex:"1302"}} to='/'>EventHub</NavLink>
        <NavIcon style={{zIndex:"1302"}} onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
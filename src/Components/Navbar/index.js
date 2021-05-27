  
import { LocalHospitalRounded } from '@material-ui/icons';
import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
    <>
      <Nav style={{position:"fixed",width:"100vw",zIndex:100,top:"0%"}}>
        <NavLink style={{zIndex:"1302"}} to='/'>EventHub</NavLink>
        {localStorage.getItem('loggedIn') == 'true' && <span>Hello, ${JSON.parse(localStorage.getItem('userBody')).fullName}</span> }
        <NavIcon style={{zIndex:"1302"}} onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
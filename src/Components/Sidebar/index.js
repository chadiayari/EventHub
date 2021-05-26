import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {

  const handleLogout = ( ) =>{
    localStorage.setItem('loggedIn','false')

    localStorage.setItem('userBody',JSON.stringify({}))
  }

  return (
    <SidebarContainer style={{zIndex:"1302"}} isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/place'>Our Places</SidebarLink>
        <SidebarLink to='/events'>Live Events</SidebarLink>
        <SidebarLink to='/about-us'>About Us</SidebarLink>
        <SidebarLink to='/eventform'>Create Event</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        {localStorage.getItem('loggedIn')&& localStorage.getItem('loggedIn').toString() === 'true'  ?<SidebarRoute onClick={handleLogout} to='/login'>LOGOUT</SidebarRoute> :<SidebarRoute to='/login'>LOGIN</SidebarRoute>}
      </SideBtnWrap>
    </SidebarContainer>
  );
};
  
export default Sidebar;
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
  return (
    <SidebarContainer style={{zIndex:"1302"}} isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/places'>Our Places</SidebarLink>
        <SidebarLink to='/'>Trends</SidebarLink>
        <SidebarLink to='/about-us'>About Us</SidebarLink>
        <SidebarLink to='/eventform'>Create Event</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/login'>LOGIN</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
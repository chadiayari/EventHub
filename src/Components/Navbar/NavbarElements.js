import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #000000;
  background-opacity: 50%;
  height: 80px;
  display: flex;
  justify-content: left;
  padding: 50px;
  font-weight: 400;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding:15px;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: normal;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
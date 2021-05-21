import styled from 'styled-components';
import ImgBg from '../../images/3.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),
    url(${ImgBg})no-repeat center center fixed;
  height: 100vh;
  background-position: center;
  background-size: cover;
  color:#000000;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 760px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: normal;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 0px 5px #603bbb;
  letter-spacing: 3px;
  font-weight:normal;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  border-radius: 15px;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  border: none;
  background: 
  #603bbb
  ;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #FFF;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #603bbb;
  }
`;
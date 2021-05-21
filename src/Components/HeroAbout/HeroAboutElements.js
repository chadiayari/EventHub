import styled from 'styled-components';
import ImgBg from '../../images/19.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
    url(${ImgBg}) no-repeat center center fixed;
  height: 60vh;
  background-position: center;
  background-size: cover;
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
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(1rem, 4vw, 3rem);
  font-weight:normal;
  letter-spacing: 3px;
 
`;



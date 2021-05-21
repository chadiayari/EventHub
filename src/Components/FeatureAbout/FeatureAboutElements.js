import styled from 'styled-components';
import FeaturePic from '../../images/10.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic}) no-repeat center center fixed;
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  h1 {
    font-size: clamp(2rem, 3vw, 5rem);
    color:#ffffff;
    font-weight:normal;
  }
  h2 {
    font-size: clamp(2rem, 2vw, 5rem);
    font-weight:normal;
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 1.5vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 2rem;
  border: none;
  background: #603bbb;
  border-radius:15px;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    color: #603bbb;
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
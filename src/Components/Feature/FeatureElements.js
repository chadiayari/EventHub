import styled from 'styled-components';
import FeaturePic from '../../images/featured3.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${FeaturePic})no-repeat center center fixed;
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
    font-weight:normal;
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 1.5rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 2rem;
  border: none;
  background: #603bbb;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 15px;
  &:hover {
    color: #603bbb;
    background: #ffffff;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
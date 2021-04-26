import styled from 'styled-components';


export const FeatureContainer = styled.div`
  
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
    color:#dda6ff;
  }
  h2 {
    font-size: clamp(2rem, 2vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 1.5vw, 2rem);
    color:#000;
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #dda6ff;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    color: #000;
    background: #f8e0ff;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
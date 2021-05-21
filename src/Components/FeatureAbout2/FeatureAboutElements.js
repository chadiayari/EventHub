import styled from 'styled-components';


export const FeatureContainer = styled.div`
  
  height: 50vh;
  max-height: 300px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  margin-top:-50px;
  margin-bottom:50px;
  h1 {
    font-size: clamp(2rem, 3vw, 5rem);
    color:#603bbb;
    font-weight:normal;
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
font-size: 1rem;
padding: 1rem 4rem;
border: none;
border-radius:15px;
background: #603bbb;
color: #fff;
transition: 0.2 ease-out;
&:hover {
  background: #FFF;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #603bbb;
  border:solid;
}
`;
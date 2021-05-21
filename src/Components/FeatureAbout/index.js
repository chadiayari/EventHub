import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureAboutElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>UNIQUE PLACES</h1>
      <h2>Your event where you least expect it.</h2>
      <p>At EventHub we work every day to find ever more memorable places for your events. Private places, unexploited or secret places, we go on a treasure hunt to allow you to surprise your guests.</p>
      <FeatureButton>LOGIN</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
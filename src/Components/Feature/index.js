import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Unexpected Places and Sparkling Inspiration.</h1>
      <p>Receive secret places and trends by email for your events.</p>
      <FeatureButton>Subscribe Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
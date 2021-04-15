import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Lieux inattendus et inspiration
pétillante.</h1>
      <p>Recevez par mail des lieux secrets et
des tendances pour vos événements.</p>
      <FeatureButton>Inscrivez-vous</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
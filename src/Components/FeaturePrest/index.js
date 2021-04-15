import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>CONFIANCE</h1>
      <p>Plus de 2500 clients nous font confiance pour l’organisation d’événements sur-mesure en toute sérénité.</p>
      <FeatureButton>Inscrivez-vous</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
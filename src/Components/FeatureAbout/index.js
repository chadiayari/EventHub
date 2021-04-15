import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureAboutElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>LIEUX UNIQUES</h1>
      <h2>Votre événement là où on ne l'attend pas.</h2>
      <p>Chez EventHub nous travaillons chaque jour à dénicher des lieux toujours plus marquants pour vos événements. Lieux de particuliers, lieux inexploités ou secrets, nous partons à la chasse aux trésors pour vous permettre de surprendre vos invités.</p>
      <FeatureButton>Connectez-vous</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
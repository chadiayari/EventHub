import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './HeroAboutElements';


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Réservez un lieu inattendu</HeroH1>
          <HeroP>des prestations à la carte</HeroP>
          
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
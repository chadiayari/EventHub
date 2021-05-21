import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
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
          <HeroH1>Book an unexpected place</HeroH1>
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
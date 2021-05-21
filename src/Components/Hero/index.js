import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';


const Hero = () => {


  return (
    <HeroContainer>
   
      <HeroContent>
        <HeroItems>
          <HeroH1>Sparkling Inspiration</HeroH1>
          <HeroP>Start Your Own Event Now</HeroP>
          <Link to="/eventform"><HeroBtn>Create Event</HeroBtn></Link>
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
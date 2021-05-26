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

  console.log(localStorage.getItem('loggedIn'))
  return (
    <HeroContainer>
   
      <HeroContent>
        <HeroItems>
          <HeroH1>Sparkling Inspiration</HeroH1>
          <HeroP>Start Your Own Event Now</HeroP>
         {localStorage.getItem('loggedIn')&& <Link to="/eventform"><HeroBtn>Create Event</HeroBtn></Link>}
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
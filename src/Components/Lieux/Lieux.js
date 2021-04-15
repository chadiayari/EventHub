import React from 'react'
import Hero from '../HeroPrest';
import Feature from '../FeaturePrest';
import Feature2 from '../FeaturePrest2';
import HeroSection from '../HeroSectionPrest/HeroSection';
import {homeObjTwo, homeObjThree,homeObjFour } from './Data';
function Lieux () {
return(
    <>
    <Hero />
    <HeroSection {...homeObjThree} />
    <Feature />
    <HeroSection {...homeObjTwo} />
    <Feature2 />
    <HeroSection {...homeObjFour} />
    </>
);

}
export default Lieux;

import React from 'react'
import Hero from '../HeroPrest';
import Feature from '../FeaturePrest';
import HeroSection from '../HeroSectionPrest/HeroSection';
import {homeObjTwo, homeObjThree } from './Data';
import Footer from '../Footer'
function Lieux () {
return(
    <>
    <Hero />
    <HeroSection {...homeObjThree} />
    <Feature />
    <HeroSection {...homeObjTwo} />
    <Footer/>

    </>
);

}
export default Lieux;

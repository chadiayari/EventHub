import React from 'react'
import Hero from '../HeroAbout';
import HeroSection from '../HeroSection/HeroSection';
import Feature from '../FeatureAbout';
import Feature2 from '../FeatureAbout2';
import Products from '../ProductsAbout';
import { productData } from '../ProductsAbout/data';
import {homeObjTwo, homeObjThree } from './Data';
function Propos () {
return(
    <>
    <Hero />
    <HeroSection {...homeObjThree} />
    <Feature />
    <Products data={productData} />
    <HeroSection {...homeObjTwo} />
    <Feature2 />
 
    </>

);

}
export default Propos;
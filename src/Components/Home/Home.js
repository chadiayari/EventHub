import React from 'react'
import Feature from '../Feature';
import Products from '../Products';
import Hero from '../Hero';
import { productData, productDataTwo } from '../Products/data';
function Home() {
    return(
        <>
      <Hero />
      <Products heading='Dernières Tendances' data={productData} />
      <Feature />
      <Products heading='Derniers Articles' data={productDataTwo} />
      </>
    );
    
}
export default Home;
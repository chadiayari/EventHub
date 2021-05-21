import React,{useState} from 'react'
import Feature from '../Feature';
import Products from '../Products';
import Hero from '../Hero';
import { productData, productDataTwo } from '../Products/data';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return(
        <>
            <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Products heading='LATEST TRENDS' data={productData} />
      <Feature />
      <Products heading='LATEST ARTICLES' data={productDataTwo} />
      <Footer/>
      </>
    );
    
}
export default Home;
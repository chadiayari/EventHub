import React,{useState,useEffect} from 'react'
import Feature from '../Feature';
import Products from '../Products';
import Hero from '../Hero';
import { productDataTwo } from '../Products/data';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import axios from 'axios'
 
function Home() {


  const [events,setEvents] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{

    console.log("local.sotage get item ",localStorage.getItem('loggedIn'))
    if(localStorage.getItem('loggedIn')){
      axios.post(`http://localhost:5000/api/evenement/recommended`,{
        tags : JSON.parse(localStorage.getItem('userBody')).interests
    })
        .then(res=> {
            console.log("recommenede events",res.data)
          setEvents(res.data)})
        .catch(err => console.error(err)) 
    }
  },[])

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return(
        <>
            <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Products heading='RECOMMENDED FOR YOU' data={events} />
      <Feature />
      <Products heading='LATEST ARTICLES' data={productDataTwo} />
      <Footer/>
      </>
    );
    
}
export default Home;
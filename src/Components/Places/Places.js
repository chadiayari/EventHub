import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Navbar from "../Navbar"


export default function Places(){
   
    const [places,setPlaces] = useState([])

    const myRef = React.createRef();


    const[index, setIndex] = useState(0), 

    handleTab = index =>{
         setIndex(index);
         const images = myRef.current.children;
         for(let i=0; i<images.length; i++){
           images[i].className = images[i].className.replace("active", "");
         }
         images[index].className = "active";
    }

    

    useEffect(()=>{
        axios.get('http://localhost:5000/api/lieu')
            .then(res=> {
                
                setPlaces(res.data)

            })
            .catch(err => console.error(err))
    },[])
    console.log("places",places)


    return(
        <>
        <Navbar />

        <div>
            <div className='searchPage__info'>
                            <p>62 places · 26 august to 30 august</p>
                            <h1>Nearby Places</h1>
                            <Button variant="outlined">Cancellation Flexibility</Button>
                            <Button variant="outlined">Type of place</Button>
                            <Button variant="outlined">Price</Button>
                            <Button variant="outlined">More filters</Button>
            </div>
            {places.map(place => {
                return (
                    <div className='searchPage'>  
                        

                        <SearchResult
                            img={place.img1}
                            location={place.address}
                            title={place.name}
                            description={place.type}
                            star={place.avisNumber}
                            price={place.prix}
                        />
                    </div>
                        )
                })
            }
        </div>
        </>
    )
}
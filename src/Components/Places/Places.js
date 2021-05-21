import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Places.scss';
import './Places.css';


export default function Places(){
   
    const [places,setPlaces] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/lieu')
            .then(res=> {
                
                setPlaces(res.data)

            })
            .catch(err => console.error(err))
    },[])
    console.log("places",places)
    return(
        <section class="menu section bd-container" id="menu">
            <span class="section-subtitle">Special</span>
            <h2 class="section-title">Select Your Place</h2>
            
            <div class="menu__container bd-grid">
                {places.map(place => {
                    return (
                    <div class="menu__content">
                        <img src="src/images/3.jpg" alt="" class="menu__img"></img>
                        <h3 class="menu__name">{place.name}</h3>
                        <span class="menu__detail">{place.address}</span>
                        <span class="menu__preci">{place.prix}</span>
                        <a href="#" class="button menu__button">add</a>
                    </div>)
                })}
            </div>
        </section>
    )
}
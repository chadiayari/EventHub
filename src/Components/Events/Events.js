import React,{useState, useEffect} from 'react'
import axios from 'axios';
import EventMap from "./EventMap";
import Navbar from "../Navbar"
import Sidebar from '../Sidebar';
import { userService} from '../../services/user.service'


export default function Events(){

    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [addedToRecommeneded,setAddedToRecommended] = useState([])
    

    const isInViewport=(el)=> {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }


 

    useEffect(()=>{
        window.addEventListener('scroll', trackScrolling)

         axios.get(`http://localhost:5000/api/evenement`)
             .then(res=> {
                setEvents(res.data)
             })
             .catch(err => console.error(err))

    },[])


    const trackScrolling = () => {
        console.log("tracking")
        events.forEach( (event,index)=> {
            console.log("testing ",index)
            if(document.getElementById(`event-${index}`) && isInViewport(document.getElementById(`event-${index}`))){
                console.log("started looking at event",index)
                setTimeout(()=>{

                    if(isInViewport(document.getElementById(`event-${index}`)) &&
                     event.tags.length> 0 && 
                     !addedToRecommeneded.includes(index)){
                        console.log("still looking at event",index)
                        console.log("sending request to add ",index)

                        userService.addInterest(localStorage.getItem('userId'),event.tags)
                            .then(res =>{
                                const newAddedToRecommended = addedToRecommeneded
                                newAddedToRecommended.push(index)
                                setAddedToRecommended(newAddedToRecommended)
                                localStorage.setItem('userBody',JSON.stringify(res.data))
                                console.log("updated interests")})
                            .catch(err => console.error(err))
                    }
                },5111)
            
            }
        })

      };

    const toggle = () => {
        setIsOpen(!isOpen);
      };


    return(
        <>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div style={{marginTop:"10%"}}>
        <p className="titre">LIVE EVENTS</p>
        {events.map((event,index) => {
            return (
                <div >
                    <div className='searchPage' id={`event-${index}`}>
                    <EventMap
                        id={event._id}
                        img={event.img}
                        category={event.category}
                        name={event.name}
                        type={event.type}
                        startDate={event.startDate}
                        endDate={event.endDate}
                        place={event.reservations.map(reservation => {return (
                            <div><p>{reservation.title}</p></div>
                        )})}
                        organizerLastName={event.organizerLastName}
                        organizerFirstName={event.organizerFirstName}
                    />
                    </div>
                </div>
            );
            })}
        </div>
        </>
    );
}

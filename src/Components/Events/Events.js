import React,{useState, useEffect} from 'react'
import axios from 'axios';
import EventMap from "./EventMap";
import Navbar from "../Navbar"
import Sidebar from '../Sidebar';


export default function Events(){

    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(()=>{
         axios.get(`http://localhost:5000/api/evenement`)
             .then(res=> {
                setEvents(res.data)
             })
             .catch(err => console.error(err))

    },[])

    const toggle = () => {
        setIsOpen(!isOpen);
      };


    return(
        <>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div style={{marginTop:"10%"}}>
        <p className="titre">LIVE EVENTS</p>
        {events.map(event => {
            return (
                <div >
                    <div className='searchPage'>
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

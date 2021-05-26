import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Navbar from "../Navbar"
import Search from './Search'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';



export default function Places(props){
   
    const [places,setPlaces] = useState([])
    const [showSearch, setShowSearch] = useState(false);
    const [startDate,setStartDate] = useState("N/A")
    const [endDate,setEndDate] = useState("N/A")
    const [reservations,setReservations] = useState([])
    const [mountCounter,setMountCounter] = useState(0)
    const [isOpen, setIsOpen] = useState(false);

    const refresh = ( ) =>{
        setMountCounter(mountCounter+1)
    }

      
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    
    useEffect(()=>{       
         axios.get(`http://localhost:5000/api/lieu?type=${localStorage.getItem('type')}&mode=getall`)
             .then(res=> {
                 setPlaces(res.data)
             })
             .catch(err => console.error(err))
    },[])

    const getPlacesByType = (type ) => {
        axios.get(`http://localhost:5000/api/lieu?type=${type}&mode=getByType`)
             .then(res=> {
                 setPlaces(res.data)
             })
             .catch(err => console.error(err))
    }

    const addReseravtion = (reservation) =>{
         const newReservations = reservations
         newReservations.push(reservation)
         setReservations(newReservations)
         refresh()
    }

    const finalizeEvent = (  ) =>{
        const event ={
            name:localStorage.getItem('eventName'),
            organizerFirstName : localStorage.getItem('firstName'),
            organizerLastName: localStorage.getItem('lastName'),
            type : localStorage.getItem('type'),
            startDate : startDate,
            endDate : endDate,
            numberOfAttendees : localStorage.getItem('number'),
            reservations,
            category : localStorage.getItem('category'),
            region :localStorage.getItem('place'),
            organizerEmail :localStorage.getItem('email'),
            tags : localStorage.getItem('tags').split(' ')
        }

        axios.post('http://localhost:5000/api/evenement/add',event)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }
    
    return(
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <div style={{marginTop:"20%"}}>
            <div className='searchPage__info'>
                <p>{places.length} places · {startDate} to {endDate}</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1>Select Places</h1>
                    <div style={{display:"flex",width:"40vw"}}>
                        <div style={{marginRight:'1%',width:"150%"}}>
                            <span>Reservations : </span>
                            {reservations.map(reservation => <span>{reservation.title}, </span>)}
                        </div>
                                        
                        <Link to="/success">
                        <Button variant="outlinedSizeLarge" onClick={()=>finalizeEvent()} style={{border:"solid", bordercolor:"black", transform : "translateX(-10%)"}}>
                            Finalize event
                        </Button>
                        </Link>  
                    </div>
                </div>
                
                <Button variant="outlined" onClick={()=>getPlacesByType('RESTAURANT')}>RESTAURANTS</Button>
                <Button variant="outlined" onClick={()=>getPlacesByType('HOTEL')}>HOTELS</Button>
                <Button variant="outlined" onClick={()=>getPlacesByType('DECORATION')}>DECORATION</Button>
                <Button variant="contained" onClick={()=>setShowSearch(!showSearch)}>Select Date</Button>
            </div>
            {showSearch && <div  style={{position:"absolute",top:"10%",left:"40%"}}><Search 
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setShowSearch={setShowSearch}
            /></div>}
            {places.map(place => {
                return (
                    <div className='searchPage'>  
                        <SearchResult
                            img={place.img1}
                            location={place.address}
                            title={place.name}
                            type={place.type}
                            description={place.type}
                            star={place.avisNumber}
                            price={place.prix}
                            updateReservation={addReseravtion}
                        />
                    </div>
                )                        
                })}
        </div>
        </>
    )
}
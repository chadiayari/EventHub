import React from 'react';
import './SearchResult.css';
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import axios from 'axios'


function SearchResult(props) {


    const handleddReservation = () =>{

        props.updateReservation({
            title :props.title,
            type : props.type
        })

    }

    const deletePlace = ( ) =>{
        console.log("props.id",props.id)
        axios.delete(`http://localhost:5000/api/lieu/${props.id}`,{
            headers:{
                "x-auth-token" : localStorage.getItem('token')
            }
        }) 
            .then(res => alert('place deleted'))
            .catch(err => console.error(err))
    }

    return (
        <div className='searchResult'>
            <img src={props.img} alt="" />
            <div className='searchResults__price'>
                        <p>{props.price}</p>
                    </div>

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{props.location}</p>
                    <h3>{props.title}</h3>
                    <p>____</p>
                    <p>{props.description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <p>{props.star}</p>
                        </p>
                    </div>
                    {
                        (JSON.parse(localStorage.getItem('userBody'))).isAdmin &&  <Button style={{transform : "translateX(290%)",backgroundColor:"red",color:"white"}} variant="contained" onClick={deletePlace}>Delete</Button>}
                    <Button style={{transform : "translateX(290%)"}} variant="contained" onClick={handleddReservation}>Add Reservation</Button>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
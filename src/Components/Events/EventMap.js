import React from 'react';
import './EventMap.css';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";


function EventMap(props) {


    return (
        <div className='searchResult'>
            <img src={props.img} alt="" />
            <div className='searchResults__price'>
                        <p>{props.place}</p>
                    </div>

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{props.category}</p>
                    <h3>{props.name}</h3>
                    <p>____</p>
                    <p>Start Date: {props.startDate}</p>
                    <p>End Date: {props.endDate}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <p>
                            <p>Organized by: {props.organizerFirstName} {props.organizerLastName}</p>
                        </p>
                    </div>
              
                    <Link to={`/event/${props.id}`}>
                    <Button style={{transform : "translateX(310%)"}} variant="outlined" >
                        Event Details
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventMap;
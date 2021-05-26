import React from 'react';
import './Event.css';
import Navbar from "../Navbar"
import axios from 'axios'
import { Link } from 'react-router-dom';



class Event extends React.Component{

  state = {
    event: {},
    index: 0
  };

  myRef = React.createRef();



  componentDidMount(){

    axios.get(`http://localhost:5000/api/evenement/${this.props.match.params.id}`)
        .then(res => {
            const tags=res.data.tags
            console.log("updating user ",localStorage.getItem('userId') , " with taggs :" ,tags  )
            this.setState({
                event : res.data
            })
            
            
            axios.post(`http://localhost:5000/api/users/update/${localStorage.getItem('userId')}`,{
                interests : tags
            })
                .then(res =>{
                    localStorage.setItem('userBody',JSON.stringify(res.data))
                    console.log("updated interests")})
                .catch(err => console.error(err))

           
        })
        .catch(err => console.error(err))



  }


  render(){
    const {event, index} = this.state;
    console.log("event in render",event)
    return(
        <>
        <Navbar />

        <div className="app" style={{marginTop:"10%"}}>
            <div className="details" key={this.state.event._id}>
              <div className="big-img">
               <img src={this.state.event.img} alt=""/> 
              </div>

              <div className="box">
                <div className="row">
                  <h2>{this.state.event.name}</h2> 
                </div>
                <p>{this.state.event.type}</p>
                <p>Organized by: {this.state.event.organizerFirstName} {this.state.event.organizerLastName}</p>
                <p>Number of attendees: {this.state.event.numberOfAttendees}</p>
                <i>
                <p>Starts on: {this.state.event.startDate}</p>
                <p>Ends on: {this.state.event.endDate}</p>
                </i>
                <a style={{margin:'1%',transform:'translateX(115px)'}}
                  id="emailMe" className="eventbutton" href={`mailto:${this.state.event.organizerEmail}?subject=?`}>
                    Contact Now
                </a>
                <Link to="/events">
                <button className="eventbutton">Other events</button>
                </Link>
                
              </div>
            </div>
          
      </div>
    </>
    );
  };
}

export default Event;

import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import {Link } from 'react-router-dom'

export class Form extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    type: '',
    category: '',
    place:'',
    date:'',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }; 

 

  handleDateChange = ( date) =>{
    this.setState({
      date
    })
  }


  render() {
    
    const { step } = this.state;
    const { firstName, lastName, email, number, type, category, place, date } = this.state;
    const values = { firstName, lastName, email, number, type, category, place, date};


    if(document.getElementById('navbar')){
      console.log("found")
      document.getElementById('navbar').style.display ="none"}


    switch (step) {
      case 1:
        return (
          

          <div>
            <Link to="/"><h1 style={{position:"fixed",top:"4%",left:"3%",zIndex:"1301"}}>EVENTHUB</h1></Link>
             <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
         
        );
      case 2:
        return (
          <div>
          <Link to="/"><h1 style={{position:"fixed",top:"4%",left:"3%",zIndex:"1301"}}>EVENTHUB</h1></Link>
          <FormPersonalDetails
            changeDate={this.handleDateChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Form;
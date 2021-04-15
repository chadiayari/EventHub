import React, { Component } from 'react';
import EventInfo from './EventInfo';
import ProfileInfo from './ProfileInfo';
import Confirm from './Confirm';
import Success from './Success';

export class Form extends Component {
    state = {
        step: 1,
        title: '',
        type: '',
        category: '',
        dat: '',
        name: '',
        email: '',
        phone: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, password, facebook, twitter, github } = this.state;
        const values = { name, email, phone, password, facebook, twitter, github };

        switch (step) {
            case 1:
                return (
                    <EventInfo
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <ProfileInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
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
                return (
                    <Success />
                );
        }
    }
}

export default Form

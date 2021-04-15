import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { title, type, category, date, time, name, email, phone }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Confirm</h1>
                <ul class="list-group">
                    <li class="list-group-item">Event Title: {title}</li>
                    <li class="list-group-item">Type: {type}</li>
                    <li class="list-group-item">Category: {category}</li>
                    <li class="list-group-item">Date: {date}</li>
                    <li class="list-group-item">Time: {time}</li>
                    <li class="list-group-item">Name: <a href={name}>{name}</a></li>
                    <li class="list-group-item">Email: <a href={email}>{email}</a></li>
                    <li class="list-group-item">Phone Number: <a href={phone}>{phone}</a></li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm

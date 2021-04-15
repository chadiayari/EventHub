import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="text-white">Event Created Successfully!</h1>
                </div>
            <br />
            <div className="text-center">
                <button className="btn btn-secondary">Continue</button>
            </div>
        </div>
        )
    }
}

export default Success

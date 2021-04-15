import React, { Component } from 'react'

export class ProfileInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Profile Info</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Phone Number</label>
                    <input type="phone" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>

                <br />

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

export default ProfileInfo

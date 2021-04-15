import React, { Component } from 'react';

export class EventInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Event Info</h1>
                <div className="form-group">
                    <label htmlFor="title">Event Title</label>
                    <input type="text" className="form-control" name="title" onChange={inputChange('title')} value={values.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input type="text" className="form-control" name="type" onChange={inputChange('type')} value={values.type} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" name="category" onChange={inputChange('category')} value={values.category} />
                </div>
                <div className="form-group">
                    <label htmlFor="dat">Date</label>
                    <input type="date" className="form-control" name="date" onChange={inputChange('date')} value={values.date} />
                </div>
                <div className="form-group">
                    <label htmlFor="dat">Time</label>
                    <input type="time" className="form-control" name="time" onChange={inputChange('time')} value={values.time} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default EventInfo

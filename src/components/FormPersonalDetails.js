import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.css';


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />

            <p>How many people will attend your event?</p>
            <Select
              id="number"
              onChange={handleChange('number')}
              defaultValue={values.number}
            >
              <MenuItem value={"Just Me"}>Just Me</MenuItem>
              <MenuItem value={"1-5 People"}>1-5 People</MenuItem>
              <MenuItem value={"6-10 People"}>6-10 People</MenuItem>
              <MenuItem value={"11-20 People"}>11-20 People</MenuItem>
              <MenuItem value={"More than 20"}>More than 20</MenuItem>
            </Select>

            <br />

            <p>What typee of event are you hosting?</p>
            <Select
            id="type"
              onChange={handleChange('type')}
              defaultValue={values.type}
            >
              <MenuItem value={"Conference"}>Conference</MenuItem>
              <MenuItem value={"Camp"}>Camp</MenuItem>
              <MenuItem value={"Party"}>Party</MenuItem>
              <MenuItem value={"Gala"}>Gala</MenuItem>
              <MenuItem value={"Meeting"}>Meeting</MenuItem>
            </Select>

            <br />

            <p>How would you categorize this event?</p>
            <Select
            id="category"
              onChange={handleChange('category')}
              defaultValue={values.category}
            >
              <MenuItem value={"Music"}>Music</MenuItem>
              <MenuItem value={"Business"}>Business</MenuItem>
              <MenuItem value={"Travel"}>Travel</MenuItem>
              <MenuItem value={"Lifestyle"}>Lifestyle</MenuItem>
              <MenuItem value={"Family"}>Family</MenuItem>
            </Select>  
            <br />

            <Button
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
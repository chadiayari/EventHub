import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './styles.css';


export function FormPersonalDetails(props) {
  
  const { values, handleChange } = props;

  const contiinue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };
    


  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-18'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.changeDate(date)
  };
  
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

            <p>What type of event are you hosting?</p>
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


            <p>Where are you willing to host your Event?</p>
            <Select
            id="place"
              onChange={handleChange('place')}
              defaultValue={values.place}
            >
              <MenuItem value={"Tunis"}>Tunis</MenuItem>
              <MenuItem value={"Sousse"}>Sousse</MenuItem>
              <MenuItem value={"Nabel"}>Nabel</MenuItem>
              <MenuItem value={"Sfax"}>Sfax</MenuItem>
              <MenuItem value={"Bizerte"}>Bizerte</MenuItem>
            </Select>
              <br />

              <p>When is your Event?</p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid>
              <KeyboardDatePicker
                margin="none"
                id="date"
                label="Event Date Picker"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              </Grid>
            </MuiPickersUtilsProvider>
              
            
              <br />

            <Button
              variant="contained"
              onClick={back}
            >Back</Button>

            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={contiinue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );

}

export default FormPersonalDetails;
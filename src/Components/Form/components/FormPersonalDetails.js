import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import UploadImg from './UploadImg'

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
    
  
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >

              <TextField
              placeholder="Enter Event's name"
              label="Event name"
              onChange={handleChange('eventName')}
              defaultValue={values.eventName}
              margin="normal"
              fullWidth
            />
            <br/>

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

            <p>What type of place are you looking for?</p>
            <Select
            id="type"
              onChange={handleChange('type')}
              defaultValue={values.type}
            >
              <MenuItem value={"RESTAURANT"}>RESTAURANT</MenuItem>
              <MenuItem value={"HOTEL"}>HOTEL</MenuItem>
            </Select>

            <br />

            <p>How would you categorize this event?</p>
            <Select
            id="category"
              onChange={handleChange('category')}
              defaultValue={values.category}
            >
              <MenuItem value={"Conference"}>Conference</MenuItem>
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
              <TextField
              placeholder="Enter Tags associated with your event"
              label="Tags"
              onChange={handleChange('tags')}
              defaultValue={values.tags}
              margin="normal"
              fullWidth
            />
            
              <br />

            <p>Upload image for your event</p>
            <UploadImg cardName="Input Image"
            onChange={handleChange('img')}
            />,

            <Button
              variant="outlined"
              onClick={back}
              style={{margin:"auto"}}
            >Back</Button>

            <br />
            
            <Button
              style={{margin:"auto"}}
              color="primary"
              variant="outlined"
              onClick={contiinue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );

}

export default FormPersonalDetails;
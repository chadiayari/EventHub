import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom'


export class Confirm extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { eventName, firstName, lastName, email, number, type, category, place, img}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Event's Name" secondary={eventName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Number of attendee" secondary={number} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Type of event" secondary={type} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Category of event" secondary={category} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Event's Place" secondary={place} />
              </ListItem>
            </List>
            <br />

            <Button
              style={{margin:"auto"}}
              variant="outlined"
              onClick={this.back}
            >Back</Button>
            <br />

            <center>
            <Link to='/place'>
            <Button
              color="primary"
              variant="outlined"
            >Confirm & Continue</Button>
            </Link>
            </center>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
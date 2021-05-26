import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom'


export class Success extends Component {

  state={
    data:[]
  }
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };


  render() { 
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <center>
            <h1>Event Created Successfully</h1>
            <p>Thank You For Your Submission</p>
            </center>
            <br />
            <div>
            <center>
            <Link to='/'>
            <Button
              color="primary"
              variant="contained">
                OKAY
            </Button>
            </Link>
            </center>
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
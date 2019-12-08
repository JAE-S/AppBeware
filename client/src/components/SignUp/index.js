// Import React 
// =========================================================
  import React, { Component } from 'react';
// Import Material UI Styles
// =========================================================
  import { makeStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
  import { Container, Grid,Button, LockOutlinedIcon, Typography, CssBaseline, TextField, FormHelperText, FormControlLabel, Checkbox  } from '@material-ui/core/';
// Import API
// =========================================================
  import API from '../../utils/API';
// Import Components
// =========================================================
  import Modal from "../Modals";
  import SignIn from "../SignIn";

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))  


class SignUp extends Component{
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
  }

  onFieldChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.name && this.state.phone && this.state.password && this.state.email){
      API.register({
        name: this.state.name,
        phoneNumber: this.state.phone,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  }
  
    render(){
      return (
        <Container maxWidth="xs">
          <CssBaseline />
          <div className={this.useStyles.paper}>
              
            <form className={this.useStyles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    type="text"
                    required
                    fullWidth
                    id="name-sign-up"
                    label="Name"
                    name="name"
                    onChange={this.onFieldChange}
                  />
                </Grid>
            
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    type="email"
                    required
                    fullWidth
                    id="email-sign-up"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.onFieldChange}
                  />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  id="phone-sign-up"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  onChange={this.onFieldChange}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  id="password-sign-up"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  onChange={this.onFieldChange}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={this.handleFormSubmit}
              onClick={this.handleFormSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>

                  <Modal 
                    modalTitle="Sign in to your Account"
                    openModal={<p style={{cursor: "pointer"}}>Already have an account? Sign in</p>}
                    modalBody={<SignIn/>}
                  />
            
              </Grid>
            </Grid>
          </form>
        </div>
      
      </Container>
    );
  };
}

export default SignUp;
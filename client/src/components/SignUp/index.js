// Import React 
// =========================================================
  import React, { Component } from 'react';
// Import Material UI Styles
// =========================================================
  import { makeStyles, withStyles } from '@material-ui/core/styles';
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

  const InputOverRideOutline = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#13BAC7', // Teal
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#13BAC7', // Teal
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#A9A9A9', // Grey
        },
        '&:hover fieldset': {
          borderColor: '#F7C533', // Yellow
        },
        '&.Mui-focused fieldset': {
          borderColor: '#13BAC7', // Teal
        },
      },
    },
  })(TextField);

// SignUp Class Component
// =========================================================
  class SignUp extends Component {
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
          email: this.state.email,
        })
        .then(
             setTimeout(() => {
            console.log(this)
            API.signIn({
            email: this.state.email,
            password: this.state.password
          })
          .then(res => {
            if(res.data.loggedIn){
              console.log("worked")
              window.location.pathname = '/homepage'
            }
            else{
              console.log("failed")
            }
          })
          .catch(err => console.log(err))}, 3000)
        )
        .catch(err => console.log(err))
      }
    }
      render(){ 
        return (
          <Container maxWidth="xs">
            <CssBaseline />
            <div>
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputOverRideOutline
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
                    <InputOverRideOutline
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
                  <InputOverRideOutline
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
                  <InputOverRideOutline
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
                  className="teal"
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={this.handleFormSubmit}
                >
                  Sign Up
                </Button>
              <Grid container justify="flex-end">
                <Grid item>

                    <Modal 
                      modalTitle="Sign in to your Account"
                      openModal={
                        <p style={{cursor: "pointer"}}>
                          Already have an account? Sign in
                        </p>
                      }
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
// AppBeware Sign Up
// Import React 
// =========================================================
import React, { Component } from 'react';

// Import Material UI components 
// =========================================================
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Field, reduxForm} from 'redux-form'

// Import Styles
// =========================================================
import Modal from "../Modals"
import SignIn from "../SignIn"
import API from '../../utils/API'


class SignUp extends Component{
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
  }
// Custom Styles 
// =========================================================
useStyles = makeStyles(theme => ({
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
}));  
    
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
            <Grid item xs={12} >
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

{/* <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl> */}

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
                  openModal="Already have an account? Sign in"
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
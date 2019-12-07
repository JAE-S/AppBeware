// AppBeware Sign Up
// Import React 
// =========================================================
import React from 'react';

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

const renderField = ({ input, label, type }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
)


// Custom Styles 
// =========================================================
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
}));

const SubmitRegistration = props => {
  const classes = useStyles();
  const {error, handleSubmit, submitting} = props
  

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={useStyles.paper}>
          
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Field
                variant="outlined"
                type="text"
                required
                fullWidth
                component={renderField}
                id="username-sign-up"
                label="Name"
                name="username"
              />
              
            </Grid>
          
            <Grid item xs={12}>
           
              <Field
                variant="outlined"
                type="email"
                required
                fullWidth
                component ={renderField}
                id="email-sign-up"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            
              
            </Grid>
          
          <Grid item xs={12}>
         
            <Field
              variant="outlined"
              type="text"
              required
              fullWidth
              component ={renderField}
              id="phone-sign-up"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
            />
          
            
          </Grid>
          
          <Grid item xs={12}>
         
            <Field
              variant="outlined"
              type="password"
              required
              fullWidth
              component ={renderField}
              id="password-sign-up"
              label="Password"
              name="password"
              autoComplete="password"
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
            className={classes.submit}
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
}

export default reduxForm({
  form: 'registrationForm'
})(SubmitRegistration)

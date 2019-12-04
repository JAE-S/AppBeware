// AppBeware Sign In
// Import React 
// =========================================================
import React, {Component} from 'react';
import API from '../../Utils/API'

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

// Import Styles
// =========================================================

import Modal from "../Modals"
import SignUp from "../SignUp"



// Custom Styles 
// =========================================================

<<<<<<< HEAD
=======
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },

dialog: {
    width: '80%',
    maxHeight: 435,
  },

  

}));
>>>>>>> c6316b3808ab8aa8dd9717efb9c921f77b8c9978

class signIn extends Component{
  state = {
    username: '',
    password: '',
  }

  makeStyles = theme => ({
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });
  handleInputchange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

<<<<<<< HEAD
  handleFormSubmit = event => {
    event.preventDefault();
    API.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      if(res.data.loggedIn){

      }
    })
  }

  
  render(){
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.makeStyles.paper}>
          <Avatar className={this.makeStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={this.makeStyles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              onChange={this.handleInputchange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleInputchange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.makeStyles.submit}
              onClick={this.handleFormSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                
              <Modal 
                    modalTitle="Create An Account"
                    openModal="Don't have an account? Sign Up"
                    modalBody={<SignUp/>}
                    
                  />
            
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
  
        </Box>
      </Container>
    );
              }
            }

export default signIn
=======
  return (
    <Container  maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember"  />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            
            <Grid item>
              
             <Modal 
                  modalTitle="Create An Account"
                  openModal="Don't have an account? Sign Up"
                  modalBody={<SignUp/>}
                  
                />
          
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}
>>>>>>> c6316b3808ab8aa8dd9717efb9c921f77b8c9978

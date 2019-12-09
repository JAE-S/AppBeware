// Import React 
// =========================================================
  import React, {Component} from 'react';
  import API from '../../utils/API'
// Import Material UI Styles
// =========================================================
  import { makeStyles, withStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
  import { Container, Button, CssBaseline, TextField, Grid } from '@material-ui/core/';
// Import Material UI Icons
// =========================================================
  import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Import Components
// =========================================================
  import Modal from "../Modals"
  import SignUp from "../SignUp"

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

// SignIn Class Component
// =========================================================
  class signIn extends Component{
    state = {
      email: '',
      password: ''
    }

    makeStyles = theme => ({
      palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
      },
      },
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

    handleFormSubmit = event => {
      event.preventDefault();
      API.signIn({
        email : this.state.email,
        password: this.state.password
      })
      .then(res => {
        if(res.data.loggedIn){

        }
      })
    }

    render(){
      return (
        <Container  maxWidth="xs">
          <CssBaseline />
          <div className={this.makeStyles.paper}>
            <form className={this.makeStyles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                <InputOverRideOutline
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleInputchange}
                />
                </Grid>
                  <Grid item xs={12}>
                  <InputOverRideOutline
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
                    {/* </inputStyles> */}
                  </Grid>
                </Grid>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="teal"
                  onClick={this.handleFormSubmit}
                >
                  Sign In
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                                
                  <Modal 
                        modalTitle="Create An Account"
                        openModal={
                          <p style={{cursor: "pointer"}}>
                            Don't have an account? Sign Up
                          </p>
                        }
                        modalBody={<SignUp/>}  
                  />
              
                </Grid>
              </Grid>
            </form>
          </div>
        
        </Container>
      );
    }
  }

  export default signIn

// Import React 
// =========================================================
  import React, {Component} from 'react';
  import { connect } from 'react-redux';
  import { push } from 'connected-react-router'
  import { userActions } from '../../Store/Actions/auth';
// Import Material UI Styles
// =========================================================
  import {  withStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
  import { Container, Button, CssBaseline, TextField, Grid } from '@material-ui/core/';
// Import Material UI Icons
// =========================================================
  // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

    constructor(props) {
      super(props);
      this.handleInputchange= this.handleInputchange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        email: '',
        password: '',
        userInfo: {},
        submitted: false,
      };
    }
  
    updateUserState = () => {
      this.setState({
        userInfo: {
          email: this.state.email,
          password: this.state.password
        }
      })
    }

    handleInputchange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log("Congrats. You pressed a button");

      this.setState({ 
        submitted: true,
        userInfo: {
          email: this.state.email,
          password: this.state.password
        }
      },
      () => {
        console.log(this.state.userInfo);
        if (this.state.userInfo.email && this.state.userInfo.password) {
         
            this.props.login(this.state.userInfo);

        }
      });

  }

    render(){

      const { loggingIn } = this.props;
      const { email, password, submitted } = this.state;

      return (
        <Container  maxWidth="xs">
          <CssBaseline />
          <div className={this.makeStyles.paper}>
            <form className={this.makeStyles.form} onSubmit={this.handleSubmit}>
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
                 {/* // TODO:////////////////// */}
                  {submitted && !email &&
                            <div>Email is required</div>
                        }
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
                    {/*  // TODO://////////////////  */}
                     {submitted && !password &&
                            <div>Password is required</div>
                        }
                  </Grid>
                </Grid>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="teal"
                  onSubmit={this.handleLoginSubmit}
                >
                  Sign In
                </Button>
                {loggingIn && "Loading..."} 
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
  
  function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,

     // TODO://////////////////
    // logout: userActions.logout
};

export default connect(mapState, actionCreators)(signIn);
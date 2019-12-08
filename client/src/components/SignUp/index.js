// Import React 
// =========================================================
  import React from 'react';
// Import Material UI Styles
// =========================================================
  import { makeStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
  import { Container, Button, CssBaseline, TextField, Grid } from '@material-ui/core/';
  import FormHelperText from '@material-ui/core/FormHelperText';
// Import Material UI Icons
// =========================================================
  import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Import Custom Components
// =========================================================
  import Modal from "../Modals"
  import SignIn from "../SignIn"


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

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={useStyles.paper}>
          
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                // value={this.state.username}
                // onChange={this.handleInputChange}
                id="username-sign-up"
                label="Name"
                name="username"
              />
              
            </Grid>
          
            <Grid item xs={12}>
           
              <TextField
                variant="outlined"
                required
                fullWidth
                // value={this.state.email}
                // onChange={this.handleInputChange}
                id="email-sign-up"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
    
            </Grid>

{/* <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl> */}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                // value={this.state.password}
                // onChange={this.handleInputChange}
                id="password-sign-up"
                autoComplete="current-password"
              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="teal"
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
}

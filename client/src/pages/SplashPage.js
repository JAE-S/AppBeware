// Import React 
// =========================================================
  import React from "react";
// Components
// =========================================================
   import Wrapper from "../components/Wrapper"
   import SignIn from "../components/SignIn"
   import SignUp from "../components/SignUp"
    import Footer from "../components/Footer"
  import SignInGoogle from "../components/SignInGoogle"
  import googleSignIn from '../assets/images/googleSignIn.png';
   import Modal from "../components/Modals"
// Import Material UI components 
// =========================================================
   import { makeStyles } from '@material-ui/core/styles';
   import PropTypes from 'prop-types';
   import clsx from 'clsx';
   import { withStyles } from '@material-ui/core/styles';
   import Avatar from '@material-ui/core/Avatar';
   import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
   import { Paper, Grid, Button} from '@material-ui/core';
   import Typography from '@material-ui/core/Typography';
// Assets
// =========================================================
    import GoogleImage from "../assets/images/btn_google_signin_light_normal_web@2x.png"
    import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
    import API from "../utils/API";

// Import Styles
// =========================================================
    import "../assets/styling/appStyle.css"

// Custom Styles 
// =========================================================
const useStyles = makeStyles(theme => ({
      paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: "grey",
        minHeight: "70vh", 
        // background: "grey",
        margin: 8,
        display: "flex", 
        flexDirection: "column"
      },
      title: {
          // borderBottom: "2px solid white", 
          fontSize: "38px",
          paddingBottom: 10,
          justifyContent: "center", 
          paddingTop: "60px"
      },
    typography: {
        padding: theme.spacing(2),
      },
      Wrapper: {

      }


}));


function SplashPage() {
  
  const classes = useStyles(); 

  return (
    <div>
    <Wrapper style={{ minHeight: "100vh", maxWidth: "1200px", display: "flex"}}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={8}>
                <Grid item xs={6} sm={6}>
                  <img alt="AppBeware herologo" src={ABLogo} style={{ width: "110%"}}/>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <h1 className={classes.title}>AppBeware</h1>
                </Grid>
              </Grid>
              <h3 style={{ padding: 20 }} className={classes.about} className="splash">
                AppBeware is a crowdsource platform that empowers the community to raise awareness about the potential dangers of apps.
              </h3>

              <Grid item md={12}>
                <Modal 
                  modalIcon={
                    <div>
                      <Avatar className={classes.avatar}>
                        <LockOutlinedIcon /> 
                      </Avatar> 
                    </div>
                  }
                  modalTitle={
                    <div>
                      <Typography component="h1" variant="h5">
                        Sign In
                      </Typography>
                    </div>
                  }
                  openModal={<Button  className="teal login" >Sign In</Button>}
                  modalBody={<SignIn/>}
                  
                />
              </Grid>
              <Grid item md={12}>
                
                <Modal 
                 modalIcon={
                    <div>
                      <Avatar className={classes.avatar}>
                        <LockOutlinedIcon /> 
                      </Avatar>
                    </div>
                 } 
                  modalTitle={
                    <div>
                      <Typography component="h1" variant="h5">
                        Sign up
                      </Typography>
                    </div>
                  }
                 openModal={<Button variant="outlined" className="teal-signup login" >Sign Up</Button>}
                 modalBody={<SignUp/>}
                  
                />
              </Grid>
              {/* GOOGLE SIGN - FUTURE DEVELOPMENT */}
              {/* <Grid item md={12}> 
                <h3 style={{ padding: 20 }} className={classes.or } className="splash">
                  or
                </h3>
              
              <div>
                 <Modal 
                  modalTitle={
                    <div style={{ display: "flex", flexDdirection: "row", alignItems: "center", justifyContent: "center"}}>
                      <img src={googleSignIn} style={{ width: "70%", }} alt="Google Sign In" />
                    </div>}
                  openModal={
                    <img className={classes.sButtons} 
                      alt="Google Sign In Button" src={ GoogleImage }
                      style={{ backgroundColor: "transparent", height: 60}}/>
                    }
                  modalBody={<SignInGoogle/>}
                />
                </div>
              </Grid> */}
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Placeholder for video.</Paper>
        </Grid>
      </Grid>
    </Wrapper>
    <Footer/>
    </div>
  )

}

export default SplashPage

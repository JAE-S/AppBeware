// Import React 
// =========================================================
  import React from "react";
// Import Material UI Styles
// =========================================================
  import { makeStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
  import Avatar from '@material-ui/core/Avatar';
  import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
  import { Paper, Grid, Button, Typography} from '@material-ui/core';
// Components
// =========================================================
   import Wrapper from "../components/Wrapper"
   import SignIn from "../components/SignIn"
   import SignUp from "../components/SignUp"
   import Footer from "../components/Footer"
   import Modal from "../components/Modals"
   import Toasties from "../components/Toasties"

import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
// Assets
// =========================================================
  import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
  // ******************** Future development ******************** //
  // import GoogleImage from "../assets/images/btn_google_signin_light_normal_web@2x.png"
  // import SignInGoogle from "../components/SignInGoogle"
  // import googleSignIn from '../assets/images/googleSignIn.png';

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
          margin: 8,
          display: "flex", 
          flexDirection: "column", 
          boxShadow: "none",
        },
        title: {
            fontSize: "38px",
            justifyContent: "center", 
            // paddingTop: "60px"
            margin: 0,
        },
         header: {
            fontSize: "16px",
            paddingBottom: 5,
            justifyContent: "center", 
            paddingTop: "5px", 
        },
        
        typography: {
            padding: theme.spacing(2),
          },
  }));

// Export SplashPage
// =========================================================
function SplashPage() {
  
  const classes = useStyles(); 

  return (
    <div>
    <Wrapper style={{ minHeight: "calc(100vh - 64px)", maxWidth: "1200px", display: "flex"}}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
            {/* <Paper className={classes.paper}> */}
              <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                {/* <Grid item xs={12}> */}
                  <img alt="AppBeware herologo" src={ABLogo} style={{ width: "80%"}}/>
                {/* </Grid> */}
                {/* <Grid item xs={12}> */}
                  <h1 align="center" className={classes.title}>AppBeware</h1>
                 
                {/* </Grid> */}
              </Grid>
                <div className="headerBanner" style={{borderRadius: "4px"}}>
                  <h2 align="center" style={{padding: "2px", color: "#f7f7f7"}}>
                    +6 Million Apps. The Danger is Real...
                  </h2>
                </div>
              <h3 className="splash">
                AppBeware is a crowdsource platform that empowers the community to raise awareness about the potential dangers of apps.
              </h3>
          <Grid container >
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                
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
            {/* </Paper> */}
        </Grid>
            
          {/* <Paper className={classes.paper}> */}
            {/* <h1 className={classes.header}>The Dangers are real</h1> */}
           
        <Toasties />
      </Grid>
    </Wrapper>
    <Footer/>
    </div>
  )
}

export default SplashPage

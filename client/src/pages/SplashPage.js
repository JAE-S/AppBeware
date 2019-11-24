// Import React 
// =========================================================
  import React from "react";
// Components
// =========================================================
   import Wrapper from "../components/Wrapper"
   import SignIn from "../components/SignIn"
   import SignUp from "../components/SignUp"
   import Modal from "../components/Modals"
// Import Material UI components 
// =========================================================
   import { makeStyles } from '@material-ui/core/styles';
   import { Paper, Grid} from '@material-ui/core';
// Assets
// =========================================================
    import GoogleImage from "../assets/images/btn_google_signin_light_normal_web@2x.png"
    import ABLogo from "../assets/images/AppBeware_icon_shadow.png"

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
}));

function SplashPage() {

  const classes = useStyles(); 

  return (
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
              <h3 style={{ padding: 20 }} className={classes.about}>
                AppBeware is a crowdsource platform that empowers the community to raise awareness about the potential dangers of apps.
              </h3>
              <Grid item md={12}>
                <Modal 
                  modalTitle="Sign In"
                  openModal="Sign In"
                  modalBody={<SignIn/>}
                  modalButton1="Submit"
                />
              </Grid>
              <Grid item md={12}>
                <Modal 
                  modalTitle="Create An Account"
                  openModal="Sign Up"
                  modalBody={<SignUp/>}
                  modalButton1="Submit"
                />
              </Grid>
              <Grid item md={12}>
              <h3 style={{ padding: 20 }} className={classes.or}>OR</h3>
              <div><img className={classes.sButtons} style={{ backgroundColor: "transparent", height: 60}} alt="Google Sign In Button" src={ GoogleImage }/></div>
              </Grid>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Placeholder for video.</Paper>
        </Grid>
      </Grid>
    </Wrapper>
  )

}

export default SplashPage



// Import React
// =========================================================
   import React from 'react';
// Import Material UI Styles
// =========================================================
   import { makeStyles } from '@material-ui/core/styles';
   import { Link } from 'react-router-dom'
// Import Material UI Components
// =========================================================
   import { CssBaseline, Typography, Container } from '@material-ui/core/';


   // Styles
// =========================================================
    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexDirection: 'column',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      footer: {
        color: "#f7f7f7",
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        textAlign: 'center',
        textDecoration: "none"
      },
      link: {
        textDecoration: "none", 
        color: "#f7f7f7"
      }, 
      // splashFooter: {
      //   color: "#56585D",
      //   padding: theme.spacing(3, 2),
      //   marginTop: 'auto',
      //   backgroundColor: "transparent",
      //   textAlign: 'center',
      //   textDecoration: "none"
      // },
     splashLink: {
      textDecoration: "none!important", 
      color: "#56585D"
     }


    }));

// function Copyright() {
//   return (
     

//   )}

  export function SplashFooter() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="sm" className={classes.splashLink}>
            <Typography  justify="center" variant="body2">
              {' © '}
              <Link className={classes.splashLink} color="inherit" to="/Homepage">
                AppBeware
              </Link>{' 2019 | '}
              
              <Link className={classes.splashLink} color="inherit" to="/Disclaimer">
                Disclaimer
              </Link>

              {/* {' | Sign Out'} */}
            </Typography>
          </Container>
        </footer>
      </div>
    );
  }

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
        <footer className={classes.footer} style={{backgroundColor: "#56585D"}}>
        <Container maxWidth="sm">
          <Typography  justify="center" variant="body2">
            {' © '}
            <Link className={classes.link} color="inherit" to="/Homepage">
              AppBeware
            </Link>{' 2019 | '}
            
            <Link className={classes.link} color="inherit" to="/Disclaimer">
              Disclaimer
            </Link>
            {/* {' | Sign Out'} */}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

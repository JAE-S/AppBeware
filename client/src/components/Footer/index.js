

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
        backgroundColor: "#56585D",
        textAlign: 'center',
        textDecoration: "none"
      },
    }));

function Copyright() {
  return (
     
  <Typography  justify="center" variant="body2">
      {' © '}
      <Link style={{ textDecoration: "none", color: "#f7f7f7"}} color="inherit" to="/Homepage">
        AppBeware
      </Link>{' 2019 | '}
      
      <Link style={{ textDecoration: "none", color: "#f7f7f7"}} color="inherit" to="/Disclaimer">
        Disclaimer
      </Link>

      {' | Sign Out'}
    </Typography>
  )}

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
        <footer className={classes.footer}>
        <Container maxWidth="sm">
         
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

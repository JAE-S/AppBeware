
// Import React
// =========================================================
   import React from 'react';
// Import Material UI Styles
// =========================================================
   import { makeStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
   import { CssBaseline, Typography, Container, Link} from '@material-ui/core/';


function Copyright() {
  return (
     
  <Typography  justify="center" variant="body2" color="textSecondary">
      {' © '}
      <Link color="inherit" To="/Homepage">
        AppBeware
      </Link>{' 2019 | '}
      
 <Link color="inherit" To="/TermsConditions">
        Disclaimer
      </Link>

      {' | Sign Out'}
    </Typography>
  )}
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
        textAlign: 'center'
      },
    }));

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

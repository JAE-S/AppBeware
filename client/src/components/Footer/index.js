import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {' © '}
      <Link color="inherit" href="https://appbeware.com/">
        AppBeware
      </Link>{' 2019 | '}
      
 <Link color="inherit" href="../TermsConditions">
        Disclaimer
      </Link>


      {' | Sign Out'}
    </Typography>
  );
}

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
    textcolor: "#ffffff",
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: "#56585D",
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

// Import React
// =========================================================
    import React from 'react';
// Import Material UI Styles
// =========================================================
    import { makeStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
import { Card, CardActions, CardContent, Button, Typography, Grid} from '@material-ui/core/';

const useStyles = makeStyles({
  card: {
    maxWidth: "300px", 
    width: "100%",
    margin: "10px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttonSpacing: {
    display: "block",
    margin: "0 auto",
    background: "red", 
    color: "white"
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card align="center" className={classes.card}>
      <CardContent>
      <Grid container spacing={4}>
            <Grid item sm={4}>
                <div style={{ height: "80px", 
                              width: "80px", 
                              backgroundColor: "#4FBBC1", 
                              borderRadius: "10px"}}
                /> 
            </Grid>
            <Grid item sm={8}>
                <Typography variant="h6" component="h2">
                    {props.title}
                </Typography>
                <CardActions >
                <Button className={classes.buttonSpacing}size="small">View Apps </Button>
            </CardActions>
            </Grid>
 
        </Grid>
        </CardContent>
    


    
    </Card>
  );
}
// Import React
// =========================================================
    import React from 'react';
// Import Material UI Styles
// =========================================================
    import { makeStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
    import { Card, CardActions, CardContent, Grid} from '@material-ui/core/';

// Styling
// =========================================================
  import "./style.css"
  const useStyles = makeStyles({
    card: {
      maxWidth: "280px", 
      width: "100%",
      margin: "5px"
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
  });

// Export SimpleCard -> Category Cards
// =========================================================
  export default function SimpleCard(props) {
    const classes = useStyles();

    return (
      <Card align="center" className={classes.card}>
        <CardContent>
        <Grid container 
              spacing={1}
              direction="row"
              justify="flex-start"
              alignItems="center"
        >
              <Grid item sm={4}>
                  <img 
                    src={props.imageUrl} 
                    alt={props.title}
                    style={{ height: "80px", 
                                width: "80px", 
                                backgroundColor: "#4FBBC1", 
                                borderRadius: "10px"}}
                  /> 
              </Grid>
              <Grid item sm={8}>
                    <h3 style={{marginBottom: "5px"}} align="left">{props.title}</h3>
                <CardActions>
                  <div align="left" id="container">
                    <button className="learn-more"
                            size="small"
                            onClick={() => props.viewCategory(props.catId)}
                    >
                      <span className="circle">
                        <span className="icon arrow"></span>
                      </span>
                      <h4><span className="button-text">View Category</span></h4>
                    </button>
                  </div>
                </CardActions>
              </Grid>
  
          </Grid>
          </CardContent>
      </Card>
    );
  }
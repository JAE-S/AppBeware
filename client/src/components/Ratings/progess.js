import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress, Grid }from '@material-ui/core/';
import "./style.css";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#A9A9A9', 0.5),
    borderRadius: 8,
  },
  bar: {
    backgroundColor: '#FC4A1A',
    borderRadius: 8,
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function LinearProgressBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root}>

        <Grid item xs={12} sm={9}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={props.ratingScale}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          {props.reviewCount}
        </Grid>
      
      </Grid>
    </React.Fragment>
  );
}
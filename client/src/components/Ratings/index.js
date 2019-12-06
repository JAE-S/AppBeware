// Import React + Node Pacakegs
// =========================================================
  import React from 'react';
  import PropTypes from 'prop-types';
// Import Material UI Styles
// =========================================================
  import { withStyles, lighten, makeStyles } from '@material-ui/core/styles';
// Import Material UI Components 
// =========================================================
  import Rating from '@material-ui/lab/Rating';
  import { Tooltip, Box, Grid, LinearProgress } from '@material-ui/core/';
// Import Material UI Icons
// =========================================================
  import { Brightness1Rounded } from '@material-ui/icons/';
  import "../../assets/styling/appStyle.css"

// Styling + labels 
// =========================================================
  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
    rating1: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  })(Rating);

  const labels = {
      1: '1+',
      2: '2+',
      3: '3+',
      4: '4+',
      5: '5+',
    };
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      margin: {
        margin: theme.spacing(1),
      },
    }));
    

  function IconContainer(props) {
    const { value, ...other } = props;
    return (
      <Tooltip title={labels[value] || ''}>
        <span {...other} />
      </Tooltip>
    );
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
function getLabelText(value) {
  return `${value} ${value !== 1 ? 's' : ''}`;
}

// Export function -> CustomizedRatings (Choose rating)
// =========================================================
  export function CustomizedRatings() {
      const value = 2;
      const [hover, setHover] = React.useState(-1);
    return (
      <div>
        {/* <Box component="fieldset" mb={3} borderColor="transparent"> */}
        <Grid container
                direction="row" 
                justify="center" 
                alignItems="center"
          >
          <Grid item xs={3}> 
          <h5>Mild Concern</h5>
          </Grid>

          <Grid align="center" item xs={6}> 
          <button><StyledRating
              name="customized-color"
              value={1}
              getLabelText={getLabelText}
              precision={1}
              icon={<Brightness1Rounded fontSize="inherit" />}
              IconContainerComponent={IconContainer}
            /></button>
          </Grid>
          <Grid item xs={3}> 
            <h5>Severe Concern</h5>
          </Grid>
        </Grid>
        {/* </Box> severe */}
       </div>
    );
  }

// Export function -> AppRatings (Read Only)
// =========================================================
  export function AppRatings(props) {
      return (
        <div>
          <Grid container
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start"
          >
            <Grid item style={{paddingLeft: 4, paddingRight: 4}}>
          </Grid>
          {props.reviewCount}
          </Grid>
        </div>
      );
    }
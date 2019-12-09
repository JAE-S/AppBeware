// Import React + Node Pacakegs
// =========================================================
  import React from 'react';
  import PropTypes from 'prop-types';
// Import Material UI Styles
// =========================================================
  import { withStyles, makeStyles } from '@material-ui/core/styles';
// Import Material UI Components 
// =========================================================
  import Rating from '@material-ui/lab/Rating';
  import { Tooltip, Grid, } from '@material-ui/core/';
// Import Material UI Icons
// =========================================================
  import { Brightness1Rounded } from '@material-ui/icons/';
  import "../../assets/styling/appStyle.css"

// Styling + labels 
// =========================================================
  const StyledRating = withStyles({
    iconFilled: {
      color: '#FF8B6C',
    },
    iconHover: {
      color: '#FC4A1A',
    },
    rating1: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  })(Rating);

  function onChange(evet, value) {
   if (value === 1){
     console.log("true")
   }
}

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
  export default function CustomizedRatings(props) {
    const [value, setValue] = React.useState(1);
      const [hover, setHover] = React.useState(-1);
    return (
      <div>
        <Grid container
                direction="row" 
                justify="center" 
                alignItems="center"
                style={{paddingLeft: 5, paddingRight: 5}}
          >
          <Grid item xs={3}> 
          <h4 align="center" style={{color: "#99aa26" }}>Mild Concern</h4>
          </Grid>

          <Grid align="center"justify="space-between"  item xs={6}> 

          <button>
            <StyledRating
              name="customized-color"
              value={props.value}
              onChange={props.value}
              getLabelText={getLabelText}
              precision={1}
              icon={
                <Brightness1Rounded 
                  fontSize="inherit"  
                  style={{margin: 5}} 
                />
              }
              IconContainerComponent={IconContainer} 
            />
          </button>

          </Grid>
          <Grid item xs={3}> 
            <h4 align="center" style={{color: "#FC4A1A" }}>Severe Concern</h4>
          </Grid>
        </Grid>
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
// Import React + Node Pacakegs
// =========================================================
  import React from 'react';
  import PropTypes from 'prop-types';
// Import Material UI Styles
// =========================================================
  import { withStyles } from '@material-ui/core/styles';
// Import Material UI Components 
// =========================================================
  import Rating from '@material-ui/lab/Rating';
  import { Tooltip, Box } from '@material-ui/core/';
// Import Material UI Icons
// =========================================================
  import { Brightness1Rounded } from '@material-ui/icons/';

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
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    };

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
      // const value = 2;
      // const [hover, setHover] = React.useState(-1);
    return (
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <StyledRating
            name="customized-color"
            value={2}
            getLabelText={getLabelText}
            precision={0.5}
            icon={<Brightness1Rounded fontSize="inherit" />}
            IconContainerComponent={IconContainer}
          />
        </Box>
      </div>
    );
  }

// Export function -> AppRatings (Read Only)
// =========================================================
  export function AppRatings(props) {
    // const [hover, setHover] = React.useState(-1);
      return (
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <StyledRating
              getLabelText={getLabelText}
              name="read-only" 
              value={props.ratingValue} 
              readOnly
              icon={<Brightness1Rounded fontSize="inherit" />}
              IconContainerComponent={IconContainer}
            />
          </Box>
        </div>
      );
    }
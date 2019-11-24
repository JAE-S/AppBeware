import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { Brightness1Rounded } from '@material-ui/icons/';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export function CustomizedRatings() {
    const value = 2;
    const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Custom icon and color</Typography> */}
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

export function AppRatings(props) {
  const [hover, setHover] = React.useState(-1);
    return (
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          {/* <Typography component="legend">Custom icon and color</Typography> */}
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
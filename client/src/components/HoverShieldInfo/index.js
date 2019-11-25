// Import React 
// =========================================================
  import React from 'react';
// Import Material UI Styles
// =========================================================
  import { makeStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
  import { Popover, Typography } from '@material-ui/core/';

  const useStyles = makeStyles(theme => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
      maxWidth: 200,
      backrgoundColor: "#F7F7F7", 
      color: "#FC4A1A", 
    },
  }));

// Export default function MouseOverPopover
// =========================================================
  export default function MouseOverPopover(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = event => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <div>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {props.badgeName}
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography style={{ fontSize: ".9rem"}}>{props.badgeInfo}</Typography>
        </Popover>
      </div>
    );
  }
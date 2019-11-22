// Import React
// =========================================================
import React from 'react';
// Import Material UI Styles 
// =========================================================
import { makeStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
import { Modal, Backdrop, Fade } from '@material-ui/core';

// Custom styles
// =========================================================
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  sButtons: {
    width: 250, 
    height: 50, 
    backgroundColor: "grey", 
    color: "white",
    margin: 10
},
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button 
        className={classes.sButtons}
        type="button" 
        onClick={handleOpen}
        >
        {props.openModal}
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          {props.modalBody}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
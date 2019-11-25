// Import React
// =========================================================
    import React from 'react';
// Import Material UI components 
// =========================================================
    import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';

// Export Modal 
// =========================================================
  export default function ScrollDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = scrollType => () => {
      setOpen(true);
      setScroll(scrollType);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
      <div>
        <Button onClick={handleClickOpen('paper')}>{props.openModal}</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
          
            {props.modalTitle}

          </DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {props.modalBody}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* Button for absout sheilds page -> in Nav component */}
            <Button onClick={handleClose} color="primary">
              {props.modalButton1}
            </Button>
            {/* <Button onClick={handleClose} color="primary">
              {props.modalButton2}
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
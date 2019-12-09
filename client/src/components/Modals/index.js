// Import React
// =========================================================
    import React from 'react';
// Import Material UI components 
// =========================================================
    import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';

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
        <div onClick={handleClickOpen('paper')}>{props.openModal}</div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
          
            {props.modalIcon} {props.modalTitle}

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
         
        </Dialog>
      </div>
    );
  }
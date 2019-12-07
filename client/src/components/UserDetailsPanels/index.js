
// Import React
// =========================================================
    import React from "react"; 
// Import Material Ui Styles
// =========================================================
    import { makeStyles } from '@material-ui/core/styles';
// Import Material Ui Components
// =========================================================
    import { Input, Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
// Import Material UI Icons
// =========================================================
    // import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
    import EditIcon from '@material-ui/icons/Edit';
    import CloseIcon from '@material-ui/icons/Close';
    import DoneIcon from '@material-ui/icons/Done';

    import "./style.css";

    import API from "../../utils/API"

    const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: '33.33%',
          flexShrink: 0,
        },
        secondaryHeading: {
          fontSize: theme.typography.pxToRem(15),
          color: theme.palette.text.secondary,
        },
        margin: {
            margin: theme.spacing(1),
          },
          detailsInput: {
              backgroundColor: "white", 
          }
      }));

      // const apiSwitch = apiCalls(call => {

      // })
      
      export default function  ControlledExpansionPanels(props) {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        // const api = apiSwitch();
      
        const handleChange = panel => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };

        return (
          <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary
                expandIcon={<EditIcon/>}
                aria-controls={props.ariaControls}
                id={props.ariaControls}
                style={{ backgroundColor: "silver", marginBottom: 2}}
              >
                <Typography className={classes.heading}>
                    {props.title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                    {props.currentDetails}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
             
            
                <form className={classes.root} noValidate autoComplete="off">
                <Grid container 
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-end"
                >
                <Grid item sx={4}> 
                   Update {props.title} 
                </Grid>
                <Grid item sx={4} >
                    <Input 
                        className={classes.detailsInput}
                        inputProps={props.inputProps} 
                        id={props.title} 
                        type="text"
                        label={props.title}
                        style={{width: "400px!important"}}
                    />
                </Grid> 
                <Grid item sx={4}> 
                    <a><CloseIcon  
                        type="submit"
                        style={{color: "#FC4A1A"}}
                    /></a>
            
                    <button><DoneIcon 
                        style={{color: "green"}}
                        onSubmit={props.inputSubmit}
                        onClick={props.inputSubmit}
                    /></button>
                    </Grid>
                    </Grid>
                </form>    
             
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        );
      }
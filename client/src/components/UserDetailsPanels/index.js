
// Import React
// =========================================================
    import React from "react"; 
// Import Material Ui Styles
// =========================================================
    import { makeStyles } from '@material-ui/core/styles';
    import TextField from '@material-ui/core/TextField';
    
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
          '& > *': {
           margin: theme.spacing(0),
           alignItems: 'center'
        },
       
  },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: '33.33%',
          flexShrink: 0,
          alignItems: 'center'
        },
        secondaryHeading: {
          fontSize: theme.typography.pxToRem(15),
          color: theme.palette.text.secondary,
          
        },
        margin: {
            margin: theme.spacing(1),
          },
          detailsInput: {
              backgroundColor: " #F7C533", 
          },
      textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    // backgroundColor: " #F7C533", 
    width: 700,
  },
      }));

      // const apiSwitch = apiCalls(call => {

      // })
      
      export default function  ControlledExpansionPanels(props) {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
      
        const handleChange = panel => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };

              
        const handleInputchange = event => {
          const {name, value} = event.target;
          this.setState({
            [name]: value
          })
        }


        return (
          <div className={classes.root}   >
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary
                expandIcon={<EditIcon/>}
                aria-controls={props.ariaControls}
                id={props.ariaControls}
                style={{ backgroundColor: " #F7C533"}}
              >
                <Typography className={classes.heading}>
                    {props.title}
                </Typography>
                <Typography className={classes.heading}>
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
                {/* <Grid item sx={4}  > 
                  
                   Update 
                </Grid> */}
                <Grid item sx={8} >
             
                <TextField id="filled-basic"  variant="filled"
                className={classes.textField} 
                        helperText="Edit your information"
                        // className={classes.detailsInput}
                        inputProps={props.inputProps} 
                        id={props.title} 
                        type="text"
                        // label={props.title}
                        style={{width: "400px!important"}}
                        name={props.name}
                        onChange={props.onChange}
                    />
                </Grid> 
                <Grid item sx={4}> 
                    <a><CloseIcon  
                        type="submit"
                        style={{color: "#FC4A1A"}}
                    /></a>
            
                    <button><DoneIcon 
                        style={{color: "green"}}
                        onClick={props.inputSubmit}
                        // onClick={props.inputSubmit(Input)}
                    /></button>
                    </Grid>
                    </Grid>
                </form>    
             
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        );
      }
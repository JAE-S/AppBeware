// Import React
// =========================================================
    import React from "react"; 
// Import Material Ui Styles
// =========================================================
    import { makeStyles } from '@material-ui/core/styles';
// Import Material Ui Components
// =========================================================
    import { TextField, Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Tooltip } from '@material-ui/core';
// Import Material UI Icons
// =========================================================
    import EditIcon from '@material-ui/icons/Edit';
    import CloseIcon from '@material-ui/icons/Close';
    import DoneIcon from '@material-ui/icons/Done';
// Import Style 
// =========================================================
  import "./style.css"

    const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
          '& > *': {
            margin: theme.spacing(0),
            marginBottom: "10px",
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
        
        // const handleInputchange = event => {
        //   const {name, value} = event.target;
        //   this.setState({
        //     [name]: value
        //   })
        // }

        return (
          <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            
              <ExpansionPanelSummary
                expandIcon={
                  <Tooltip title="Edit" arrow>
                    <EditIcon className="profile-text"/>
                  </Tooltip>
                }
                aria-controls={props.ariaControls}
                id={props.ariaControls}
                style={{ borderRadius: "none"}}
              >
           

                  <Typography className={classes.heading}>
                     <h3 className="profile-text" style={{margin: 0 }}>
                      {props.title}: 
                    </h3>
                  </Typography>
               
                  <Typography className={classes.heading}>
                      {props.currentDetails}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
              
                <form className={classes.root} noValidate autoComplete="off">
                  <Grid container 
                      direction="row"
                      justify="center"
                    alignItems="flex-end"
                  >

                    <Grid item sx={12} >
                      <TextField
                        id={props.title}
                        name={props.name}
                        onChange={props.onChange}
                        inputProps={props.inputProps} 
                        type="text" 
                        variant="filled"
                        helperText={props.description}
                        // className={classes.detailsInput}
                        className={classes.textField} 
                        style={{width: "400px!important"}}
                      />
                    </Grid> 

                    <Grid item sx={12}> 
                      <button>
                        <Tooltip title="Cancel" arrow>
                          <CloseIcon 
                            type="submit"
                            style={{color: "#FC4A1A", paddingLeft: "10px", paddingRight: "10px", width: "2em"}}
                          />
                        </Tooltip>
                      </button>
                      <button>
                        <Tooltip title="Save" arrow>
                          <DoneIcon 
                            style={{color: "green", paddingLeft: "10px", paddingRight: "10px", width: "2em"}}
                            onClick={props.inputSubmit}
                            // onClick={props.inputSubmit(Input)}
                          />
                        </Tooltip>
                      </button>
                    </Grid>
                  </Grid>
                </form>    
             
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        );
      }
// Import React & Node packages
// =========================================================
    import React from 'react';
    import PropTypes from 'prop-types';
    import clsx from 'clsx';
// Import Material Styles
// =========================================================
    import { makeStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
    import { TextField, Button, Grid, Typography, StepLabel, FormControl, FormLabel, Step, Stepper, Checkbox, FormControlLabel } from '@material-ui/core/';

    // Import Material UI icons
// =========================================================
    import { Brightness1Rounded, AddAlert, NotificationsOff, Check} from '@material-ui/icons/';
    // SettingsIcon
// Import Components
// =========================================================
    import { CustomizedRatings }from "../../components/Ratings"
    // import HoverShieldInfo from "../../components/HoverShieldInfo"
// Import Media
// =========================================================
    import PR_icon from "../../assets/images/shields/predator_risk.png";
    import CB_icon from "../../assets/images/shields/cyberbullying.png";
    import DB_icon from "../../assets/images/shields/dangerous_behavior.png";
    import SC_icon from "../../assets/images/shields/sexual_content.png";
    import VC_icon from "../../assets/images/shields/violent_content.png";
    

// Styling
// =========================================================
    const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
        },
        button: {
          marginRight: theme.spacing(1),
        },
        instructions: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
          },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
          },
      }));
  
    const useQontoStepIconStyles = makeStyles({
      root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
      },
      active: {
        color: '#784af4',
      },
      circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },
      completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
      },
    })

// Grid Layout
// =========================================================
    function SmallGrid(props) {
        return (
            <Grid container spacing={0} style={{ display: "flex", alignItems: "center"}}>
                <Grid align="right" item xs={2}>
                    {props.smallGirdLeft}
                </Grid>
                <Grid align="left" item xs={10}>
                    {props.smallGirdRight}
                </Grid>
            </Grid>
        ) 
    }

    function shieldAlerts(){
    
        return (
            <Grid container spacing={4}>
               <Grid item xs={12} sm={6}>
                    <h3 align="center" >Shield Tracker</h3>
                    <SmallGrid 
                        smallGirdLeft={<img alt="Predator Risk" style={{  justifyContent: "center", maxWidth: "40px", width: "100%", height: "auto"}} src={PR_icon}/>}
                 
                    />
                    <SmallGrid 
                        smallGirdLeft={<img alt="Dangerous Behavior" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={DB_icon}/>}
               
                    />
                    <SmallGrid 
                        smallGirdLeft={<img alt="Cyberbullying" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={CB_icon} />}
            
                    />
                    <SmallGrid 
                        smallGirdLeft={<img alt="Violent Content" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={VC_icon}/>}
             
                    />
                    <SmallGrid 
                        smallGirdLeft={<img alt="Sexual Content" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={SC_icon} />}
               
                    />
                </Grid>
            </Grid>
        )
    }

    function dangerRating(){
    
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <h3 align="center" >Danger Rating</h3>
                    <SmallGrid 
                        smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                        smallGirdRight={<CustomizedRatings ratingValue={5}/>}
                    />
                    <SmallGrid 
                        smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                        smallGirdRight={<CustomizedRatings ratingValue={4}/>}
                    />
                    <SmallGrid 
                        smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                        smallGirdRight={<CustomizedRatings ratingValue={3}/>}
                    />
                    <SmallGrid 
                        smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                        smallGirdRight={<CustomizedRatings ratingValue={2}/>}
                    />
                    <SmallGrid 
                        smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                        smallGirdRight={<CustomizedRatings ratingValue={1}/>}
                    />
                </Grid> 
            </Grid>
        )
    }

    function shareConcerns(props){
        return (
            <form noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="What dangers have your experiened with this app?"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div> 
                <div> 
               
                </div>
                <FormControl required component="fieldset">
                    <FormLabel component="legend"> Would you like to set an alert for this app?  </FormLabel>
                <FormControlLabel 
                    control={<Checkbox icon={<AddAlert />} checkedIcon={<AddAlert />} value="alert" />}
                    label="Set Alert"
                />
                <FormControlLabel
                    control={<Checkbox icon={<NotificationsOff />} checkedIcon={<NotificationsOff />} value="noAlert" />}
                    label="No Alert"
                />
                </FormControl>
            </div> 
          </form>
        )
    }
    
// Stepper
// =========================================================
    
function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
      </div>
    );
  }
  
  QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
  };
  
    function getSteps() {
      return ['Select Shield Alerts', 'How Dangerous is this app?', 'Share Your Concerns'];
    }
    
    function getStepContent(step) {
      switch (step) {
        case 0:
          return shieldAlerts();
        case 1:
          return dangerRating();
        case 2:
          return shareConcerns();
        default:
          return 'Unknown step';
      }
    }
    
    export default function AddAppReview(){
     const classes = useStyles();
      const [activeStep, setActiveStep] = React.useState(0);
      const steps = getSteps();
    
      const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };
      const handleReset = () => {
        setActiveStep(0);
      };
      // const [state, setState] = React.useState({
      //   checkedA: true,
      //   checkedB: true,
      //   checkedF: true,
      //   checkedG: true,
      // });
    
      // const handleChange = name => event => {
      //   setValue(event.target.value);
      //   setState({ ...state, [name]: event.target.checked });
      // };
      // const [value, setValue] = React.useState('Controlled');
    
      return (
        <div className={classes.root}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }










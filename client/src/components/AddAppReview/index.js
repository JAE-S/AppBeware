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
import { Button, Grid, Typography, StepLabel, Step, Stepper} from '@material-ui/core/';

// Import Material UI icons
// =========================================================
  import { Check } from '@material-ui/icons/';
// Import Components
// =========================================================
  import ShieldAlertsClass from "./ShieldAlertClass";
  import DangerAlertClass from "./DangerAlertClass"
  import CommentAlertClass from './CommentAlertClass';

// Styling
// =========================================================
import "../../assets/styling/appStyle.css"
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
      color: '#13BAC7',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#13BAC7',
      zIndex: 1,
      fontSize: 18,
    },
  })

  function shieldAlerts(){

      return (
        <ShieldAlertsClass/>
      )
  }
  function dangerRating(){

      return (
          <DangerAlertClass/>
      )
  }
  function shareConcerns(){
      return (
        <CommentAlertClass/>
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
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle}/>}
      </div>
    );
  }

  QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  };

  function getSteps() {
    return ['Select Shield Alerts', 'Select A Danger Al', 'Share Your Concerns'];
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
              <Grid container 
                  className="modal-footer"
                  direction="row"
                  justify="center"
                  alignItems="center"
              >
              <Grid item>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                  <Button
                    variant="contained"
                    style={{backgroundColor: "#13BAC7", color: "white"}}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  </Grid>
              </Grid>
            </div>
          )}
        </div>
      </div>
    );
  }
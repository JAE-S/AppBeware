// Import React & Node packages
// =========================================================
  import React, { Component } from 'react';
  import { Link } from 'react-router-dom'
  import { connect } from "react-redux";
  import PropTypes from 'prop-types';
  import clsx from 'clsx';
// Import Material Styles
// =========================================================
  import { makeStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
  import { Button, Grid, Typography, StepLabel, Step, Stepper, StepButton } from '@material-ui/core/';

// Import Material UI icons
// =========================================================
  import { Check } from '@material-ui/icons/';
// Import Components
// =========================================================
  import ShieldAlertsClass from "./ShieldAlertsClass";
  import DangerAlertClass from "./DangerAlertClass"
  import CommentAlertClass from './CommentAlertClass';
//   import { ShieldAlertsClass, DangerAlertsClass, CommentAlertsClass } from "./test";

// Styling
// =========================================================
import "../../assets/styling/appStyle.css"

const getStyles = () => {
    return {
        root: {
            width: '100%',
            minHeight: "300px",
          },
          instructions: {
            color: "#57585D",
          },
          container: {
              display: 'flex',
              flexWrap: 'wrap',
            },
          textField: {
              width: 200,
            },
    };
  };

  const useQontoStepIconStyles = () => {
    return {
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
    };
  };

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
    return ['Select Shield Alerts', 'Select A Danger Alert', 'Share Your Concerns'];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
        return shieldAlerts();
      case 1:
        return dangerRating();
      case 2:
        return shareConcerns();
      default:
        return ( <div align="center">
        <h3> Thank you for sharing you&apos;re concerns!</h3>
        <div className="modal-footer">
            <Link to="/homePage" style={{textDecoration: "none"}}>
            <Button className="teal">
                Return to the homePage
            </Button>
            </Link>
      </div>
    </div>);
    }
  }

  class AddAppReview extends  Component {
    state = {
        stepIndex: 0,
        visited: [],
      }; 
      
      componentWillMount() {
        const {stepIndex, visited} = this.state;
        this.setState({visited: visited.concat(stepIndex)});
      }
    
      componentWillUpdate(nextProps, nextState) {
        const {stepIndex, visited} = nextState;
        if (visited.indexOf(stepIndex) === -1) {
          this.setState({visited: visited.concat(stepIndex)});
        }
      }
    
      handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
          this.setState({stepIndex: stepIndex + 1});
        }
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };
      handleFinish = () => {
        const {stepIndex} = this.state;
        this.setState({stepIndex: -1});
        this.showComplete()
      }

      showComplete() {
        return (
          <div align="center">
              <h3> Thank you for sharing you&apos;re concerns!</h3>
              <div className="modal-footer">
                  <Link to="/homePage" style={{textDecoration: "none"}}>
                  <Button className="teal">
                      Return to the homePage
                  </Button>
                  </Link>
            </div>
          </div>
        )
      }
    
      render() {
        const {stepIndex, visited } = this.state;
        const styles = getStyles();
        const steps = getSteps();
    
        return (
          <div style={styles.root}>
            <Stepper alternativeLabel active={stepIndex}>
                <Step 
                    key='Select Shield Alerts' 
                    active={stepIndex === 0}
                    completed={visited.indexOf(0) !== -1} 
                >
                    <StepLabel onClick={() => this.setState({stepIndex: 0})}>
                        Select Shield Alerts
                    </StepLabel>
                </Step>
                <Step 
                    key='Select A Danger Alert'
                    completed={visited.indexOf(1) !== -1} 
                    active={stepIndex === 1}
                >
                    <StepLabel onClick={() => this.setState({stepIndex: 1})}>
                       Select Danger Alert
                    </StepLabel>
                </Step>
                <Step 
                    key='Share Your Concerns'
                    completed={visited.indexOf(2) !== -1} 
                    active={stepIndex === 2}
                >
                    <StepLabel onClick={() => this.setState({stepIndex: 2})}>
                        Share Your Concerns
                    </StepLabel>
                </Step>
            </Stepper>
          
            <div>
              <Typography className={styles.instructions}>
                {getStepContent(stepIndex)}
              </Typography>
              <Grid container 
                  className="modal-footer"
                  direction="row"
                  justify="center"
                  alignItems="center"
              >
              <Grid item>
              <div>
              {stepIndex > -1 ? (
                <>
                <Button 
                    disabled={stepIndex === 0} 
                    onClick={this.handlePrev} 
                    className="back"
                >
                  Back
                </Button>

                {stepIndex === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    className="teal"
                    onClick={this.handleFinish}
                    id="finshButton"
                  > 
                    Finish 
                  </Button>
                  
                ) : ( 
                  <Button
                    variant="contained"
                    className="teal"
                    id="nextButton"
                    onClick={this.handleNext}
                  > 
                    Next 
                  </Button>
                )}
                </>
                ) : 
                  ( <> </>)
                }

               </div>
                  </Grid>
              </Grid>
            </div>
        
      </div>
 
        );
      }
    }
  export default AddAppReview;
      
// const mapStateToProps = state => ({
//   // categories: state.categories.allCategories,
//   // singleCategoryInfo: state.categories.singleCategoryInfo,
//   // apps: state.apps.allListedApps,
//   // trendingApps: state.apps.trendingApps,
//   // appNames: state.apps.allAppNames,
//   // appReviews: state.apps.appReviews,
//   // shields: state.shields.allShields,
//   // user: state.user.userInfo
// })

// export default connect(mapStateToProps, 
//     { 
//         // viewAllCategories, 
//         // viewSingleCategory, 
//         // viewSingleCategoryInfo,
//         // viewAllListedApps, 
//         // viewAppNames, 
//         // viewAppReviews,
//         // selectTrendingApps,
//         // viewAllShields,
//         // userInfo
//     })(AddAppReview); 

{/* <div align="center">
<h3> Thank you for sharing you&apos;re concerns!</h3>
<div className="modal-footer">
     <Link to="/homePage" style={{textDecoration: "none"}}>
     <Button className="teal">
         Return to the homePage
     </Button>
     </Link>
</div>
</div> */}
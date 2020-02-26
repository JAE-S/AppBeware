// Import React & Node packages
// =========================================================
  import React, { Component } from 'react';
  import { Link } from 'react-router-dom'
  import { connect } from "react-redux";
  import PropTypes from 'prop-types';
  import clsx from 'clsx';

// Import Redux Components
// =========================================================
  import { appActions } from "../../Store/Actions/appActions";
  // import { userInfo } from '../../Store/Actions/authentication';
  import { reviewActions } from '../../Store/Actions/reviewActions';

  import API from "../../utils/API";

  // import { userActions } from '../../Store/Actions/auth';

// Import Material Styles
// =========================================================
  // import { makeStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
  import { Button, Grid, Typography, StepLabel, Step, Stepper} from '@material-ui/core/';
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

  const generateArrayOfShields = (array, shield) => {
    // console.log("Inside generateArrayOfShields");
    let tempShieldArray = array;
    tempShieldArray.push(shield);
    const duplicateShieldArray = tempShieldArray.map(item => item);
    const noDuplicateShield = new Set(duplicateShieldArray);
    const finalShieldArray = [...noDuplicateShield];
    return finalShieldArray;
};

  class AddAppReview extends  Component {
    state = {
        stepIndex: 0,
        visited: [],
        currentShieldSelection: "",
        allShieldSelection: [],
        dangerRating: 0,
        comments: "",
        alertChecked: false
      }; 

    shieldAlerts = () => {

        return (
            <ShieldAlertsClass
                addSingleShield = {this.addSingleShield}
            />
        )
    }

    dangerRating = () => {

        return (
          <DangerAlertClass
            addDangerRating = {this.addDangerRating}
          />
        )
    }

    shareConcerns = () => {
        return (
            <CommentAlertClass
              handleTextFieldChange = {this.handleTextFieldChange}
              handleAlertCheck = {this.handleAlertCheck}
              checked = {this.state.alertChecked}
            />
        )
    }

    getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
            return this.shieldAlerts();
          case 1:
            return this.dangerRating();
          case 2:
            return this.shareConcerns();
          default:
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
          );
        }
      }
      
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
        // const {stepIndex} = this.state;
        this.setState({stepIndex: -1});

        const reviewToSubmit = {
          'predatorRisk': (this.state.allShieldSelection.includes('Predator Risk') ? true : false),
          'dangerousBehavior': (this.state.allShieldSelection.includes('Dangerous Behavior') ? true : false),
          'cyberbullying': (this.state.allShieldSelection.includes('Cyberbullying') ? true : false),
          'violentContent': (this.state.allShieldSelection.includes('Violent Content') ? true : false), 
          'sexualContent': (this.state.allShieldSelection.includes('Sexual Content') ? true : false), 
          'dangerRating': this.state.dangerRating, 
          'comments': this.state.comments,
          'alert': this.state.alertChecked,
          'UserId': this.props.user.id, 
          'ListedAppId': this.props.singleApp.id
        }

        this.props.reviewSubmit(reviewToSubmit);
        API.submitReview(reviewToSubmit);
      }

      addSingleShield = (shield) => {
        // console.log("Adding single shield: " + shield)
        // console.log(this.state.allShieldSelection);
        this.setState({
            currentShieldSelection: shield,
            allShieldSelection: generateArrayOfShields(this.state.allShieldSelection, shield)
        })
      }

      addDangerRating = (event) => {
        // console.log("Danger Rating: " + this.state.dangerRating);
        this.setState({
          dangerRating: event.target.value
        })
      }

      handleTextFieldChange = (event) => {
        this.setState({
            comments: event.target.value
        });
        // console.log(this.state.comments);
      }

      handleAlertCheck = () => {
        if (this.state.alertChecked) {
          this.setState({
            alertChecked: false
          })
        } else {
          this.setState({
            alertChecked: true
          })
        }
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
                {this.getStepContent(stepIndex)}
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
      
const mapStateToProps = state => ({
  singleApp: state.apps.singleApp,
  userInfo: state.authentication.userInfo,
  completeReview: state.reviews.completeReview
})

const actionCreators = {
  viewSingleApp: appActions.viewSingleApp,
  reviewSubmit: reviewActions.reviewSubmit
}

export default connect(mapStateToProps, actionCreators
    // { 
        // viewSingleApp,
        // reviewSubmit,
        // userActions
    // }
    )(AddAppReview); 
 
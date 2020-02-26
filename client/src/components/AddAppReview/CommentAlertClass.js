// Import React & Node packages
// =========================================================
    import React, {Component} from 'react';
    import { connect } from "react-redux";
    // import { push } from 'connected-react-router'
// Import Material Ui Styles
// =========================================================
    import { withStyles } from '@material-ui/core/styles';
// Import Material UI components 
// =========================================================
    import { TextField, FormControl, Checkbox, FormControlLabel } from '@material-ui/core/';
// Import Material UI icons
// =========================================================
    import { AddAlert } from '@material-ui/icons/';
// Import Styling
// =========================================================
    import "../../assets/styling/appStyle.css"

    const InputOverRideOutline = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#13BAC7', // Teal
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#13BAC7', // Teal
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#A9A9A9', // Grey
            },
            '&:hover fieldset': {
              borderColor: '#F7C533', // Yellow
            },
            '&.Mui-focused fieldset': {
              borderColor: '#13BAC7', // Teal
            },
          },
        },
      })(TextField);

    //   const testChange = (event) => {
    //       console.log("Inside testChange");
    //       console.log(event.target);
    //   };

//    function CommentAlertsFunction(props){
    function CommentAlertsFunction(props) {

        return (
            <form noValidate autoComplete="off" style={{padding: "0 20px"}}>
                <div>
                <InputOverRideOutline
                    id="outlined-multiline-static"
                    label="What dangers have your experienced with this app?"
                    multiline
                    rows="4"
                    placeholder="...share your experience here."
                    margin="normal"
                    variant="outlined"
                    onChange={props.handleTextFieldChange}
                />
            </div>
            <div align="center"> 
                <FormControl component="fieldset">
                    <h4>Would you like to set an alert for this app?</h4> 
                    <div align="center">
                        <FormControlLabel 
                            control={
                                <Checkbox 
                                    icon={<AddAlert />} 
                                    checkedIcon={<AddAlert />} 
                                    value="checkedA" 
                                    checked={props.checked}
                                    onChange={props.handleAlertCheck}
                                />
                            }
                            // onChange={props.handleAlertCheck}
                            label="Set Alert"
                        />
                    </div>
                </FormControl>
            </div> 
        </form>
        )
    }

// Comment Alert Class
// =========================================================

    class ShieldAlertsClass extends Component {
        // Grabbing all necessary data from Redux
        componentDidMount() {
           
        }

        // handleChange = () => event => {
        //   };

        render() {
            return (
                <>
                    <CommentAlertsFunction
                        handleTextFieldChange={this.props.handleTextFieldChange}
                        handleAlertCheck={this.props.handleAlertCheck}
                        checked={this.props.checked}
                    />
                </>
            )
        }
    }

// Export the functions for add a review 
// =========================================================
const mapStateToProps = state => ({ })
    
    export default connect(mapStateToProps)(ShieldAlertsClass);



// Import React & Node packages
// =========================================================
    import React, {Component} from 'react';
    import { connect } from "react-redux";
    import { push } from 'connected-react-router'
// Import Material UI components 
// =========================================================
    import { TextField, Button, Grid, Typography, StepLabel, FormControl, FormLabel, Step, Stepper, Checkbox, FormControlLabel } from '@material-ui/core/';

// Import Material UI icons
// =========================================================
    import { Brightness1Rounded, AddAlert, NotificationsOff, Check} from '@material-ui/icons/';

// Import Components
// =========================================================
    import { CustomizedRatings }from "../Ratings"
    import HoverShieldInfo from "../HoverShieldInfo"

   function ShieldAlertsFunction(props){

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
                <FormControl required component="fieldset">
                    <FormLabel component="legend"> 
                        Would you like to set an alert for this app?  
                    </FormLabel>
                <FormControlLabel 
                    control={<Checkbox icon={<AddAlert />} 
                    checkedIcon={<AddAlert />} 
                    value="alert" />}
                    label="Set Alert"
                />
                <FormControlLabel
                    control={<Checkbox icon={<NotificationsOff />} 
                    checkedIcon={<NotificationsOff />} 
                    value="noAlert" />}
                    label="No Alert"
                />
                </FormControl>
            </div> 
        </form>
        )
    }

// ShieldAlertsFunction
// =========================================================

    class ShieldAlertsClass extends Component {
        // Grabbing all necessary data from Redux
        componentDidMount() {
           
        }

        render() {
            return (
                <>
               <ShieldAlertsFunction/>
                </>
            )
        }
    }


// Export the functions for add a review 
// =========================================================
const mapStateToProps = state => ({
    // categories: state.categories.allCategories,
    // apps: state.apps.allListedApps,
    // trendingApps: state.apps.trendingApps,
    // appNames: state.apps.allAppNames,
    // shields: state.shields.allShields
    })
    
    export default connect(mapStateToProps, 
    { 
        // viewAllCategories, 
        // viewSingleCategory, 
        // viewAllListedApps, 
        // viewAppNames, 
        // selectTrendingApps,
        // viewAllShields 
    })(ShieldAlertsClass);



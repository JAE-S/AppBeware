// Import React & Node packages
// =========================================================
    import React, {Component} from 'react';
    import { connect } from "react-redux";
    // import { push } from 'connected-react-router'
// Import Material UI components 
// =========================================================
    import { TextField, FormControl, Checkbox, FormControlLabel } from '@material-ui/core/';
// Import Material UI icons
// =========================================================
    import { AddAlert } from '@material-ui/icons/';
// Import Styling
// =========================================================
    import "../../assets/styling/appStyle.css"

   function ShieldAlertsFunction(props){

        return (
            <form noValidate autoComplete="off" style={{padding: "0 20px"}}>
                <div>
                <TextField
                    id="outlined-multiline-static"
                    label="What dangers have your experienced with this app?"
                    multiline
                    rows="4"
                    placeholder="...share your experience here."
                    margin="normal"
                    variant="outlined"
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
                                />
                            }
                            label="Set Alert"
                        />
                    </div>
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

        // handleChange = () => event => {
        //   };

        render() {
            return (
                <>
                    <ShieldAlertsFunction
                      // TODO://////////////////
                    // input props for shield alerts go here
                    />
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
        }
    )(ShieldAlertsClass);



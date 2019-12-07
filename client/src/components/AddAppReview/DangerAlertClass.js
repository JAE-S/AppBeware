// Import React & Node packages
// =========================================================
import React, {Component} from 'react';
import { connect } from "react-redux";
import { push } from 'connected-react-router'
// Import Material UI components 
// =========================================================
    import { Button, Grid } from '@material-ui/core/';

// Import Components
// =========================================================
    import { CustomizedRatings }from "../Ratings"
    import { viewAllShields } from "../../Store/Actions/shieldActions";

// ShieldAlertsFunction
// =========================================================

    class ShieldAlertsClass extends Component {
        // Grabbing all necessary data from Redux
        componentDidMount() {
            this.props.viewAllShields();
        }

        render() {
            return (
                <>
                    <CustomizedRatings customValue={1}/>
                     <p align="center">Please select a rating &#40;1 - 5 &#41; that reflects your concerns.</p>
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
    shields: state.shields.allShields
    })
    
    export default connect(mapStateToProps, 
    { 
        // viewAllCategories, 
        // viewSingleCategory, 
        // viewAllListedApps, 
        // viewAppNames, 
        // selectTrendingApps,
        viewAllShields 
    })(ShieldAlertsClass);




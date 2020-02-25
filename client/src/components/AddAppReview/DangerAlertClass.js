// Import React & Node packages
// =========================================================
    import React, { Component } from 'react';
    import { connect } from "react-redux";
// import { push } from 'connected-react-router'
// Import Components
// =========================================================
    import CustomizedRatings from "../Ratings"
    import { shieldActions } from "../../Store/Actions/shieldActions";

// ShieldAlertsFunction
// =========================================================

    class ShieldAlertsClass extends Component {
  
        // Grabbing all necessary data from Redux
        componentDidMount() {
            this.props.viewAllShields();
        }
        // TODO://////////////////
        // Functin to set danger rating 
        // handleInput = (event) => {
        //     alert(event.target.value);
        //   }

        render() {
            return (
                <>
                  {/* // TODO:////////////////// */}
                    <CustomizedRatings 
                        value={this.props.addDangerRating}
                    />
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
    
const actionCreators = {
    viewAllShields: shieldActions.viewAllShields
}
    export default connect(mapStateToProps, actionCreators
        // { 
            // viewAllCategories, 
            // viewSingleCategory, 
            // viewAllListedApps, 
            // viewAppNames, 
            // selectTrendingApps,
        //     viewAllShields 
        // }
    )(ShieldAlertsClass);




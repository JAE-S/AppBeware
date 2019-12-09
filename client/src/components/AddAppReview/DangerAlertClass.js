// Import React & Node packages
// =========================================================
    import React, { Component } from 'react';
    import { connect } from "react-redux";
// import { push } from 'connected-react-router'
// Import Components
// =========================================================
    import CustomizedRatings from "../Ratings"
    import { viewAllShields } from "../../Store/Actions/shieldActions";

// ShieldAlertsFunction
// =========================================================

    class ShieldAlertsClass extends Component {
  
        // Grabbing all necessary data from Redux
        componentDidMount() {
            this.props.viewAllShields();
        }
        // TODO://////////////////
        // Functin to set danger rating 
        handleInput = (event) => {
            alert(event.target.value);
          }

        render() {
            return (
                <>
                  {/* // TODO:////////////////// */}
                    <CustomizedRatings 
                        value={this.handleInput}
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
    
    export default connect(mapStateToProps, 
        { 
            // viewAllCategories, 
            // viewSingleCategory, 
            // viewAllListedApps, 
            // viewAppNames, 
            // selectTrendingApps,
            viewAllShields 
        }
    )(ShieldAlertsClass);




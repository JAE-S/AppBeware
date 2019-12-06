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

    import { viewAllShields } from "../../Store/Actions/shieldActions";


// Grid Layout
// =========================================================
    // function SmallGrid(props) {
    //     return (
    //         <Grid container spacing={0} style={{ display: "flex", alignItems: "center"}}>
    //             <Grid align="right" item xs={2}>
    //                 {props.smallGirdLeft}
    //             </Grid>
    //             <Grid align="left" item xs={10}>
    //                 {props.smallGirdRight}
    //             </Grid>
    //         </Grid>
    //     ) 
    // }

   function ShieldAlertsFunction(props){

        return (
            <Grid item xs={2} sm={2}>
                    <HoverShieldInfo
                        badgeInfo={props.info}
                        badgeName={
                            <button><img 
                                alt={props.title} 
                                src={props.shieldIcon}
                                style={{justifyContent: "center", Width: "60px", height: "60px"}} 
                            /></button>
                        }
                    />
            </Grid>
        )
    }

// ShieldAlertsFunction
// =========================================================

    class ShieldAlertsClass extends Component {
        // Grabbing all necessary data from Redux
        componentDidMount() {
            this.props.viewAllShields();
        }

        render() {
            return (
                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}>
               <Grid item xs={12}> 
                    <h4 align="center">Please click on the shield&#40;s&#41; that reflect your concerns.</h4>
               </Grid> 
                
                {this.props.shields.map(shield => (
                <ShieldAlertsFunction
                    key={shield.name}
                    shieldIcon={shield.icon}
                    title={shield.name}
                    altTxt={shield.altText}
                    info={`${shield.name} - ${shield.info}`}
                />
                ))}
           
                </Grid>
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

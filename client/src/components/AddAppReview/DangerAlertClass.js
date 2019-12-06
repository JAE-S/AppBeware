// Import React & Node packages
// =========================================================
import React, {Component} from 'react';
import { connect } from "react-redux";
import { push } from 'connected-react-router'
// Import Material UI components 
// =========================================================
    import { Button, Grid } from '@material-ui/core/';

// Import Material UI icons
// =========================================================
    import { Brightness1Rounded } from '@material-ui/icons/';

// Import Components
// =========================================================
    import { CustomizedRatings }from "../Ratings"

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

//    function DangerAlertsFunction(props){

//         return (
//             <Grid container spacing={4}>
//             <Grid item xs={12} sm={6}>
//                 <h3 align="center" >Danger Rating</h3>
//                 <SmallGrid 
//                     // smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
//                     smallGirdRight={}
//                 />
//             </Grid> 
//         </Grid>
//         )
//     }

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
               <CustomizedRatings ratingValue={5}/>
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




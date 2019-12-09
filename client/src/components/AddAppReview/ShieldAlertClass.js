// Import React & Node packages
// =========================================================
    import React, {Component} from 'react';
    import { connect } from "react-redux";
    import { push } from 'connected-react-router'
// Import Material UI components 
// =========================================================
    import { Grid } from '@material-ui/core/';
// Custom Components 
// =========================================================
    import HoverShieldInfo from "../HoverShieldInfo"
// Redux Components 
// =========================================================
    import { viewAllShields } from "../../Store/Actions/shieldActions";

   function ShieldAlertsFunction(props){

        return (
            <Grid item xs={2} sm={2}>
                <HoverShieldInfo
                    badgeInfo={props.info}
                    badgeName={
                        <button  
                            onClick={props.handleClick}
                            value={props.title}
                        >
                            <img 
                                alt={props.title} 
                                src={props.shieldIcon}
                                style={{justifyContent: "center", Width: "60px", height: "60px"}} 
                               
                            />
                        </button>
                    }
                />
            </Grid>
        )
    }

// ShieldAlertsFunction
// =========================================================

    class ShieldAlertsClass extends Component {

        state = {
            currentShieldSelection: "",
            allShieldSelection: []
        }

        // Grabbing all necessary data from Redux
        componentDidMount() {
            this.props.viewAllShields();
        }
        
        // TODO://////////////////
        // Function for set shield review
        handleClick = (shield, event) => {
            alert(shield)
        }

        render() {
    
            return (
                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
            
                {this.props.shields.map(shield => (
                    <ShieldAlertsFunction
                        key={shield.name}
                        value={shield.name}
                        shieldIcon={shield.icon}
                        title={shield.name}
                        altTxt={shield.altText}
                        info={`${shield.name} - ${shield.info}`}
                        handleClick={() => this.handleClick(shield.name)}
                    />
                ))}

                <Grid item xs={12}> 
                    <p align="center" style={{paddingTop: 20}}>Please click on the shield&#40;s&#41; that reflect your concerns.</p>
               </Grid> 
           
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

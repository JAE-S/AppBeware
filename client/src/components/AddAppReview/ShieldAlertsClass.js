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
import { addShieldToApp, resetAddedShields } from "../../Store/Actions/reviewActions";
import "./style.css"


function ShieldAlertsFunction(props){

    return (
        <Grid align="center" item xs={2}>
            <HoverShieldInfo
                badgeInfo={props.info}
                badgeName={
                    <button  
                        onClick={() => props.addSingleShield(props.title)}
                        value={props.title}
                    >
                        <img 
                            alt={props.title} 
                            src={props.shieldIcon}
                            className="review-shields"
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

    // constructor(props) {
    //     super(props);
    //     state = {

    //     };
    //   }
    // state = {
    //     currentShieldSelection: "",
    //     allShieldSelection: []
    // }

    // Grabbing all necessary data from Redux
    // componentDidMount() {
    //     this.props.viewAllShields();
    //                 // this.props.resetAddedShields();
    // }
   
    // generateArrayOfShields = (array, shield) => {
    //     console.log("Inside generateArrayOfShields");
    //     let tempShieldArray = array;
    //     tempShieldArray.push(shield);
    //     const duplicateShieldArray = tempShieldArray.map(item => item);
    //     const noDuplicateShield = new Set(duplicateShieldArray);
    //     const finalShieldArray = [...noDuplicateShield];
    //     return finalShieldArray;
    // };
     
        // TODO://////////////////
        // Function for set shield review
        // handleClick = (shield) => {
        //     // alert(shield)
        //     // let tempShieldArray = this.state.allShieldSelection;
        //     // tempShieldArray.push(shield);
        //     // console.log( this.generateArrayOfShields( this.props.addedShields, shield) );
        //     this.props.addShieldToApp( this.generateArrayOfShields( this.props.addedShields, shield) );
        //     this.props.addShieldToApp( shield );

        //     // this.setState({
        //     //     currentShieldSelection: shield,
        //     //     allShieldSelection: this.generateArrayOfShields(this.state.allShieldSelection, shield)
        //     // })
        //     // console.log(this.state.currentShieldSelection);
        //     // console.log(this.state.allShieldSelection);
        // }

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
                    addSingleShield={() => this.props.addSingleShield(shield.name)}
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
addedShields: state.reviews.addedShields,
shields: state.shields.allShields
})

export default connect(mapStateToProps, 
{ 
    // viewAllCategories, 
    // viewSingleCategory, 
    // viewAllListedApps, 
    // viewAppNames, 
    // selectTrendingApps,
    addShieldToApp,
    resetAddedShields,
    viewAllShields 
})(ShieldAlertsClass);

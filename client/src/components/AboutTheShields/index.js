// Import React
// =========================================================
    import React, { Component } from 'react';
// Import Redux Components
// =========================================================
    import { connect } from "react-redux";
    import { shieldActions } from "../../Store/Actions/shieldActions";
// Import Material UI Components
// =========================================================
    import { Table, TableBody, TableRow, TableCell, Grid } from '@material-ui/core/';
// Import Media
// =========================================================
    import One from "../../assets/images/danger_rating_icons/danger_rating_1.png";
    import Two from "../../assets/images/danger_rating_icons/danger_rating_2.png";
    import Three from "../../assets/images/danger_rating_icons/danger_rating_3.png";
    import Four from "../../assets/images/danger_rating_icons/danger_rating_4.png";
    import Five from "../../assets/images/danger_rating_icons/danger_rating_5.png";
    import "./style.css"

    const icon = { 
        width: "100%",
        height: "auto"
    }
    const icon2 = { 
        width: "100%",
        maxWidth: "40px",
        height: "auto"
    }

    export function InfoTable(props) {
        return (
            <TableRow> 

                <TableCell> 
                    <img style={icon} alt={props.altTxt} src={ props.shieldIcon}/>
                </TableCell>

                <TableCell> 
                    <h3>{props.title}</h3>
                    <p>{props.description}</p> 
                </TableCell>

            </TableRow>
        )
    }

// Export About the Shields function
// =========================================================
    class AboutTheShields extends Component {
    
        render() {
            return (
                <>
                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                > 
                    <Grid item xs={12}>  
                        <div className="headerBanner" style={{backgroundColor: "#E3E3E3", width: "100%"}}>
                            <h3 style={{color: "#f7f7f7"}} align="center">
                                Danger Alerts
                            </h3>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <p>
                            Using a one to five danger rating system the AppBeware community can rate apps based on the potential danger, one being mildly dangerous up to five being the most dangerous.
                        </p>
                    </Grid>
                </Grid>       
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center" 
                > 
                    <Grid item xs={2}>  
                                    <div align="center">
                                        <p><small>1</small></p>
                                        <img style={icon2} alt="Mild Concern" src={One}/>
                                        <p>Mild</p>
                                    </div>
                                </Grid>
                    <Grid item xs={2}>  
                                    <div align="center">
                                        <p><small>2</small></p>
                                        <img style={icon2} alt="Moderate Concern" src={Two}/>
                                        <p>Moderate</p>
                                    </div>
                                </Grid>
                    <Grid item xs={2}> 
                                    <div  align="center">
                                        <p><small>3</small></p>
                                        <img style={icon2} alt="High Concern" src={Three}/>
                                        <p>High</p>
                                    </div>
                                </Grid>
                    <Grid item xs={2}>  
                                    <div align="center">
                                        <p><small>4</small></p>
                                        <img style={icon2} alt="Very High Concern" src={Four}/>
                                        <p>Very High</p>
                                    </div>
                                </Grid>
                    <Grid item xs={2}>  
                                    <div  align="center">
                                        <p><small>5</small></p>
                                        <img style={icon2} alt="Severe Concern" src={Five}/>
                                        <p>Severe</p>
                                    </div>
                                </Grid>
                </Grid> 
                <Grid container>
                    <Grid item xs={12}>
                        <div className="headerBanner" >
                            <h3 style={{color: "#f7f7f7"}} align="center">
                                Shield Alerts
                            </h3>
                        </div>
                    </Grid> 
                </Grid> 

                <Table>
                    <TableBody> 

                        {this.props.shields.map(shield => (
                            <InfoTable
                                key={shield.id}
                                shieldIcon={shield.icon}
                                altTxt={shield.altText}
                                title={shield.name}
                                description={shield.info}
                            /> 
                        ))}

                    </TableBody>
                </Table>
                </>
            )
        }
    }

const mapStateToProps = state => ({
    shields: state.shields.allShields
})

const actionCreators = {
    viewAllShields: shieldActions.viewAllShields
}
export default connect(mapStateToProps, actionCreators
    // { 
    //     viewAllShields 
    // }
)(AboutTheShields); 

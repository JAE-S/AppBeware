// Import React
// =========================================================
    import React, { Component } from 'react';
// Import Redux Components
// =========================================================
    import { connect } from "react-redux";
    import { viewAllShields } from "../../Store/Actions/shieldActions";
// Import Material UI Components
// =========================================================
    import { Table, TableBody, TableRow, TableCell } from '@material-ui/core/';


    const icon = { 
        width: "100%",
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
                
                <Table>
                    <TableBody> 
                        
                        <InfoTable
                            title="Danger Ratings"
                            description="Using a one to five danger rating system the AppBeware community can rate apps based on the potential danger, one being mildly dangerous up to five being the most dangerous."
                        /> 

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
            )
        }
    }

const mapStateToProps = state => ({
    shields: state.shields.allShields
})

export default connect(mapStateToProps, 
    { 
        viewAllShields 
    }
)(AboutTheShields); 

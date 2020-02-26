// Import React
// =========================================================
    import React, { Component } from 'react';
    import { connect, useSelector, useDispatch } from "react-redux"; 
// Import Material UI Styles
// =========================================================
    import { withStyles  } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
    import { Table, TableBody, TableRow, TableCell, Grid, Tooltip, FormGroup, FormControlLabel, Switch, Menu, MenuItem } from '@material-ui/core/';
// Import Material UI Icons
// =========================================================
    import CloseIcon from '@material-ui/icons/Close';    
// Redux Imports
// =========================================================
    import { alertActions } from "../../Store/Actions/alertActions";

// Styling Imports
// =========================================================
    import "../../assets/styling/appStyle.css"
    
    const RedSwitch = withStyles({
    switchBase: {
        color: "#FC4A1A",
        '&$checked': {
        color: "#FC4A1A",
        },
        '&$checked + $track': {
        backgroundColor: "#FC4A1A",
        },
    },
    checked: {},
    track: {},
    })(Switch);

    {/* // TODO:////////////////// ---- Test counter for Redux */}
    // export const Count = () => {
    //     const counter = useSelector(state => state.counter)
    //     const dispatch = useDispatch()
    //     return (
    //         <>
    //             <div>
    //                 {counter}
                    
    //                 {counter >= 1 ? ( 
    //                     <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase</button>
    //                 ) : (
    //                     <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease</button>
    //                 )}
    //             </div>
            
    //         </>
    //     )
    // }
    
    // export const Count = () => {
    //     return (
    //         <div>4</div>
    //     )
    // }

    
class Alerts extends Component {
   
    constructor(props) {
        super(props);
            this.state = {
                isChecked: false,
            }
    }; 
    componentDidMount() {
        this.props.viewAllUserAppNotifications();
        this.props.viewActiveUserAppNotifications();
    }   

    handleChange = name => event => {
        this.setState = ({ [name]: event.target.checked });
    };

    handleClick = name => (event) => {
        this.setState = ({ [name]: event.target.checked });
    //  console.log({this.props.activeUserAppNotifications})
    }

    deleteAppNotification = () => {
        // console.log("Are you trying to delete me?");
    }

    render() {

        return (
            <>
                <Table style={{ width: "100%"}}>
                    <TableBody>
                    {!this.props.allUserAppNotifications.rows ? (<p align="center" >Loading...</p>) : 
                        this.props.allUserAppNotifications.rows.map((data) =>
                            <TableRow key={data.id} >
                                <TableCell >
                                    <Tooltip title={`Click to view ${data.ListedApp.name}`}>
                                        <img alt={data.ListedApp.name} src={data.ListedApp.logoUrl} style={{ height: 60, width: 60, borderRadius: "6px", paddingRight: 4 }}/>
                                    </Tooltip>
                                </TableCell>
                                
                                <TableCell> 
                                    <h4>{data.ListedApp.name}</h4>
                                </TableCell>
                                
                                <TableCell>
                                    <FormGroup>
                                        <Grid component="label" container  direction="row" justify="space-evenly" alignItems="center" spacing={1}>
                                            <Grid 
                                                item
                                            >
                                                <p value={data.alert} className="off" onClick={this.handleClick}>  Off </p> 

                                            </Grid>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={
                                                        <RedSwitch
                                                            onChange={this.handleChange('isChecked')}
                                                        />
                                                    }
                                                /> 
                                            </Grid>
                                            <Grid 
                                                item                                      
                                            >
                                                <p value={data.alert} className="on" onClick={this.handleClick}> On</p>                                                     
                                            </Grid>

                                            <Grid item>
                                                <Tooltip title={`Remove ${data.ListedApp.name} from alerts`}>
                                                    <CloseIcon  
                                                        type="submit"
                                                        className="closeIcon"
                                                      
                                                    />
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                </TableCell>
                            </TableRow>
                        )} 
                        
                    </TableBody>
                </Table>
            </>
        )
    }
}

 {/* // TODO:////////////////// */}
export function Notifications(props) {

    console.log(props)


      const [anchorEl, setAnchorEl] = React.useState(null);
    
      const handleClick = event => {
        console.log(props.activeAlerts);
        console.log(props.activeUserAppNotifications);
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const myMapArray = [
        {
            "id": 21,
            "alert": 0,
            "createdAt": "2020-02-02T22:09:11.000Z",
            "updatedAt": "2020-02-02T22:09:11.000Z",
            "ListedAppId": 25,
            "UserId": 8
            },
            {
            "id": 26,
            "alert": 0,
            "createdAt": "2020-02-02T22:09:11.000Z",
            "updatedAt": "2020-02-02T22:09:11.000Z",
            "ListedAppId": 33,
            "UserId": 8
        }
      ];

      console.log(myMapArray);
    
      return (
        <div>
          <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
           {props.showAlerts}
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

          <MenuItem disabled><h5>Recently Updated</h5></MenuItem>

{/*           
            {!this.props.viewActiveUserAppNotifications.rows ? (<p align="center" >Loading...</p>) : 
            this.props.viewActiveUserAppNotifications.rows.map((app, index) => 
                <MenuItem key={index} onClick={handleClose}>
                    <img alt={app.ListedApp.name} src={app.ListedApp.logoUrl} style={{ height: 20, width: 20, borderRadius: "6px", paddingRight: 4 }}/> {app.ListedApp.name}
                </MenuItem>
           )}  */}
           
          </Menu>
        </div>
      );
    }
    
    const mapStateToProps = state => ({
        alert: state.reviews.alerts,
        allUserAppNotifications: state.alerts.allUserAppNotifications,
        activeUserAppNotifications: state.alerts.activeUserAppNotifications
    })

    const actionCreators = {
        viewAllUserAppNotifications: alertActions.viewAllUserAppNotifications,
        viewActiveUserAppNotifications: alertActions.viewActiveUserAppNotifications
      };

    export default connect(mapStateToProps, actionCreators)(Alerts); 


// Import React
// =========================================================
    import React from 'react';
    import { connect } from "react-redux"; 
// Import Material UI Styles
// =========================================================
    import { withStyles  } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
    import { Table, TableBody, TableRow, TableCell, Menu, Grid, MenuItem, Tooltip, FormGroup, FormControlLabel, Switch } from '@material-ui/core/';
// Import Material UI Icons
// =========================================================
    import CloseIcon from '@material-ui/icons/Close';    

    import "../../assets/styling/appStyle.css"
    import { AlertsCall } from '../../Store/Actions/reviewActions'
    import API from '../../utils/API'
    
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
      
    export function Alerts(props) {
        const [state, setState] = React.useState({
            checkedA: true,
        });
            console.log(props)
        
        const handleChange = name => event => {
            API.changeAlert({
                alert: event.target.checked
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        };
        return (
            <Table style={{ width: "100%"}}>
                <TableBody>
                    {props.alerts.map((data) =>
                        <TableRow key={data.id} >
                            <TableCell >
                                <Tooltip title={`Click to view ${data.ListedApp.name}`} arrow>
                                    <img alt={data.ListedApp.name} src={data.ListedApp.logoUrl} style={{ height: 60, width: 60, borderRadius: "6px", paddingRight: 4 }}/>
                                </Tooltip>
                            </TableCell>
                            
                            <TableCell> 
                                <h4>{data.ListedApp.name}</h4>
                            </TableCell>
                            
                            <TableCell>
                                <FormGroup>
                                    <Grid component="label" container  direction="row" justify="space-evenly" alignItems="center" spacing={1}>
                                        <Grid item>Off</Grid>
                                        <Grid item>
                                            <FormControlLabel
                                                control={
                                                    <RedSwitch
                                                    checked={data.alert}
                                                    onChange={handleChange()}
                                                    value={data.id}
                                                    />
                                                }
                                            /> 
                                        </Grid>
                                        <Grid item>On</Grid>
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
        )
    }
    
    export function Notifications(props) {
      const [anchorEl, setAnchorEl] = React.useState(null);
    
      const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
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
          {this.props.alert.map((app, index) => 
            <MenuItem key={index} onClick={handleClose}>
                <img alt={app.name} src={app.logoUrl} style={{ height: 20, width: 20, borderRadius: "6px", paddingRight: 4 }}/> {app.name}
            </MenuItem>
            )} */}
           
          </Menu>
        </div>
      );
    }

    

    const mapStateToProps = state => ({
        alert: state.reviews.alerts
    })

    export default connect(mapStateToProps, 
        {
            AlertsCall
        }
    )(Alerts, Notifications); 

    
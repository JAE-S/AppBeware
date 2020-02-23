// Import React
// =========================================================
import React, { useState } from 'react';
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

import { viewAllUserAppNotifications, viewActiveUserAppNotifications } from "../../Store/Actions/userActions";
import "../../assets/styling/appStyle.css"
// import API from '../../utils/API'

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

export function Count(props) {
    return (
        // <div>{props.activeUserAppNotifications.count}</div>
        <div>{props.alertCounter}</div>
    )
}
  
export function Alerts(props) {
    const [checked, setTrue] = useState(true);
    
    // console.log(props)
    
    // TODO: This will need to be updated with new Redux mapping
    const handleChange = event => {
        console.log("Inside handleChange")
        // API.changeAlert({
        //     alert: event.target.checked
        // })
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        console.log(checked)
        // console.log(props)
    };
    const handleClick = (event) => {
        const id = event.target.value;
        console.log(id)
    }

    const deleteAppNotification = () => {
        console.log("Are you trying to delete me?");
    }

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
                                    <Grid 
                                        item
                                        onChange={handleChange()}
                                       
                                    >
                                     <a   value="hi" onClick={handleClick()}>  Off </a> 
{/* 
                                     <a  onClick={() => setTrue(false)}>  Off </a>  */}
                                    </Grid>
                                    <Grid item>
                                        <FormControlLabel
                                            control={
                                                <RedSwitch
                                                checked={data.alert}
                                                onChange={handleChange()}
                                                value={data.alert}
                                                />
                                            }
                                        /> 
                                    </Grid>
                                    <Grid 
                                        item
                                        onChange={handleChange()}
                                        // onClick={handleClick()}
                                        value={data.alert}
                                        onClick={() => setTrue(true)}
                                    >
                                        On
                                    </Grid>

                                    <Grid item>
                                        <Tooltip title={`Remove ${data.ListedApp.name} from alerts`}>
                                            <CloseIcon  
                                                type="submit"
                                                className="closeIcon"
                                                // onChange={deleteAppNotification()}
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

export function NotificationsMenu(props) {
    
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
      {props.children}

      {/* <MenuItem disabled><h5>Recently Updated</h5></MenuItem> */}

        {/* {props.activeAlerts.map((app, index) =>  */}
            {/* <MenuItem key={1} onClick={handleClose}>
                <img alt={"My new app"} src={"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/07/cd/52/07cd5247-a9a9-dce3-d788-776f3e53ee43/source/1024x1024bb.jpg"} style={{ height: 20, width: 20, borderRadius: "6px", paddingRight: 4 }}/> {"My new app"}
            </MenuItem> */}
        {/* )} */}

        {/* {myMapArray.map((app, index) => 
                <MenuItem key={app.id} onClick={handleClose}>
                <Count alertCounter="13"/>
            <img alt={"My new app"} src={"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/07/cd/52/07cd5247-a9a9-dce3-d788-776f3e53ee43/source/1024x1024bb.jpg"} style={{ height: 20, width: 20, borderRadius: "6px", paddingRight: 4 }}/> {app.id}
        </MenuItem>
        )} */}

       {/* {props.activeUserAppNotifications.rows.map((app, index) => 
            <MenuItem key={index} onClick={handleClose}>
                <img alt={app.ListedApp.name} src={app.ListedApp.logoUrl} style={{ height: 20, width: 20, borderRadius: "6px", paddingRight: 4 }}/> {app.ListedApp.name}
            </MenuItem>
       )} */}
       
      </Menu>
    </div>
  );
}
// class Notification extends Component {
//     componentDidMount() { 
//         this.props.viewActiveUserAppNotifications();
//     }


// }

const mapStateToProps = state => ({
    alert: state.reviews.alerts,
    allUserAppNotifications: state.notifications.allUserAppNotifications,
    activeUserAppNotifications: state.notifications.activeUserAppNotifications
})

export default connect(mapStateToProps, 
    {
        viewAllUserAppNotifications,
        viewActiveUserAppNotifications
    }
)(Alerts); 
// )(Alerts, Notifications); 


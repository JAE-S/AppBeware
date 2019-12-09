// Import React
// =========================================================
    import React from 'react';
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
// Import Media
// =========================================================
    import CB_icon from "../../assets/images/shields/cyberbullying.png";
    import DB_icon from "../../assets/images/shields/dangerous_behavior.png";
    import PR_icon from "../../assets/images/shields/predator_risk.png";

    const data = [
        { logoUrl: "https://images-na.ssl-images-amazon.com/images/I/61S7YvhOwVL.png",
          name: "Burnbook",
          warnRatingAverage: 2.63,
          badges: CB_icon,
          createdAt: '2 hours ago',
        },
        { logoUrl: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/4a/60/3f/4a603f8b-56e2-eeb7-f25b-be00151e271b/source/1024x1024bb.jpg",
          name: "Holla",
          warnRatingAverage: 4.1,
          badges: PR_icon,
          createdAt: '1 hours ago',
        },
      
        { logoUrl: "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/1b/5d/7a/1b5d7a8e-9c92-3d42-3118-97d3d6aa87e1/source/1024x1024bb.jpg",
          name: "TikTok",
          warnRatingAverage: 2.83,
          badges: DB_icon,
          createdAt: '8 hours ago',
        }
      
      ];
    
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
      
    export function Alerts() {
        const [state, setState] = React.useState({
            checkedA: true,
        });
        
        const handleChange = name => event => {
            setState({ ...state, [name]: event.target.checked });
        };
        return (
            <Table style={{ width: "100%"}}>
                <TableBody>
                    {data.map((app, index) => 
                        <TableRow key={index} >
                            <TableCell >
                                <Tooltip title={`Click to view ${app.name}`} arrow>
                                    <img alt={app.name} src={app.logoUrl} style={{ height: 60, width: 60, borderRadius: "6px", paddingRight: 4 }}/>
                                </Tooltip>
                            </TableCell>
                            
                            <TableCell> 
                                <h4>{app.name}</h4>
                            </TableCell>
                            
                            <TableCell>
                                <FormGroup>
                                    <Grid component="label" container  direction="row" justify="space-evenly" alignItems="center" spacing={1}>
                                        <Grid item>Off</Grid>
                                        <Grid item>
                                            <FormControlLabel
                                                control={
                                                    <RedSwitch
                                                    checked={state.checkedA}
                                                    onChange={handleChange('checkedA')}
                                                    value="checkedA"
                                                    />
                                                }
                                            /> 
                                        </Grid>
                                        <Grid item>On</Grid>
                                        <Grid item>
                                        <Tooltip title={`Remove ${app.name} from alerts`}>
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

    export function Count() {
        return (
            <div>{data.length}</div>
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
          
          {data.map((app, index) => 
            <MenuItem key={index} onClick={handleClose}>
                <img alt={app.name} src={app.logoUrl} style={{ height: 20, width: 20, borderRadius: "6px", paddingRight: 4 }}/> {app.name}
            </MenuItem>
            )}
           
          </Menu>
        </div>
      );
    }

    
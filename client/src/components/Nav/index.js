// Import React
// =========================================================
    import React, {useSelector} from 'react'; 
    import { Link } from 'react-router-dom'
    import { connect } from "react-redux"; 
// Import Material UI Styles
// =========================================================
    import { fade, makeStyles } from '@material-ui/core/styles';
// Import Material UI components
// =========================================================
    import {AppBar, Toolbar, IconButton, Typography, Badge, MenuItem, Menu } from '@material-ui/core';
// Import Material UI Icons
// =========================================================
    import Dashboard from '@material-ui/icons/Dashboard';
    // import NotificationsIcon from '@material-ui/icons/Notifications';
    import MoreIcon from '@material-ui/icons/MoreVert';
// Components
// =========================================================
  import API from '../../utils/API'
// Components
// =========================================================
    import Modal from "../Modals";
    import AboutTheShields from "../AboutTheShields";
    import Alerts, { Count } from "../Alerts";
    // import {Alerts, Notifications, Count } from "../Alerts";

    import { userActions } from '../../Store/Actions/auth';
    import { viewAllUserAppNotifications, viewActiveUserAppNotifications } from "../../Store/Actions/userActions";

// Custom Styles
// =========================================================
  const useStyles = makeStyles(theme => ({
      nav: {
      background: "#56585D",
      },
      grow: {
          flexGrow: 1,
      },
      menuButton: {
          marginRight: theme.spacing(2),
      },
      title: {
          display: 'none',
          [theme.breakpoints.up('sm')]: {
          display: 'block',
          color:'#fff'
          },
      },
      search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginRight: theme.spacing(2),
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
          },
      },
      searchIcon: {
          width: theme.spacing(7),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      },
      inputRoot: {
          color: 'inherit',
      },
      inputInput: {
          padding: theme.spacing(2, 1, 1, 7),
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
          //   width: 200,
          },
      },
      sectionDesktop: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
          display: 'flex',
          },
      },
      sectionMobile: {
          display: 'flex',
          [theme.breakpoints.up('md')]: {
          display: 'none',
          },
      },
  }));
  
// Export Nav bar
// =========================================================
  function Nav(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
      setAnchorEl(event.currentTarget);
      props.viewActiveUserAppNotifications();
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleSignOut = () => {
      API.signOut()
      .then(
        window.location.pathname ='/'
      )
      .catch(err => console.log(err))
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
      <MenuItem onClick={handleMenuClose} style={{ borderBottom: "1px solid grey", paddingBottom: "10px", marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      {/* // TODO:////////////////// */}
      {/* Add user name to nav bar */}
        {/* <h3>{props.user.name}</h3>  */}
        <img alt="Profile" src="https://imagizer.imageshack.com/img921/9782/SQwL53.png" style={{ height: 36, width: 36, borderRadius: "50%"}}/>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/profilePage" style={{ textDecoration: 'none', color: 'black' }}>
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
          <Modal
              modalTitle="Alert Settings"
              openModal="Alert Settings"
              modalBody2={<Alerts
              alerts= {props.allUserAppNotifications.rows}/>}
              modalButton1="Close"
          />
        
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Modal
              modalTitle={
                <div align="center">
                  <h3 style={{margin: 0, borderBottom: "1px solid silver", paddingBottom: "10px"}}>How does the rating system work?</h3>
                  <p style={{margin: 0, marginTop: "10px"}}>
                  <small>
                    AppBeware's rating system is based on 2 main categories: Danger Alerts and Shield Alerts.
                  </small>
                  </p>
                </div>
              }
              openModal="About The Ratings"
              modalBody={<AboutTheShields/>}
              modalButton1="Close"
          />
        </MenuItem>
        <MenuItem onClick={handleSignOut}> 
          Sign Out
        </MenuItem>
      </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMenuClose} style={{ borderBottom: "1px solid grey", paddingBottom: "10px", marginLeft: "10px", marginRight: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <h3>Jane Doe</h3> 
        <div style={{ backgroundColor: "grey", height: 36, width: 36, borderRadius: "50%" }}/>
      </MenuItem>
      {/* Profile Link */}
      <MenuItem onClick={handleMenuClose}>
        <Link to="/profilePage" style={{ textDecoration: 'none' }}>
        Profile
        </Link>
      </MenuItem>
      {/* Bage Count */}
      <MenuItem onClick={handleMenuClose}>
          <Badge 
          badgeContent={<Count/>}
          // badgeContent={props.activeUserAppNotifications.count}
          >
              Alerts
          </Badge>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Modal
            modalTitle="What are the Shields?"
            openModal="About The Shields"
            modalBody={<AboutTheShields/>}
            modalButton1="Close"
          />
        </MenuItem>
        <MenuItem onClick={handleSignOut} href="/"> 
          Sign Out
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.grow}>
        <AppBar className={classes.nav} position="fixed"style={{marginBottom: "64px"}}>
           <Toolbar>
            
            <Typography className={classes.title} variant="h6" noWrap>            
              <Link className={classes.title} style={{ textDecoration: 'none' }} to='/Homepage' >
                AppBeware
                </Link>
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton 
              aria-label={`show ${<Count/>} new notifications`} 
              // aria-label={`show ${props.activeUserAppNotifications.count} new notifications`} 
              color="inherit">
                <Badge 
                badgeContent={<Count/>} 
                // badgeContent={props.activeUserAppNotifications.count} 
                color="secondary">
                  {/* <Notifications 
                    showAlerts={<NotificationsIcon />}
                    activeAlerts={props.activeUserAppNotifications.rows}
                    /> */}
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Dashboard  />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }

  
  const mapStateToProps = state => ({
    userInfo: state.authentication.userInfo,
    // user: state.user.userInfo,
    // isloggedIn: state.user.isloggedIn,
    allUserAppNotifications: state.notifications.allUserAppNotifications,
    activeUserAppNotifications: state.notifications.activeUserAppNotifications
})

export default connect(mapStateToProps, 
    {
        // userInfo,
        // AlertsCall,
        userActions,
        viewAllUserAppNotifications,
        viewActiveUserAppNotifications
    }
)(Nav); 
